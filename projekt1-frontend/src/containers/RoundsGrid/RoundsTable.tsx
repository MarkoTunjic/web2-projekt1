import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/system";
import { RoundDTO } from "../../api";
import Colors from "../../colors.json"
import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface TableProps {
    rounds: RoundDTO[] | undefined,
}

function RoundsTable(props: TableProps) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();

    const getRows = useCallback(
        () => {
            return props.rounds?.map((row) => (
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
                    </TableCell>
                </TableRow>
            ))
        },
        [props.rounds],
    )


    return <Box sx={{ width: "65%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {isAuthenticated && <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }}>Add</Button>}
        <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="right">Games played</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows()}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>

}

export default RoundsTable;