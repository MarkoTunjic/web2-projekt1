import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CommentDTO, PrincipalDTOPrincipalTypeEnum } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { PrincipalContext } from "../../store/Principalcontext";
import { useContext, useState } from "react";

interface CommentProps {
    comment: CommentDTO,
    deleteComment: (commentId: number) => void,
    editComment: (commentId: number, commentText: string) => void
}

function Comment(props: CommentProps) {
    const { isAuthenticated } = useAuth0();
    const { principal } = useContext(PrincipalContext);
    const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
    const [editComment, setEditComment] = useState<string>(props.comment.commentText!);

    function getDeleteButton() {
        if (isAuthenticated && (principal?.principalType === PrincipalDTOPrincipalTypeEnum.Admin || principal?.email === props.comment.principal?.email))
            return <Button variant="contained" sx={{ backgroundColor: "red" }} onClick={() => props.deleteComment(props.comment.id!)}>
                Delete
            </Button>
        return <div></div>
    }

    function getEditButton() {
        if (isAuthenticated && !isBeingEdited && props.comment.principal?.email === principal?.email) {
            return <Button variant="contained" onClick={() => setIsBeingEdited(true)}>
                Edit
            </Button>
        }

        if (isAuthenticated && isBeingEdited && props.comment.principal?.email === principal?.email) {
            return <Button variant="contained" onClick={() => {
                props.comment.commentText = editComment;
                setIsBeingEdited(false);
                props.editComment(props.comment.id!, editComment);
            }}>
                Submit
            </Button>
        }
        return <div></div>
    }

    return <Card sx={{ minWidth: "25%", marginTop: "10px" }}>
        <CardContent>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

                <Typography sx={{ fontSize: 14, marginRight: "10px" }} color="text.secondary" gutterBottom>
                    {props.comment.principal?.email}
                </Typography>
                {getDeleteButton()}
                {getEditButton()}
            </Box>
            {isBeingEdited ? <TextField
                id="edit-comment"
                multiline
                label="Edit comment"
                variant="outlined"
                sx={{ marginBottom: "10px" }}
                rows={4}
                value={editComment}
                onChange={(event: any) => {
                    setEditComment(event.target.value);
                }} /> :
                <Typography sx={{ margin: "10px" }}>
                    {props.comment.commentText}
                </Typography>}
            <Typography sx={{ fontSize: 14, marginRight: "10px", marginTop: "10px" }} color="text.secondary" gutterBottom>
                Date: {props.comment.datePosted?.toLocaleDateString()}
            </Typography>
        </CardContent>
    </Card>
}

export default Comment;