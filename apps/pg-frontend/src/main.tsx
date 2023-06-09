import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { themeOptions } from "./styles/themeOptions.ts";
import AuthProvider from "./contexts/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import SupabaseProvider from "./contexts/SupabaseProvider.tsx";
import GameProvider from "./contexts/GameProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme(themeOptions);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SupabaseProvider>
          <AuthProvider>
            <GameProvider>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </GameProvider>
          </AuthProvider>
        </SupabaseProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
