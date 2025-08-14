import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      light: "#FF7F48",
      main: "#e75517c9",
      dark: "#E75517",
    },
    secondary: {
      main: "#222222",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      textTransform: 'none'
    }
  }
});

export default theme;
