import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentDTO, EditGameRequest, GameDTO, NewGameRequest, PrincipalDTOPrincipalTypeEnum } from "../../api";
import { ClientsContext } from "../../store/ClientsContext";
import CommentsGrid from "./CommentsGrid";
import GamesTable from "./GamesTable";
import NewGameEntry from "./NewGameEntry";
import { useAuth0 } from "@auth0/auth0-react";
import { PrincipalContext } from "../../store/Principalcontext";

function GamesGrid() {
    const [games, setGames] = useState<GameDTO[]>();
    const [comments, setComments] = useState<CommentDTO[]>();
    const [currentEditingRow, setCurrentEditingRow] = useState<number>(-1);
    const { roundId } = useParams();
    const { gameClient, roundCommentClient } = useContext(ClientsContext);
    const { isAuthenticated } = useAuth0();
    const { principal } = useContext(PrincipalContext);

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

    async function deleteComment(commentId: number) {
        await roundCommentClient.deleteComment({ commentId: commentId });
        getComments();
    }

    async function editGame(editGameRequest: EditGameRequest, gameId: number) {
        await gameClient.editScores(
            {
                editGameRequest: editGameRequest,
                id: gameId
            }
        );
        console.log("hello");
        getGames();
    }

    async function addComment(newComment: string) {
        await roundCommentClient.newComment({ roundId: Number.parseInt(roundId!), body: newComment });
        getComments();
    }

    async function editComment(commentId: number, commentText: string) {
        await roundCommentClient.updateComment({ commentId: commentId, body: commentText });
        getComments();
    }

    useEffect(() => {
        getGames();
        getComments();
    }, [])

    return <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1 key="header">Games for round {games !== undefined ? games[0]?.roundOrdinalNumber : undefined}</h1>
            <GamesTable key="table" games={games} currentEditingRow={currentEditingRow} setCurrentEditingRow={setCurrentEditingRow} editGame={editGame} />
            {(isAuthenticated && principal?.principalType === PrincipalDTOPrincipalTypeEnum.Admin) && <NewGameEntry key="new" createNewGame={postNewGame} />}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>Comments</h1>
            <CommentsGrid editComment={editComment} comments={comments} addComment={addComment} deleteComment={deleteComment} />
        </Box>
    </Box>
}

export default GamesGrid;