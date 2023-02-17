import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3";
import { HiX } from "@react-icons/all-files/hi/HiX";
import { IoTriangleSharp } from "@react-icons/all-files/io5/IoTriangleSharp";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationTitleContext from "../../contexts/NavigationTitleContext";
import NavigationMenu from "./NavigationMenu";
export default function Navigation() {
  const { navigationTitle } = useContext(NavigationTitleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {navigationTitle === "ClassDetails" || navigationTitle === "Schedule" || navigationTitle === "Search" ? (
        <motion.header initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ x: "-100%" }} transition={{ duration: 0.25 }} className="absolute left-0 top-4 z-30 flex w-full px-4">
          <nav className="flex w-full items-center justify-between">
            <div
              className={`${navigationTitle === "ClassDetails" ? "text-shadow" : ""} z-10 flex cursor-pointer items-center gap-1`}
              onClick={() => {
                navigate("/home");
                setIsMenuOpen(false);
              }}>
              <IoTriangleSharp className="-rotate-90 text-base text-primary" />
              <p className="text-sm text-primary">Back</p>
            </div>
            {!isMenuOpen ? (
              <HiMenuAlt3
                className="z-[99999] cursor-pointer text-[42px] text-navIcon"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            ) : (
              <HiX
                className="z-[99999] cursor-pointer text-[42px] text-navIcon"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}
          </nav>
        </motion.header>
      ) : (
        <motion.header initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }} transition={{ duration: 0.25 }} className="flex items-center justify-between p-4 pb-1">
          <div className="flex w-full items-center justify-between">
            <IoTriangleSharp className="text-[42px] text-navIcon" />
            <h1 className="text-lg text-black">{navigationTitle ? navigationTitle : ""}</h1>
            {!isMenuOpen ? (
              <HiMenuAlt3
                className=" z-50 cursor-pointer text-[42px] text-navIcon"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            ) : (
              <HiX
                className="z-[999] cursor-pointer text-[42px] text-navIcon"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}
          </div>
        </motion.header>
      )}
      <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
