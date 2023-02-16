import { useNavigate } from "react-router-dom";
import { slideIn, textVariant } from "../utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import mainImage from "../assets/images/welcome-2.jpg";
import WhiteButton from "../components/buttons/WhiteButton";
import { useEffect, useContext } from "react";
import NavigationTitleContext from "../contexts/NavigationTitleContext";

export default function WelcomePage() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  const navigate = useNavigate();
  useEffect(() => {
    setNavigationTitle("Welcome");
  }, []);

  return (
    <AnimatePresence>
      <motion.div initial="hidden" animate="show" className="flex h-screen flex-col justify-end gap-12 bg-welcome bg-cover bg-centered pb-12">
        <div className="flex flex-col gap-4">
          <motion.h1 variants={textVariant(0.2)} className="text-shadow pl-12 text-2xl leading-none text-white">
            Believe Yourself
          </motion.h1>
          <motion.div variants={textVariant(0.5)} className="flex items-center gap-4">
            <div className="h-[3px] w-12 bg-white"></div>
            <p className="text-shadow text-base text-white">Train like a pro</p>
          </motion.div>
        </div>
        <div className="flex flex-col items-end">
          <motion.img variants={slideIn("right", "tween", 0.7, 1)} src={mainImage} alt="Welcome Main image" className="h-48 w-full object-cover" />
          <WhiteButton
            className="-mt-4 px-8"
            size="lg"
            onClick={() => {
              navigate("/home");
            }}
            title="Start Training"></WhiteButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
