import { Box, Card, CardContent, TextField, Button } from "@mui/material";
import { useState } from "react";

function NewGameEntry() {
    const [firstCompetitorId, setFirstCompetitorId] = useState<number>();
    const [secondCompetitorId, setSecondCompetitorId] = useState<number>();
    const [firstCompetitorScore, setFirstCompetitorScore] = useState<number>();
    const [secondCompetitorScore, setSecondCompetitorScore] = useState<number>();
    const [date, setDate] = useState<Date>();

    return <Card sx={{ marginTop: "20px", marginRight: "20px" }}>
        <CardContent>
            <Box sx={{ minWidth: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TextField
                    id="first-id"
                    label="First competitor id"
                    variant="outlined"
                    type="number"
                    value={firstCompetitorId}
                    onChange={(event: any) => setFirstCompetitorId(event.target.value)}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="second-id"
                    label="Second competitor id"
                    variant="outlined"
                    type="number"
                    value={secondCompetitorId}
                    onChange={(event: any) => setSecondCompetitorId(event.target.value)}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="first-score"
                    label="First competitor score"
                    variant="outlined"
                    type="number"
                    value={firstCompetitorScore}
                    onChange={(event: any) => setFirstCompetitorScore(event.target.value)}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="second-score"
                    label="Second competitor score"
                    variant="outlined"
                    type="number"
                    value={secondCompetitorScore}
                    onChange={(event: any) => setSecondCompetitorScore(event.target.value)}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="date"
                    variant="outlined"
                    type="date"
                    value={date}
                    onChange={(event: any) => setDate(event.target.value)}
                    sx={{ marginRight: "5px" }} />
                <Button variant="contained" onClick={() => console.log(date)}>Submit</Button>
            </Box>
        </CardContent>
    </Card>

}

export default NewGameEntry;