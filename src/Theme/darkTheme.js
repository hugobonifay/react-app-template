import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({ 
    palette: {
        type: "dark",
        background: {
            default: "#303030",
            paper: "#424242",
        },
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
        },
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "rgba(255, 255, 255, 0.7)"
        },
        disabled: {
            main: "rgba(255, 255, 255, 0.5)",
        },
        action: {
            active: "#fff",
            hover: "rgba(255, 255, 255, 0.08)",
            selected: "rgba(255, 255, 255, 0.16)",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)"
        },
        divider: "rgba(255, 255, 255, 0.12)"
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    }
});

export default darkTheme;