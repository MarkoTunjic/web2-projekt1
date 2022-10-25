import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/system";
import { RoundDTO } from "../../api";
import Colors from "../../colors.json"
interface TableProps {
    rounds: RoundDTO[] | undefined,
    currentEditingRow: number,
    setCurrentEditingRow: (index: number) => void
}

function RoundsTable(props: TableProps) {
    const navigate = useNavigate();

    return <TableContainer component={Paper} sx={{ width: "65%", marginTop: "10px" }}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell align="right">Games played</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.rounds?.map((row, index) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.ordinalNumber}
                        </TableCell>
                        <TableCell align="right">{row.gamesPlayed}</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" onClick={() => navigate("/games/round/" + row.id)}>Details</Button>
                            {/* {props.currentEditingRow !== index ?
                                <Button variant="contained" onClick={() => props.setCurrentEditingRow(index)}>Edit</Button> :
                                <>
                                    <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }}>Save</Button>
                                    <Button variant="contained" sx={{ backgroundColor: Colors["third"] }}>Cancel</Button>
                                </>
                            } */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default RoundsTable;