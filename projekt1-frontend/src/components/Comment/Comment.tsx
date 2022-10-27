import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CommentDTO, PrincipalDTOPrincipalTypeEnum } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { PrincipalContext } from "../../store/Principalcontext";
import { useContext } from "react";

interface CommentProps {
    comment: CommentDTO,
    deleteComment: (commentId: number) => void
}
function Comment(props: CommentProps) {
    const { isAuthenticated } = useAuth0();
    const { principal } = useContext(PrincipalContext);

    function getDeleteButton() {
        console.log(principal);
        if (isAuthenticated && (principal?.principalType === PrincipalDTOPrincipalTypeEnum.Admin || principal?.email === props.comment.principal?.email))
            return <Button variant="contained" sx={{ backgroundColor: "red" }} onClick={() => props.deleteComment(props.comment.id!)}>
                Delete
            </Button>
        return <div></div>
    }

    return <Card sx={{ minWidth: "25%", marginTop: "10px" }}>
        <CardContent>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Typography sx={{ fontSize: 14, marginRight: "10px" }} color="text.secondary" gutterBottom>
                    {props.comment.principal?.email}
                </Typography>
                {getDeleteButton()}
            </Box>
            <Typography sx={{ margin: "10px" }}>
                {props.comment.commentText}
            </Typography>
            <Typography sx={{ fontSize: 14, marginRight: "10px", marginTop: "10px" }} color="text.secondary" gutterBottom>
                Date: {props.comment.datePosted?.toLocaleDateString()}
            </Typography>
        </CardContent>
    </Card>
}

export default Comment;