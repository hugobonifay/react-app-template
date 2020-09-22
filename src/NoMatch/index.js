import React from "react";
import { Typography } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import Layout from "../Theme/Layout";
import { appName } from "../utilities";

const NoMatch = () => (
    <Layout documentTitle={"404 Not Found - " + appName}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50
        }}>
            <ErrorIcon style={{fontSize:70}} />
            <Typography variant="h4">404 Not Found</Typography>
        </div>
    </Layout>
);

export default NoMatch