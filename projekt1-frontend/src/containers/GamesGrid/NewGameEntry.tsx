import { Box, Card, CardContent, TextField, Button } from "@mui/material";
import { useState } from "react";
import { NewGameRequest } from "../../api";

interface NewGameEntryProps {
    createNewGame: (newGameRequest: NewGameRequest) => void
}

function NewGameEntry(props: NewGameEntryProps) {
    const [newGameEntry, setNewGameEntry] = useState<NewGameRequest>({});

    return <Card sx={{ marginTop: "20px", marginRight: "20px" }}>
        <CardContent>
            <Box sx={{ minWidth: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TextField
                    id="first-id"
                    label="First competitor id"
                    variant="outlined"
                    type="number"
                    value={newGameEntry.firstCompetitorId}
                    onChange={(event: any) => setNewGameEntry({ ...newGameEntry, firstCompetitorId: event.target.value })}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="second-id"
                    label="Second competitor id"
                    variant="outlined"
                    type="number"
                    value={newGameEntry.secondCompetitorId}
                    onChange={(event: any) => setNewGameEntry({ ...newGameEntry, secondCompetitorId: event.target.value })}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="first-score"
                    label="First competitor score"
                    variant="outlined"
                    type="number"
                    value={newGameEntry.firstCompetitorScore}
                    onChange={(event: any) => setNewGameEntry({ ...newGameEntry, firstCompetitorScore: event.target.value })}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="second-score"
                    label="Second competitor score"
                    variant="outlined"
                    type="number"
                    value={newGameEntry.secondCompetitorScore}
                    onChange={(event: any) => setNewGameEntry({ ...newGameEntry, secondCompetitorScore: event.target.value })}
                    sx={{ marginRight: "5px" }} />
                <TextField
                    id="date"
                    variant="outlined"
                    type="date"
                    value={newGameEntry.date}
                    onChange={(event: any) => {
                        setNewGameEntry({ ...newGameEntry, date: event.target.value });
                    }
                    }
                    sx={{ marginRight: "5px" }} />
                <Button variant="contained" onClick={() => {
                    props.createNewGame({ ...newGameEntry, date: new Date(newGameEntry.date?.toString()!) });
                    setNewGameEntry((old) => { return {} });
                }}>Submit</Button>
            </Box>
        </CardContent>
    </Card>

}

export default NewGameEntry;