import { Box, Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { CommentDTO } from "../../api";
import Comment from "../../components/Comment/Comment";
import Colors from "../../colors.json";
import { useAuth0 } from "@auth0/auth0-react";

interface CommentsGridProps {
    comments: CommentDTO[] | undefined,
    addComment: (newComment: string) => void,
    deleteComment: (commentId: number) => void,
    editComment: (commentId: number, commentText: string) => void
}

function CommentsGrid(props: CommentsGridProps) {
    const [newComment, setNewComment] = useState<string>("");
    const { isAuthenticated } = useAuth0();

    const getCommentCards = useCallback(() => {
        return props.comments?.map(comment => <Comment key={comment.id} editComment={props.editComment} comment={comment} deleteComment={props.deleteComment} />);
    }, [props.comments, isAuthenticated]);

    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        {isAuthenticated && <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <TextField
                id="add-comment"
                multiline
                label="Add comment"
                variant="filled"
                sx={{ marginBottom: "10px" }}
                rows={4}
                value={newComment}
                onChange={(event: any) => {
                    setNewComment(event.target.value);
                }} />
            <Button variant="contained" sx={{ backgroundColor: Colors["second"] }}
                onClick={() => {
                    props.addComment(newComment)
                    setNewComment("");
                }}>
                Submit
            </Button>
        </Box>}
        {getCommentCards()}
    </Box>
}

export default CommentsGrid;