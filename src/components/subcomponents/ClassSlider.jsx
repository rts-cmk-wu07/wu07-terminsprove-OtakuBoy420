import Loader from "../global/Loader";
import ClassSliderItem from "./ClassSliderItem";
import { motion } from "framer-motion";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
export default function ClassSlider({ data, loading, error, pl, heading, mt }) {
  return (
    <article
      className={`max-w-fit ${pl ? "pl-4" : ""}
    ${mt ? "mt-6" : ""}
    `}>
      {heading && <h3 className="mb-4 text-lg">{heading}</h3>}
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="flex items-center gap-1">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {error?.message ? error?.message : "Error fetching data"}</p>
        </div>
      ) : data.length > 0 ? (
        <motion.ul initial="hidden" animate="show" className="flex w-full gap-6 overflow-y-hidden overflow-x-scroll">
          {data?.map((item, index) => (
            <ClassSliderItem key={item.id} index={index} item={item} />
          ))}
        </motion.ul>
      ) : (
        <div className="my-6 flex flex-col items-center gap-1 text-center">
          <HiOutlineExclamationCircle className="text-red-500" />
          <div className="text-lg">
            <p className="text-red-500">No classes found.</p>
            <p>Try searching for something else</p>
          </div>
        </div>
      )}
    </article>
  );
}
