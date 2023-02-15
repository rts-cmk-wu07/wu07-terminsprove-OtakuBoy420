import { useState } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../global/ImagePlaceholder";

export default function ClassSliderItem({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <li className="relative flex flex-col items-center justify-center">
      <Link to={`/class/${item.id}`}>
        {!imageLoaded && <ImagePlaceholder size="24" />}
        <img onLoad={handleImageLoad} src={item.asset.url} draggable={false} className={imageLoaded ? "z-50 aspect-square h-24 max-w-none select-none rounded-lg object-cover" : "hidden"} />
        <h4 className="my-2 w-24 truncate text-xs">{item.className}</h4>
      </Link>
    </li>
  );
}
