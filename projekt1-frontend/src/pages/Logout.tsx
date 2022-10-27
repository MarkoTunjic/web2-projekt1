import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContext } from "../store/Principalcontext";

function Logout() {
    const {
        isLoading,
        error,
        isAuthenticated,
        logout,
    } = useAuth0();

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            logout();
        } else {
            navigate("/");
        }
    })

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <></>
}

export default Logout;