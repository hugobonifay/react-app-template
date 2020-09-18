import React, { useEffect } from "react";
import { Button, Divider, Paper, TextField, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { MAIN_CHANGE_TITLE } from "../Redux/actionTypes";
import { titles } from "../routes";
import { appName, appVersion } from "../utilities";
import ThemeChoice from "../Theme/Components/ThemeChoice";

const Accueil = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = titles.accueil;
        dispatch({ type: MAIN_CHANGE_TITLE, title: titles.accueil });
    }, [dispatch]);

    return (
        <div>
            <ThemeChoice />
            <Divider />

            <Typography variant={"h2"} color={"primary"}>
                {appName} {appVersion}
            </Typography>
            
            <Paper style={{width: "90%", margin:"0 auto", padding:20}}>
                <Typography variant={"h3"} color={"primary"}>
                    Primary
                </Typography>
                <Typography variant={"h3"} color={"secondary"}>
                    secondary
                </Typography>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="secondary" disabled>Disabled</Button>
                <Button color="primary" variant={"contained"}>Primary</Button>
                <Button color="secondary" variant={"contained"}>Secondary</Button>
                <Button color="secondary" variant={"contained"} disabled>Disabled</Button>

                <Typography variant={"body1"} color={"primary"}>
                    body1 primary body1 primary body1 primary body1 primary body1 primary body1 primary 
                </Typography>
                <Typography variant={"body1"} color={"secondary"}>
                    body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary 
                </Typography>
            </Paper>

            <Typography variant={"h3"} color={"primary"}>
                Primary
            </Typography>
            <Typography variant={"h3"} color={"secondary"}>
                secondary
            </Typography>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="secondary" disabled>Disabled</Button>
            <Button color="primary" variant={"contained"}>Primary</Button>
            <Button color="secondary" variant={"contained"}>Secondary</Button>
            <Button color="secondary" variant={"contained"} disabled>Disabled</Button>
            <Typography variant={"body1"} color={"primary"}>
                body1 primary body1 primary body1 primary body1 primary body1 primary body1 primary 
            </Typography>
            <Typography variant={"body1"} color={"secondary"}>
                body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary 
            </Typography>

        </div>
    )
}

export default Accueil;