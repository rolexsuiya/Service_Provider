import { createTheme } from "@mui/material";
import "@fontsource/roboto/400.css";


export const mytheme = createTheme({
    palette:{
        primary:{
            main:'#5c4edf'
        },
        secondary:{
            main:'#ff',
            light:"#D3DADD",
            contrastText: "#728691"
        },
        info:{
            main:'#728691'
        },
        warning:{
            main:"#5c4edf"
        }

    }
})