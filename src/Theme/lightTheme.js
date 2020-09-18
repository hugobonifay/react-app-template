import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({ 
    palette: {
        type: "light",
        background: {
            default: "#fafafa",
            paper: "#fff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        primary: {
            main: "rgba(0, 0, 0, 0.87)",
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.54)"
        },
        disabled: {
            main: "rgba(0, 0, 0, 0.38)",
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            selected: "rgba(0, 0, 0, 0.08)",
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)"
        },
        divider: "rgba(0, 0, 0, 0.12)"
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    }
});

export default lightTheme;