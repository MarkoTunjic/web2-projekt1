import { Button, TableCell, TableContainer, TableRow, Paper, Table, TableHead, TableBody, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { GameDTO } from "../../api";
import Colors from "../../colors.json";
import { useAuth0 } from "@auth0/auth0-react";

interface GamesTableProps {
    games: GameDTO[] | undefined,
    currentEditingRow: number,
    setCurrentEditingRow: (index: number) => void
}

function GamesTable(props: GamesTableProps) {
    const [firstCompetitorScore, setFirstCompetitorScore] = useState<number>();
    const [secondCompetitorScore, setSecondCompetitorScore] = useState<number>();
    const { isAuthenticated, user } = useAuth0();

    const getButton = useCallback((row: GameDTO, index: number) => {
        if (!isAuthenticated) {
            return <></>;
        }
        return props.currentEditingRow !== index ?
            <Button variant="contained" onClick={() => {
                setFirstCompetitorScore(row.firstCompetitorScore)
                setSecondCompetitorScore(row.secondCompetitorScore)
                props.setCurrentEditingRow(index);
            }}>Edit</Button> :
            <>
                <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }}>Save</Button>
                <Button onClick={() => props.setCurrentEditingRow(-1)} variant="contained" sx={{ backgroundColor: Colors["third"] }}>Cancel</Button>
            </>
    }, [isAuthenticated, props.currentEditingRow])

    const getGameRows = useCallback(
        () => {
            if (!isAuthenticated) {
                props.setCurrentEditingRow(-1);
            }
            return props.games?.map((row, index) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.firstCompetitor?.name + " aka. " + row.firstCompetitor?.alias}
                    </TableCell>
                    <TableCell align="left">
                        {row.secondCompetitor?.name + " aka. " + row.secondCompetitor?.alias}
                    </TableCell>
                    {
                        props.currentEditingRow === index ?
                            <TextField
                                id="first-score"
                                label="First competitor score"
                                variant="outlined"
                                type="number"
                                value={firstCompetitorScore}
                                onChange={(event: any) => setFirstCompetitorScore(event.target.value)} /> :
                            <TableCell align="center">
                                {row.firstCompetitorScore}
                            </TableCell>
                    }
                    {
                        props.currentEditingRow === index ?
                            <TextField
                                id="first-score"
                                label="First competitor score"
                                variant="outlined"
                                type="number"
                                value={secondCompetitorScore}
                                onChange={(event: any) => setSecondCompetitorScore(event.target.value)} /> :
                            <TableCell align="center">
                                {row.secondCompetitorScore}
                            </TableCell>
                    }
                    <TableCell align="center">
                        {row.scheduledDate?.toDateString()}
                    </TableCell>
                    <TableCell align="right">
                        {
                            getButton(row, index)
                        }
                    </TableCell>
                </TableRow>
            ))
        },
        [props.games, props.currentEditingRow, firstCompetitorScore, secondCompetitorScore],
    )

    return <TableContainer component={Paper} sx={{ width: "100%", marginTop: "10px", marginRight: "20px" }}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>First competitor</TableCell>
                    <TableCell align="left">Second competitor</TableCell>
                    <TableCell align="center">First competitor score</TableCell>
                    <TableCell align="center">Second competitor score</TableCell>
                    <TableCell align="center">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {getGameRows()}
            </TableBody>
        </Table>
    </TableContainer>
}

export default GamesTable;