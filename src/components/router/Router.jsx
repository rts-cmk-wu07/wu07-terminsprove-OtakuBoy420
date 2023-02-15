import { Route, Routes } from "react-router";
import NavigationTitleContext from "../../contexts/NavigationTitleContext";
import Layout from "../../Layout";
import HomePage from "../../pages/HomePage";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import getCookie from "../../functions/getCookie";
import ClassDetailsPage from "../../pages/ClassDetailsPage";
import { AnimatePresence } from "framer-motion";
import CustomToastContainer from "../global/CustomNotification";
export default function Router() {
  const location = useLocation();
  const [navigationTitle, setNavigationTitle] = useState("");
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
      <NavigationTitleContext.Provider
        value={{
          navigationTitle,
          setNavigationTitle,
        }}>
        <AnimatePresence mode="wait" initial={false}>
          <CustomToastContainer />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/class/:id" element={<ClassDetailsPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </NavigationTitleContext.Provider>
    </IsAuthenticatedContext.Provider>
  );
}
