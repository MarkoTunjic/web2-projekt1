import { Avatar, Box, IconButton, Link, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Colors from '../../colors.json';
import { LinkStyle } from './Header.styles';

function Header() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname.toLowerCase().includes("competitors")) {
            setActiveIndex(1);
        } else if (pathname.toLowerCase().includes("rounds")) {
            setActiveIndex(2);
        } else if (pathname === "/" || pathname === "") {
            setActiveIndex(0);
        }
    })

    return <React.Fragment>
        <Box sx={{ backgroundColor: Colors["second"], display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', padding: "10px" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/" sx={{ ...LinkStyle, color: activeIndex === 0 ? Colors["third"] : "black" }}>
                        Home
                    </Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/competitors" sx={{ ...LinkStyle, color: activeIndex === 1 ? Colors["third"] : "black" }} >
                        Competitors
                    </Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="/rounds" sx={{ ...LinkStyle, color: activeIndex === 2 ? Colors["third"] : "black" }}>
                        Rounds
                    </Link>
                </Typography>
            </Box>
            <Typography sx={{ minWidth: 100 }}>
                <Link href="/" sx={{ ...LinkStyle, color: activeIndex === 2 ? Colors["third"] : "black" }}>
                    Login
                </Link>
            </Typography>
        </Box>
    </React.Fragment >

}

export default Header;