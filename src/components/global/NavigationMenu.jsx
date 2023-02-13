import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import LoginForm from "../LoginForm"

export default function NavigationMenu() {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, type: "tween" }}
      className="absolute top-0 left-0 z-10 h-full w-full bg-white">
      <ul className="flex h-full flex-col items-center gap-4 px-4 py-24">
        <NavLink to="" className={({ isActive }) => (isActive ? "text-lg underline underline-offset-4" : "text-lg")} exact>
          Home
        </NavLink>

        <NavLink to="about" className={({ isActive }) => (isActive ? "text-lg underline underline-offset-4" : "text-lg")}>
          Search
        </NavLink>

        <NavLink to="contact" className={({ isActive }) => (isActive ? "text-lg underline underline-offset-4" : "text-lg")}>
          My Schedule
        </NavLink>

        <LoginForm />
      </ul>
    </motion.nav>
  )
}
