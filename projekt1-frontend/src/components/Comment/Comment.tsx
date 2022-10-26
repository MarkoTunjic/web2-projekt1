import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CommentDTO } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";

interface CommentProps {
    comment: CommentDTO
}
function Comment(props: CommentProps) {
    const { isAuthenticated } = useAuth0();

    return <Card sx={{ minWidth: "25%" }}>
        <CardContent>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Typography sx={{ fontSize: 14, marginRight: "10px" }} color="text.secondary" gutterBottom>
                    {props.comment.principal?.email}
                </Typography>
                {isAuthenticated && <Button variant="contained" sx={{ backgroundColor: "red" }}>
                    Delete
                </Button>}
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