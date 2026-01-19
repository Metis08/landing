import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.5rem',
        },
        body1: {
            fontSize: '1rem',
            color: '#555',
        },
    },
    palette: {
        primary: {
            main: '#438059', // Green from the design
        },
        background: {
            default: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                    textTransform: 'none',
                    padding: '10px 24px',
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;
