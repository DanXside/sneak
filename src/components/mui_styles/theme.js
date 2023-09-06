import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    fontSize: '2rem'
                }
            }
        }
    }
});

export default theme;