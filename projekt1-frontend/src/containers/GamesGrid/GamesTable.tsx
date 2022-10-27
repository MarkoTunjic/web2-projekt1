import { Button, TableCell, TableContainer, TableRow, Paper, Table, TableHead, TableBody, TextField, Typography } from "@mui/material";
import { useCallback, useState, useContext } from "react";
import { GameDTO, EditGameRequest, PrincipalDTOPrincipalTypeEnum } from "../../api";
import Colors from "../../colors.json";
import { useAuth0 } from "@auth0/auth0-react";
import { PrincipalContext } from "../../store/Principalcontext";

interface GamesTableProps {
    games: GameDTO[] | undefined,
    currentEditingRow: number,
    setCurrentEditingRow: (index: number) => void,
    editGame: (editGameRequest: EditGameRequest, gameId: number) => void
}

function GamesTable(props: GamesTableProps) {
    const [editGameRequest, setEditGameRequest] = useState<EditGameRequest>({});
    const { isAuthenticated } = useAuth0();
    const { principal } = useContext(PrincipalContext);

    const getButton = useCallback((row: GameDTO, index: number) => {
        if (!isAuthenticated || principal?.principalType !== PrincipalDTOPrincipalTypeEnum.Admin) {
            return <></>;
        }
        return props.currentEditingRow !== index ?
            <TableCell>
                <Button variant="contained" onClick={() => {
                    setEditGameRequest({ secondCompetitorScore: row.secondCompetitorScore, firstCompetitorScore: row.firstCompetitorScore })
                    props.setCurrentEditingRow(index);
                }}>Edit</Button>
            </TableCell> :
            <>
                <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }} onClick={() => {
                    row.firstCompetitorScore = editGameRequest.firstCompetitorScore;
                    row.secondCompetitorScore = editGameRequest.secondCompetitorScore;
                    props.editGame(editGameRequest, row.id!)
                    props.setCurrentEditingRow(-1);
                }}>Save</Button>
                <Button onClick={() => props.setCurrentEditingRow(-1)} variant="contained" sx={{ backgroundColor: Colors["third"] }}>Cancel</Button>
            </>
    }, [isAuthenticated, props.currentEditingRow, editGameRequest])

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
                    <TableCell align="center">
                        {
                            props.currentEditingRow === index ?
                                <TextField
                                    id="first-score"
                                    label="First competitor score"
                                    variant="outlined"
                                    type="number"
                                    value={editGameRequest.firstCompetitorScore}
                                    onChange={(event: any) => setEditGameRequest({ ...editGameRequest, firstCompetitorScore: event.target.value })} /> :
                                <Typography>
                                    {row.firstCompetitorScore}
                                </Typography>
                        }
                    </TableCell>
                    <TableCell align="center">
                        {
                            props.currentEditingRow === index ?
                                <TextField
                                    id="second-score"
                                    label="Second competitor score"
                                    variant="outlined"
                                    type="number"
                                    value={editGameRequest.secondCompetitorScore}
                                    onChange={(event: any) => setEditGameRequest({ ...editGameRequest, secondCompetitorScore: event.target.value })} /> :
                                <Typography>
                                    {row.secondCompetitorScore}
                                </Typography>
                        }
                    </TableCell>
                    <TableCell align="center">
                        {row.scheduledDate?.toDateString()}
                    </TableCell>
                    <TableCell align="right">
                        {
                            getButton(row, index)
                        }
                    </TableCell>
                </TableRow >
            ))
        }, [editGameRequest, props]);

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