import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/system";
import { PrincipalDTOPrincipalTypeEnum, RoundDTO } from "../../api";
import Colors from "../../colors.json"
import { useCallback, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PrincipalContext } from "../../store/Principalcontext";

interface TableProps {
    rounds: RoundDTO[] | undefined,
    addRound: () => void
}

function RoundsTable(props: TableProps) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    const { principal } = useContext(PrincipalContext);

    const getRows = useCallback(
        () => {
            console.log(principal)
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
        [props.rounds, principal],
    )


    return <Box sx={{ width: "65%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {(isAuthenticated && principal?.principalType === PrincipalDTOPrincipalTypeEnum.Admin) && <Button variant="contained" sx={{ backgroundColor: Colors["fourth"] }} onClick={() => props.addRound()}>Add</Button>}
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