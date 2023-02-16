import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
export default function Trainer({ classData, trainerData, assetsData, delay }) {
  return (
    <>
      {classData ? (
        <motion.div variants={slideIn("up", "spring", delay, 1.5)} className="flex ">
          <img className="w-14 rounded-lg" src={assetsData[classData?.trainer?.assetId - 1]?.url} />
          <p className="ml-2 p-1">{classData?.trainer?.trainerName}</p>
        </motion.div>
      ) : (
        <div className="flex ">
          <img className="w-14 rounded-lg" src={trainerData?.asset?.url} />
          <p className="ml-2 p-1">{trainerData?.trainerName}</p>
        </div>
      )}
    </>
  );
}
