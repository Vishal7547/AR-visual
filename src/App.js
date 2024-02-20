import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Project.jsx";
import Scan from "./pages/Scan.jsx";
import SignIn from "./pages/SignIn.jsx";
import "./style/Dashboard.css";
import "./style/Sidebar.css";
import "./style/hero.css";
import "./style/profile.css";
import "./style/scan.css";
import "./style/artWork.css";
import "./style/Profilesetting.css";
import Register from "./pages/Register.jsx";
import Forget from "./pages/Forget.jsx";
import UserDashboard from "./pages/Dashboard/UserDashboard.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import Profilesetting from "./pages/user/Profilesetting.jsx";
import UserProvider from "./context/UserProvider.js";
import { UserContext } from "./context/MyContext.js";
import ResetPassword from "./pages/ResetPassword.jsx";
import { PrivateRoute } from "./routes/PrivateRoutes.js";
import { PrivateAuth } from "./routes/PrivateAuth.js";
function App() {
  const { handleLoad, authenticate } = useContext(UserContext);
  useEffect(() => {
    const loadData = async () => {
      await handleLoad();
    };
    loadData();
  }, []);
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
  const [showHeader, setShowHeader] = useState(false);

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

  useEffect(() => {
    const pathname = window.location.pathname;
    setShowHeader(!pathname.startsWith("/resetpassword/"));
  }, [location]);
  const combinedShowHeader = shouldShowHeader && showHeader;
  return (
    <>
      {combinedShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateAuth />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forget />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/scan/:projectid" element={<Scan />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profilesetting" element={<Profilesetting />} />
          <Route path="/project" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
