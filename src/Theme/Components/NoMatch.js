import { Typography } from "@material-ui/core";
import React from "react";
import ErrorIcon from '@material-ui/icons/Error';

const NoMatch = () => {

    return (
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
    )
}

export default NoMatch