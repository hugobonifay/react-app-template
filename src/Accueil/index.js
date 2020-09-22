import React from "react";
import { Button, Divider, Paper, TextField, Typography } from "@material-ui/core";
import { appName, appVersion } from "../utilities";
import ThemeChoice from "../Theme/Components/ThemeChoice";
import Layout from "../Theme/Layout";

const Accueil = () => (
    <Layout>
        <ThemeChoice />
        <Divider />
        <div>
            <Typography variant={"h2"} color={"primary"}>
                {appName} {appVersion}
            </Typography>
        
            <Paper style={{padding:20}}>
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

            <div>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="secondary" disabled>Disabled</Button>
                <Button color="primary" variant={"contained"}>Primary</Button>
                <Button color="secondary" variant={"contained"}>Secondary</Button>
                <Button color="secondary" variant={"contained"} disabled>Disabled</Button>
            </div>
            
            <Typography variant={"body1"} color={"primary"}>
                body1 primary body1 primary body1 primary body1 primary body1 primary body1 primary 
            </Typography>
            <Typography variant={"body1"} color={"secondary"}>
                body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary body1 secondary 
            </Typography>

            <Typography variant={"h1"} color={"primary"}>
                page 1
            </Typography>
            <Typography variant={"h1"} color={"primary"}>
                page 1
            </Typography>
            <Typography variant={"h1"} color={"primary"}>
                page 1
            </Typography>
            <Typography variant={"h1"} color={"primary"}>
                page 1
            </Typography>
            <Typography variant={"h1"} color={"primary"}>
                page 1
            </Typography>
        </div>
    </Layout>
);

export default Accueil;