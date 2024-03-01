import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 'normal',
        fontFamily: "'Signika Negative Variable', sans-serif",
        fontSize: '17px',
      },
    },
    /* MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Signika Negative Variable', sans-serif",
        },
      },
    }, */
  },

  palette: {
    primary: {
      main: '#00ace1',
      contrastText: '#FFF',
    },
    warning: {
      main: '#C4415E',
    },
    secondary: {
      main: '#ff0073',
    },
    success: {
      main: '#98ce44',
      contrastText: '#FFF',
    },
    /*error: {
      main: red.A400,
    }, */
  },
});

export default theme;
