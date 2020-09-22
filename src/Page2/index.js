import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { appName } from "../utilities";

const Page2 = () => {

    useEffect(() => {
        document.title = "Page2 - " + appName;
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Typography variant={"h1"} color={"primary"}>
                page 2
            </Typography>
        </div>
    )
}

export default Page2;