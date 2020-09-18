import { createMuiTheme } from '@material-ui/core/styles';

const yellowTheme = createMuiTheme({ 
    palette: {
        background: {
            default: "rgba(255, 255, 120, 1)",
            paper: "rgba(255, 255, 70, 1)",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        },
        primary: {
            main: "rgba(40, 40, 40, 1)"
        },
        secondary: {
            main: "#666666",
        },
        divider: "rgba(0, 0, 0, 0.12)"
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    }
});

export default yellowTheme;