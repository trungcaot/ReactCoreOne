import { createMuiTheme, Theme } from "@material-ui/core/styles";

// define light theme colors
export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#115293"
    },
    secondary: {
      main: "#1976d2"
    }
  }
});

// define dark theme colors
export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#388e3c"
    },
    secondary: {
      main: "#4caf50"
    }
  }
});
