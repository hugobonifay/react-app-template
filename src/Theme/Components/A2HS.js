import React, { useEffect, useState } from "react";
import { Button, IconButton, makeStyles, Slide, Snackbar, Typography } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';

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
    const [open, setOpen] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    const askForInstall = e => {
        e.preventDefault();
        setDeferredPrompt(e);
        setOpen(true);
    }

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', askForInstall);
        return () => window.removeEventListener('beforeinstallprompt', askForInstall);
    }, []);

    const handleInstall = e => {
        setOpen(false);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            setDeferredPrompt(null);
        });
    }

    const handleCancel = e => {
        setOpen(false);
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