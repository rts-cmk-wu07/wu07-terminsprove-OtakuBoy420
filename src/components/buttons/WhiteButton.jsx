import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
export default function WhiteButton({ title, onClick, className, animated, delay }) {
  return (
    <>
      {animated ? (
        <motion.button
          initial="hidden"
          animate="show"
          variants={slideIn("right", "tween", delay, 0.75)}
          className={"shadow-3xl z-10 flex items-center justify-center rounded-l-lg bg-white py-3 px-3 leading-5 shadow-primary " + className}
          onClick={onClick}>
          <span className="text-base">{title}</span>
        </motion.button>
      ) : (
        <button className={"shadow-3xl z-10 flex items-center justify-center rounded-l-lg bg-white py-3 px-3 leading-5 shadow-primary " + className} onClick={onClick}>
          <span className="text-base">{title}</span>
        </button>
      )}
    </>
  );
}
