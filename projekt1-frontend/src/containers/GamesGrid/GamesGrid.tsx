import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentDTO, GameDTO } from "../../api";
import { ClientsContext } from "../../store/ClientsContext";
import CommentsGrid from "./CommentsGrid";
import GamesTable from "./GamesTable";
import NewGameEntry from "./NewGameEntry";

function GamesGrid() {
    const [games, setGames] = useState<GameDTO[]>();
    const [comments, setComments] = useState<CommentDTO[]>();
    const [currentEditingRow, setCurrentEditingRow] = useState<number>(-1);
    let { roundId } = useParams();
    const { gameClient, roundCommentClient } = useContext(ClientsContext);

    async function getGames(): Promise<void> {
        setGames(await gameClient.getAllGamesByRoundId({ roundId: Number.parseInt(roundId!) }));
    }

    async function getComments(): Promise<void> {
        setComments(await roundCommentClient.getAllCommentsForRound({ roundId: Number.parseInt(roundId!) }));
    }

    useEffect(() => {
        getGames();
        getComments();
    }, [])

    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1 key="header">Games for round {roundId}</h1>
            <GamesTable key="table" games={games} currentEditingRow={currentEditingRow} setCurrentEditingRow={setCurrentEditingRow} />
            <NewGameEntry key="new" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>Comments</h1>
            <CommentsGrid comments={comments} />
        </Box>
    </Box>
}

export default GamesGrid;