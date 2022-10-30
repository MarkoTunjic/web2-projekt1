import { Box, Link, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Colors from '../../colors.json';
import { LinkStyle } from './Header.styles';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, isLoading, user } = useAuth0();

    useEffect(() => {
        if (location.pathname.toLowerCase().includes("competitors")) {
            setActiveIndex(1);
        } else if (location.pathname.toLowerCase().includes("rounds")) {
            setActiveIndex(2);
        } else if (location.pathname.toLowerCase().includes("games")) {
            setActiveIndex(2);
        } else if (location.pathname === "/" || location.pathname === "") {
            setActiveIndex(0);
        } else if (location.pathname.toLowerCase().includes("login") || location.pathname.toLowerCase().includes("logout")) {
            setActiveIndex(3);
        }
    })

    const getLoginOrLogout = useCallback(() => {
        if (isLoading)
            return <Typography>Loading...</Typography>
        return isAuthenticated ?
            <Link onClick={() => navigate("/logout")} sx={{ ...LinkStyle, color: activeIndex === 3 ? Colors["third"] : "black" }}>
                Logout {user?.email}
            </Link> :
            <Link onClick={() => navigate("/login")} sx={{ ...LinkStyle, color: activeIndex === 3 ? Colors["third"] : "black" }}>
                Login
            </Link>
    }, [isAuthenticated, isLoading])

    return <React.Fragment>
        <Box sx={{ backgroundColor: Colors["second"], display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', padding: "10px" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>
                    <Link onClick={() => navigate("/")} sx={{ ...LinkStyle, color: activeIndex === 0 ? Colors["third"] : "black" }}>
                        Home
                    </Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link onClick={() => navigate("/competitors")} sx={{ ...LinkStyle, color: activeIndex === 1 ? Colors["third"] : "black" }} >
                        Competitors
                    </Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link onClick={() => navigate("/rounds")} sx={{ ...LinkStyle, color: activeIndex === 2 ? Colors["third"] : "black" }}>
                        Rounds
                    </Link>
                </Typography>
            </Box>
            <Typography sx={{ minWidth: 100 }}>
                {
                    getLoginOrLogout()
                }
            </Typography>
        </Box>
    </React.Fragment >

}

export default Header;