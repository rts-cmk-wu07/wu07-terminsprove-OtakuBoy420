import { Outlet } from "react-router";
import Navigation from "./components/global/Navigation";
import { motion } from "framer-motion";
import NavigationTitleContext from "./contexts/NavigationTitleContext";
import { useContext } from "react";
export default function Layout() {
  const { navigationTitle } = useContext(NavigationTitleContext);
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-white">
      {navigationTitle !== "Welcome" ? <Navigation /> : null}
      <motion.main initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ opacity: "0%" }} transition={{ duration: 0.25 }} className="h-fit">
        <Outlet />
      </motion.main>
    </div>
  );
}
