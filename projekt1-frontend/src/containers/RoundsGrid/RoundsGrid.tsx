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

    async function addRound() {
        let nextOrdinal = 1;
        if (data !== undefined && data.length !== 0) {
            nextOrdinal = data?.at(data.length - 1)?.ordinalNumber! + 1
        }
        await roundClient.addRound({ body: nextOrdinal })
        getRounds();
    }

    useEffect(() => {
        getRounds();
    }, [])

    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>Rounds</h1>
        <RoundsTable rounds={data} addRound={addRound} />
    </Box>
}

export default RoundsGrid;