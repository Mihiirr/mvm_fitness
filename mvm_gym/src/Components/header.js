import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(https://source.unsplash.com/1MrMsNBcsYA)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    MVM_<span className={classes.colorText}>FITNESS</span>
                </h1>
                <Button variant='contained' color='success' href='/signin'>SIGN IN</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header