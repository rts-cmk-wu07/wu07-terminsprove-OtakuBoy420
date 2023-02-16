import Loader from "../global/Loader";
import { useState, useEffect } from "react";
import useRandomAxios from "../../hooks/useRandomAxios";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../global/ImagePlaceholder";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
import useAxios from "../../hooks/useAxios";
export default function LandingClassCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const [randomNumber, setRandomNumber] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
  }, []);
  const { data, loading, error } = useAxios(`${import.meta.env.VITE_API_URI}/classes`, { needsId: true, id: randomNumber });
  return (
    <>
      {loading ? (
        <div className="flex h-80 w-full items-center justify-center">
          <Loader size="lg" />
        </div>
      ) : error ? (
        <div className="m-4 mt-6 flex h-80 items-center gap-1 rounded-lg border-2 p-4">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {error?.message ? error?.message : "Error fetching data"}</p>
        </div>
      ) : (
        <motion.article initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.25, 1)}>
          <Link to={`/class/${data.id}`} className="relative mx-4 flex h-full flex-col items-center justify-center rounded-2xl">
            {!imageLoaded && <ImagePlaceholder size="80" />}
            <img className={imageLoaded ? "h-80 w-full rounded-2xl object-cover" : "hidden"} src={data?.asset.url} onLoad={handleImageLoad} />
            <motion.h2 variants={textVariant(0.25)} className="text-shadow absolute left-4 bottom-6 w-3/4 text-xl leading-10 text-white">
              {data?.className}
            </motion.h2>
          </Link>
        </motion.article>
      )}
    </>
  );
}
