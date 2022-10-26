import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useCallback } from "react";
import { CompetitorDTO } from "../../api";

interface TableProps {
    competitors: CompetitorDTO[] | undefined
}

function CompetitorTable(props: TableProps) {
    const getRows = useCallback(
        () => {
            return props.competitors?.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.alias}</TableCell>
                    <TableCell align="right">{row.pointsSum}</TableCell>
                </TableRow>
            ))
        },
        [props.competitors],
    )


    return <TableContainer component={Paper} sx={{ width: "65%", marginTop: "10px" }}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Alias</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {getRows()}
            </TableBody>
        </Table>
    </TableContainer>
}

export default CompetitorTable;