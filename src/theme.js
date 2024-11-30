import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },

  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Dark background for the app
    },
    text: {
      primary: "#ffffff", // White text
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Black card background
          color: "#ffffff", // White text inside cards
          borderRadius: "10px", // Optional: Customize border radius
        },
      },
    },
  },
});

export default theme;
