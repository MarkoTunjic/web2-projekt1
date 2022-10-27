import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClientsContext } from "../store/ClientsContext";
import { PrincipalContext } from "../store/Principalcontext";

function Login() {
    const {
        isLoading,
        error,
        isAuthenticated,
        loginWithRedirect
    } = useAuth0();

    const navigate = useNavigate()


    async function getPrincipal() {
        if (!isAuthenticated) {
            await loginWithRedirect();
        } else {
            navigate("/");
        }
    }

    useEffect(() => {
        getPrincipal();
    })

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <></>
}

export default Login;