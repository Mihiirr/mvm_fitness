import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import ImageCardLanding from "../Components/ImageCardLanding"
// import PlaceToVisit from './components/PlaceToVisit';
import "./landing.css"
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(https://source.unsplash.com/1MrMsNBcsYA)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    header_root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
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
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    card_root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

const places = [
    {
        title: 'Green',
        description:
            "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
        imageUrl: `https://source.unsplash.com/uPrxxLSkovY`,
        time: 1500,
    },
    {
        title: 'Bora Bora',
        description:
            'Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.',
        imageUrl: `https://source.unsplash.com/DHsdSeCpjRU`,
        time: 1500,
    },
];

export default function Landing() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const checkedcard = useWindowPosition('header');
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Header */}
            <div className={classes.header_root} id="header">
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}>
                            My<span className={classes.colorText}>Island.</span>
                        </h1>
                        <IconButton>
                            <SortIcon className={classes.icon} />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50}
                >
                    <div className={classes.container}>
                        <h1 className={classes.title}>
                            Welcome to <br />
                            My<span className={classes.colorText}>Island.</span>
                        </h1>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.goDown} />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>

            {/* Cards */}
            <div className={classes.card_root} id="place-to-visit">
                <ImageCardLanding place={places[1]} checked={checkedcard} />
                <ImageCardLanding place={places[0]} checked={checkedcard} />
            </div>
        </div>
    );
}