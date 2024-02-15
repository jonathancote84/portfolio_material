import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light:'cbe3b1',
      main: '#BEDD9E',
      dark: '#859a6e'
    },
    secondary: {
      light: '#a085bc',
      main: '#8967AC',
      dark: '#5f4878'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;