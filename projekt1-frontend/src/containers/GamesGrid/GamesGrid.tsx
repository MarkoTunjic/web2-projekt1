import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentDTO, GameDTO, NewGameRequest } from "../../api";
import { ClientsContext } from "../../store/ClientsContext";
import CommentsGrid from "./CommentsGrid";
import GamesTable from "./GamesTable";
import NewGameEntry from "./NewGameEntry";
import { useAuth0 } from "@auth0/auth0-react";

function GamesGrid() {
    const [games, setGames] = useState<GameDTO[]>();
    const [comments, setComments] = useState<CommentDTO[]>();
    const [currentEditingRow, setCurrentEditingRow] = useState<number>(-1);
    const { roundId } = useParams();
    const { gameClient, roundCommentClient } = useContext(ClientsContext);
    const { isAuthenticated } = useAuth0();

    async function getGames(): Promise<void> {
        setGames(await gameClient.getAllGamesByRoundId({ roundId: Number.parseInt(roundId!) }));
    }

    async function getComments(): Promise<void> {
        setComments(await roundCommentClient.getAllCommentsForRound({ roundId: Number.parseInt(roundId!) }));
    }

    async function postNewGame(newGameRequest: NewGameRequest) {
        await gameClient.createNewGame({ newGameRequest: newGameRequest, roundId: Number.parseInt(roundId!) });
        getGames();
    }

    useEffect(() => {
        getGames();
        getComments();
    }, [])

    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1 key="header">Games for round {roundId}</h1>
            <GamesTable key="table" games={games} currentEditingRow={currentEditingRow} setCurrentEditingRow={setCurrentEditingRow} />
            {isAuthenticated && <NewGameEntry key="new" createNewGame={postNewGame} />}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>Comments</h1>
            <CommentsGrid comments={comments} />
        </Box>
    </Box>
}

export default GamesGrid;