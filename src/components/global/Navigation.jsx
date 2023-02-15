import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3";
import { HiX } from "@react-icons/all-files/hi/HiX";
import { IoTriangleSharp } from "@react-icons/all-files/io5/IoTriangleSharp";
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
      {navigationTitle === "ClassDetails" ? (
        <header className="absolute left-4 top-4 z-40">
          <nav className="">
            <div
              className="text-shadow flex cursor-pointer items-center gap-1"
              onClick={() => {
                navigate(-1);
              }}>
              <IoTriangleSharp className="-rotate-90 text-base text-primary" />
              <p className="text-sm text-primary">Back</p>
            </div>
          </nav>
        </header>
      ) : (
        <header className="flex items-center justify-between border-b-2 border-gray bg-white p-4 pb-1">
          <div className="flex w-full items-center justify-between">
            <IoTriangleSharp className="text-[42px] text-gray" />
            <h1 className="text-lg text-black">{navigationTitle ? navigationTitle : ""}</h1>
            {!isMenuOpen ? (
              <HiMenuAlt3
                className="z-50 cursor-pointer text-[42px] text-gray"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            ) : (
              <HiX
                className="z-50 cursor-pointer text-[42px] text-gray"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}
          </div>
          <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
      )}
    </>
  );
}
