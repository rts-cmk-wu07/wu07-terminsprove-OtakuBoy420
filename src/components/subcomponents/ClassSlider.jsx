import Loader from "../global/Loader";
import useAxios from "../../hooks/useAxios";
import ClassSliderItem from "./ClassSliderItem";
import { motion } from "framer-motion";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
export default function ClassSlider() {
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes`);
  return (
    <article className="mt-6 max-w-fit pl-4">
      <h3 className="mb-2 text-lg">Classes for you</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="flex items-center gap-1">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {error?.message ? error?.message : "Error fetching data"}</p>
        </div>
      ) : (
        <motion.ul initial="hidden" whileInView="show" className="flex w-full gap-6 overflow-x-scroll">
          {data?.map((item, index) => (
            <ClassSliderItem key={item.id} index={index} item={item} />
          ))}
        </motion.ul>
      )}
    </article>
  );
}
