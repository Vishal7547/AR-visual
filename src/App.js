import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Project.jsx";
import Scan from "./pages/Scan.jsx";
import SignIn from "./pages/SignIn.jsx";

import "./style/hero.css";
import "./style/profile.css";
import "./style/scan.css";
import "./style/artWork.css";
import Register from "./pages/Register.jsx";
import Forget from "./pages/Forget.jsx";
import UserDashboard from "./pages/Dashboard/UserDashboard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  // Array of paths where the header should not be shown
  const pathsWithoutHeader = [
    "/",
    "/signin",
    "/register",
    "/contact",
    "/pricing",
    "/forgot-password",
  ];
  const shouldShowHeader = !pathsWithoutHeader.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Profile />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<Forget/>}/>
        <Route path="/scan/:projectid" element={<Scan />} />
        <Route path="/userDashborad"  element={<UserDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
