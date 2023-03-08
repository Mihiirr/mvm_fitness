import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import ImageCardLanding from "../Components/ImageCardLanding"
import useWindowPosition from '../hook/useWindowPosition';
import Header from '../Components/Header';
import Footer from "../Components/Footer"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: "linear-gradient(170deg, #B0A8B9, white)"
    },
    header_root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: "100%",
        fontFamily: 'Nunito',
        position: "absolute",
        zIndex: "1",
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
    colorText: {
        color: '#5AFF3D',
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
            <div className='container'>
                <div className={classes.header_root} id="header">
                    <Header />
                    <Collapse
                        in={checked}
                        {...(checked ? { timeout: 1000 } : {})}
                        collapsedHeight={50}
                    >
                        <div className={classes.container}>
                            <h1 className={classes.title}>
                                Welcome to <br />
                                MVM_<span className={classes.colorText}>FITNESS</span>
                            </h1>
                            <Scroll to="place-to-visit" smooth={true}>
                                <IconButton>
                                    <ExpandMoreIcon className={classes.goDown} />
                                </IconButton>
                            </Scroll>
                        </div>
                    </Collapse>
                </div>

                <video className='videoTag' autoPlay loop muted>
                    <source src="videoplayback.webm" type='video/mp4' />
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>

            {/* Cards */}
            <div className={classes.card_root} id="place-to-visit">
                <ImageCardLanding place={places[1]} checked={checkedcard} />
                <ImageCardLanding place={places[0]} checked={checkedcard} />
            </div>

            <Footer />
        </div>
    );
}