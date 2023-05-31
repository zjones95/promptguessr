import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { themeOptions } from "./styles/themeOptions.ts";
import AuthProvider from "./contexts/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
