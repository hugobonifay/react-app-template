import React, { useEffect, useState } from "react";
import WifiOff from '@material-ui/icons/WifiOff';
import { Button, Slide, Snackbar, Typography } from "@material-ui/core";

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}

const Internet = () => {
    const [open, setOpen] = useState(false);

    const offline = () => {
        setOpen(true);
    }

    const online = () => {
        setOpen(false);
    }

    useEffect(() => {
        window.addEventListener('offline', offline);
        window.addEventListener('online', online);

        return () => {
            window.removeEventListener('offline', offline);
            window.removeEventListener('online', online);
        }
    }, []);

    const handleReload = () => {
        window.location.reload();
    }

    return (
        <Snackbar
            open={open}
            TransitionComponent={TransitionLeft}
            key={"TransitionLeftInternet"}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <WifiOff style={{marginRight:10}} />
                    <Typography variant={"h5"}>
                        Vous n'êtes pas connecté à internet
                    </Typography>
                </div>
            }
            action={
                <Button 
                    onClick={handleReload}
                    variant={"contained"}
                    color={"default"}
                >
                    Actualiser
                </Button>
            }
        />
    )
}

export default Internet;