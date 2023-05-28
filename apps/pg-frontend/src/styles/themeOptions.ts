import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#629a8c",
      light: "#A0C1B9",
      dark: "#004430",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e7b62a",
      light: "#f4e8c1",
      dark: "#e59920",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "white",
          borderWidth: "2px",
          "&:hover": {
            backgroundColor: "white",
            color: "#629a8c",
          },
        },
        root: {
          color: "white",
          minWidth: "200px",
          fontSize: "1.5rem",
          textTransform: "none",
          height: "60px",
          borderRadius: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: "Signika",
    h1: {
      fontSize: "4rem",
    },
    h3: {
      fontSize: "4rem",
    },
  },
};
