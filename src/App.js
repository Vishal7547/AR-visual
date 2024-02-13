import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Project.jsx";
import Scan from "./pages/Scan.jsx";

import "./style/hero.css";
import "./style/profile.css";
import "./style/scan.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scan/:projectid" element={<Scan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
