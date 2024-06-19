// src/theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 1)', // Button active color
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.08)', // Button hover color
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    action: {
      active: '#ffffff', // Button active text color
      hover: 'rgba(255, 255, 255, 0.08)', // Button hover background color
      selected: 'rgba(255, 255, 255, 0.16)', // Button selected background color
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
});

export default darkTheme;
