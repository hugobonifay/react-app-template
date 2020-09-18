import React, { useEffect, useState } from "react";
import * as serviceWorker from './../../serviceWorker';
import { Snackbar, Button, Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}

const Update = () => {
    const [showReload, setShowReload] = useState(false);
    const [waitingWorker, setWaitingWorker] = useState(null);

    const onSWUpdate = registration => {
        console.log("Une mise à jour est disponible");
        setShowReload(true);
        setWaitingWorker(registration.waiting);
    };

    useEffect(() => {
        serviceWorker.register({
            onUpdate: registration => {
                onSWUpdate(registration);
            }
        });
    }, []);

    const handleReload = () => {
        waitingWorker.postMessage({ type: "SKIP_WAITING" });
        setShowReload(false);
        window.location.reload();
    }

    return (
        <Snackbar
            open={showReload}
            TransitionComponent={TransitionLeft}
            key={"TransitionLeftUpdate"}
            onClick={handleReload}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <CheckCircleIcon style={{marginRight:10}} />
                    <Typography variant={"h5"}>
                        mise à jour disponible
                    </Typography>
                </div>
            }
            action={
                <Button 
                    onClick={handleReload}
                    variant={"contained"}
                    color={"default"}
                >
                    Mettre à jour
                </Button>
            }
        />
    );
}

export default Update;