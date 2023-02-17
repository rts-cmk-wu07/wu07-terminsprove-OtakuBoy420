import { Route, Routes } from "react-router";
import Layout from "../../Layout";
import HomePage from "../../pages/HomePage";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import IsAuthenticatedContext from "../../contexts/IsAuthenticatedContext";
import getCookie from "../../functions/getCookie";
import ClassDetailsPage from "../../pages/ClassDetailsPage";
import { AnimatePresence } from "framer-motion";
import CustomToastContainer from "../global/CustomNotification";
import SchedulePage from "../../pages/SchedulePage";
import SearchPage from "../../pages/SearchPage";
import WelcomePage from "../../pages/WelcomePage";
export default function Router() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    const expirationTime = getCookie("validUntil");
    if (token && expirationTime) {
      if (Date.now() > expirationTime) {
        // Token has expired, log out user and remove token from cookies
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        document.cookie = "validUntil=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        document.cookie = "userId=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        setIsAuthenticated(false);
      } else {
        // Token is still valid, set user as logged in
        setIsAuthenticated(true);
      }
    }
  }, []);
  return (
    <IsAuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <CustomToastContainer top={true} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/class/:id" element={<ClassDetailsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </IsAuthenticatedContext.Provider>
  );
}
