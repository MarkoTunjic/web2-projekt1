import { Button, TableCell, TableContainer, TableRow, Paper, Table, TableHead, TableBody } from "@mui/material";
import { useCallback } from "react";
import { CommentDTO, GameDTO } from "../../api";
import Colors from "../../colors.json"

interface GamesTableProps {
    games: GameDTO[] | undefined,
    currentEditingRow: number,
    setCurrentEditingRow: (index: number) => void
}

function GamesTable(props: GamesTableProps) {
    const getGameRows = useCallback(
        () => {
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
                    <TableCell align="center">
                        {row.firstCompetitorScore}
                    </TableCell>
                    <TableCell align="center">
                        {row.secondCompetitorScore}
                    </TableCell>
                    <TableCell align="center">
                        {row.scheduledDate?.toLocaleString()}
                    </TableCell>
                    <TableCell align="right">
                        {
                            props.currentEditingRow !== index ?
                                <Button variant="contained" onClick={() => props.setCurrentEditingRow(index)}>Edit</Button> :
                                <>
                                    <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }}>Save</Button>
                                    <Button onClick={() => props.setCurrentEditingRow(-1)} variant="contained" sx={{ backgroundColor: Colors["third"] }}>Cancel</Button>
                                </>
                        }
                    </TableCell>
                </TableRow>
            ))
        },
        [props.games, props.currentEditingRow],
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