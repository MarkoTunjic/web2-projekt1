import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { CompetitorDTO } from "../../api";

interface TableProps {
    competitors: CompetitorDTO[] | undefined
}

function CompetitorTable(props: TableProps) {
    return <TableContainer component={Paper} sx={{ width: "65%", marginTop: "10px" }}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Alias</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.competitors?.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.alias}</TableCell>
                        <TableCell align="right">{row.pointsSum}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default CompetitorTable;