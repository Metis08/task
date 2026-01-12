import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff', // Assuming white background for navbar based on image
        },
        text: {
            primary: '#333',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        button: {
            textTransform: 'none', // Prevent auto uppercase for buttons
            fontWeight: 600,
        },
    },
});

export default theme;
