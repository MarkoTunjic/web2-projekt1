import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RoundDTO } from "../../api";
import { ClientsContext } from "../../store/ClientsContext";
import RoundsTable from "./RoundsTable";

function RoundsGrid() {
    const [data, setData] = useState<RoundDTO[]>();
    const { roundClient } = useContext(ClientsContext);

    async function getRounds(): Promise<void> {
        setData(await roundClient.getAllRounds());
    }

    useEffect(() => {
        getRounds();
    }, [])

    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>Rounds</h1>
        <RoundsTable rounds={data} />
    </Box>
}

export default RoundsGrid;