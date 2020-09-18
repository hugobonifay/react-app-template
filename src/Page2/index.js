import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { MAIN_CHANGE_TITLE } from "../Redux/actionTypes";
import { titles } from "../routes";

const Page2 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = titles.page2;
        dispatch({ type: MAIN_CHANGE_TITLE, title: titles.page2 });
    }, [dispatch]);

    return (
        <div>
            <Typography variant={"h1"} color={"primary"}>
                page 2
            </Typography>
        </div>
    )
}

export default Page2;