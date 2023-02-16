import { AnimatePresence, motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
export default function ClassDetailsContent({ classData, assetsData }) {
  return (
    <AnimatePresence>
      <motion.article initial="hidden" whileInView="show" className="px-4 py-3">
        <motion.h2 variants={textVariant(0.1)} className="text-lg leading-4">
          Schedule
        </motion.h2>
        <div className="flex w-full justify-between">
          <motion.p variants={textVariant(0.3)} className="text-xs">
            {classData?.classDay}
          </motion.p>
          <motion.p variants={textVariant(0.3)} className="text-xs">
            {classData?.classTime}
          </motion.p>
        </div>
        <motion.p variants={textVariant(0.5)} className="mt-4 text-sm leading-4">
          {classData?.classDescription}
        </motion.p>
        <motion.h3 variants={textVariant(0.7)} className="mt-4 text-lg">
          Trainer
        </motion.h3>
        <motion.div variants={slideIn("up", "spring", 0.7, 1.5)} className="flex ">
          <img className="w-14 rounded-lg" src={assetsData[classData?.trainer?.assetId]?.url} />
          <p className="ml-2 p-1">{classData?.trainer?.trainerName}</p>
        </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}
