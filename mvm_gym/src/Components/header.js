import React, { useState, useEffect } from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(https://source.unsplash.com/1MrMsNBcsYA)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        color: "#929980"
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    links: {
        color: "#929980"
    }
}))

const navItems = [
    {
        name: "Home",
        href: "/home"
    },
    {
        name: "Exercises",
        href: "/execises"
    },
    {
        name: "Dashboard",
        href: "/dashboard"
    }
];

const Header = () => {
    const classes = useStyles();
    const [IsLoggedin, setIsLoggedin] = useState(false);
    const token = localStorage.getItem("auth-token");
    useEffect(() => {

        const checkUser = () => {
            if (token) {
                setIsLoggedin(true)
            } else {
                setIsLoggedin(false)
            }
        }
        checkUser();
    }, [token])

    const logout = () => {
        localStorage.removeItem("auth-token");
    }

    return (
        <AppBar className='header' color="transparent" elevation={4} >
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    MVM_<span className={classes.colorText}>FITNESS</span>
                </h1>
                {IsLoggedin && (
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} mr={3}>
                        {navItems.map((item) => (
                            <Button key={item.name} className={classes.links} href={item.href}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                )}
                {IsLoggedin ?
                    <Button variant='contained' color='success' onClick={logout} href='/'>SIGN Out</Button> : <Button variant='contained' color='success' href='/signin'>SIGN IN</Button>}
            </Toolbar>
        </AppBar>
    )
}

export default Header