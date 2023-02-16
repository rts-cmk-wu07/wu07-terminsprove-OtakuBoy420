import { useState } from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../../utils/motion";
import ImagePlaceholder from "../global/ImagePlaceholder";
import { motion } from "framer-motion";
export default function ClassSliderItem({ item, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <motion.li variants={fadeIn("up", "spring", index * 0.2, 0.5)} className="flex flex-col items-center justify-center">
      <Link to={`/class/${item.id}`}>
        {!imageLoaded && <ImagePlaceholder size="24" />}
        <img onLoad={handleImageLoad} src={item.asset.url} draggable={false} className={imageLoaded ? "z-50 aspect-square h-24 max-w-none select-none rounded-lg object-cover" : "hidden"} />
        <h4 className="my-2 w-24 truncate text-xs">{item.className}</h4>
      </Link>
    </motion.li>
  );
}
