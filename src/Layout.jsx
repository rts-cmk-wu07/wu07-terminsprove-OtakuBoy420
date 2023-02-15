import { Outlet } from "react-router";
import Navigation from "./components/global/Navigation";
import { motion } from "framer-motion";
export default function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-white">
      <Navigation />
      <motion.main initial={{ x: "100%" }} animate={{ x: 0, filter: "blur(0)" }} exit={{ opacity: "0%", filter: "blur(18px)" }} transition={{ duration: 0.25 }} className="h-fit py-4">
        <Outlet />
      </motion.main>
    </div>
  );
}
