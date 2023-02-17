import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import { navItems } from "../../constants";
import { Fragment, useContext, useEffect } from "react";
import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import LogOutButton from "../buttons/LogOutButton";

export default function NavigationMenu({ isMenuOpen, setIsMenuOpen }) {
  const { isAuthenticated } = useContext(IsAuthenticatedContext);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  return (
    <AnimatePresence>
      {isMenuOpen ? (
        <motion.nav
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, type: "tween" }}
          className="absolute top-0 left-0 z-20 h-full w-full bg-white">
          <ul className="flex h-full flex-col items-center gap-4 px-4 py-24 text-lg">
            {navItems.map((item, index) => (
              <Fragment key={index}>
                {/* to give the parent a key, we need to use the Fragment tag from react instead of <> */}
                {!item.needsAuth ? (
                  <li>
                    <NavLink
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                      to={item.path}
                      end
                      className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                      {item.name}
                    </NavLink>
                  </li>
                ) : isAuthenticated ? (
                  <li>
                    <NavLink
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                      to={item.path}
                      end
                      className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                      {item.name}
                    </NavLink>
                  </li>
                ) : null}
              </Fragment>
            ))}
            {isAuthenticated ? <LogOutButton /> : <LoginForm setIsMenuOpen={setIsMenuOpen} />}
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
