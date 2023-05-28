import { ThemeProvider, createTheme } from "@mui/material";
import Nav from "./components/Nav";
import { themeOptions } from "./styles/themeOptions.ts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/Home.tsx";
import Footer from "./components/Footer.tsx";
import AppBody from "./components/AppBody.tsx";

function App() {
  const theme = createTheme(themeOptions);

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <Router>
          <AppBody>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </AppBody>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
