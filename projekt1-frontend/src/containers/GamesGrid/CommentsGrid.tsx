import { Box, Button, TextField } from "@mui/material";
import { useCallback } from "react";
import { CommentDTO } from "../../api";
import Comment from "../../components/Comment/Comment";
import Colors from "../../colors.json";

interface CommentsGridProps {
    comments: CommentDTO[] | undefined,
    newComment: string,
    setNewComment: (newComment: string) => void
}

function CommentsGrid(props: CommentsGridProps) {

    const getCommentCards = useCallback(() => {
        return props.comments?.map(comment => <Comment comment={comment} />);
    }, [props.comments]);

    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <TextField
                id="add-comment"
                multiline
                label="Add comment"
                variant="filled"
                sx={{ marginBottom: "10px" }}
                rows={4}
                value={props.newComment}
                onChange={(event: any) => props.setNewComment(event.target.value)} />
            <Button variant="contained" sx={{ backgroundColor: Colors["second"] }}>
                Submit
            </Button>
        </Box>
        {getCommentCards()}
    </Box>
}

export default CommentsGrid;