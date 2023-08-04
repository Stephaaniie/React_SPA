import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

export const OrangeTheme = (isLight: boolean) => createTheme({

    palette: {
        primary: {
            main: orange[800]
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red[900]
        },
        mode: isLight ? 'light' : 'dark'
    }
});