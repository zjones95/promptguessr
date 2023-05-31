import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.tsx";
import Footer from "./components/Footer.tsx";
import AppBody from "./components/AppBody.tsx";
import RequireUser from "./Auth/RequireUser.tsx";
import Login from "./Auth/Login.tsx";

function App() {
  return (
    <div id="app">
      <AppBody>
        <Nav />
        <Routes>
          {/* -- PUBLIC ROUTES -- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<div>signup</div>} />
          {/* -- PUBLIC ROUTES -- */}
          {/* -- AUTHENTICATED ROUTES -- */}
          <Route element={<RequireUser />}>
            <Route path="lobbies" element={<div>lobbies</div>} />
            <Route path="lobby/:id" element={<div>lobby - id</div>} />
            <Route path="settings" element={<div>settings</div>} />
            {/* -- AUTHENTICATED ROUTES -- */}
          </Route>
        </Routes>
      </AppBody>
      <Footer />
    </div>
  );
}

export default App;
