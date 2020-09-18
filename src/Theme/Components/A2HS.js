import React, { useEffect, useState } from "react";
import { Button, IconButton, makeStyles, Slide, Snackbar, Typography } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import { useDispatch, useSelector } from "react-redux";
import { MAIN_CHANGE_A2HS } from "../../Redux/actionTypes";

const useStyles = makeStyles(() => ({
    action: {
        "& > *": {
            margin: 5
        }
    },
}));

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}

const A2HS = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const A2HSpref = useSelector(state => state.main.A2HSpref);

    useEffect(() => {
        const askForInstall = e => {
            e.preventDefault();
            setDeferredPrompt(e);
            if (A2HSpref === "no answer") {
                setOpen(true);
            } else {
                return
            }
        }
        window.addEventListener('beforeinstallprompt', askForInstall);
        return () => window.removeEventListener('beforeinstallprompt', askForInstall);
    }, [A2HSpref]);

    const handleInstall = e => {
        setOpen(false);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                localStorage.setItem("A2HS", "User accepted the A2HS prompt");
                dispatch({ 
                    type: MAIN_CHANGE_A2HS,
                    A2HSresponse: "User accepted the A2HS prompt"
                });
            } else {
                localStorage.setItem("A2HS", "User dismissed the A2HS prompt");
                dispatch({ 
                    type: MAIN_CHANGE_A2HS,
                    A2HSresponse: "User dismissed the A2HS prompt"
                });
            }
            setDeferredPrompt(null);
        });
    }

    const handleCancel = e => {
        setOpen(false);
        localStorage.setItem("A2HS", "User dismissed the A2HS prompt");
        dispatch({ 
            type: MAIN_CHANGE_A2HS,
            A2HSresponse: "User dismissed the A2HS prompt"
        });
    }

    return (
        <Snackbar
            open={open}
            TransitionComponent={TransitionLeft}
            key={"TransitionLeftA2HS"}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={
                <Typography variant={"h5"}>
                    Installer sur l'écran d'accueil ? 
                </Typography>
            }
            action={
                <div className={classes.action}>
                    <IconButton onClick={handleCancel} color="inherit">
                        <Clear />
                    </IconButton>
                    <Button 
                        onClick={handleInstall} 
                        endIcon={<AddToHomeScreenIcon />}
                        variant={"contained"}
                        color={"default"}
                    >
                        Installer
                    </Button>
                </div>
            }
        />
    )
}

export default A2HS;