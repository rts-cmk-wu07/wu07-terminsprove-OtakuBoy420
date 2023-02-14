import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import { navItems } from "../../constants";
import { useContext } from "react";
import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import LogOutButton from "../buttons/LogOutButton";

export default function NavigationMenu() {
  const { isAuthenticated } = useContext(IsAuthenticatedContext);
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, type: "tween" }}
      className="absolute top-0 left-0 z-10 h-full w-full bg-white">
      <ul className="flex h-full flex-col items-center gap-4 px-4 py-24">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? "text-lg underline underline-offset-4" : "text-lg")}>
            {item.name}
          </NavLink>
        ))}
        {isAuthenticated ? <LogOutButton /> : <LoginForm />}
      </ul>
    </motion.nav>
  );
}
