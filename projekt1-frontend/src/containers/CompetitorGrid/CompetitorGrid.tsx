import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CompetitorDTO } from "../../api";
import { ClientsContext } from "../../store/ClientsContext";
import CompetitorTable from "./CompetitorTable";

function CompetitorGrid() {
    const [data, setData] = useState<CompetitorDTO[]>();
    const { competitorClient } = useContext(ClientsContext);

    async function getCompetitors(): Promise<void> {
        setData(await competitorClient.getAllCompetitors());
    }

    useEffect(() => {
        getCompetitors();
    }, [])

    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>All competitors and their points</h1>
        <CompetitorTable competitors={data} />
    </Box>
}

export default CompetitorGrid;