import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { useSelector } from "react-redux";
import yellowTheme from "./yellowTheme";

const CustomThemeProvider = ({ children }) => {
    const themeChoice = useSelector(state => state.main.theme);

    return (
        <MuiThemeProvider 
            theme={
                themeChoice === "dark" ? darkTheme 
                : themeChoice === "yellow" ? yellowTheme
                : lightTheme
            }
        >
            {children}
        </MuiThemeProvider>
    )
}

export default CustomThemeProvider;