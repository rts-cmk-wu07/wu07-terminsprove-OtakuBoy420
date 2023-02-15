import Loader from "../global/Loader";
import { useState, useEffect } from "react";
import useAxiosRandom from "../../hooks/useRandomAxios";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../global/ImagePlaceholder";
export default function LandingClassCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const [randomNumber, setRandomNumber] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
  }, []);
  const { data, error, loading } = useAxiosRandom(`${import.meta.env.VITE_API_URI}/classes`, randomNumber);
  return (
    <>
      {loading ? (
        <Loader size="lg" />
      ) : (
        <>
          <Link to={`/class/${data.id}`} className="relative flex h-full w-full flex-col items-center justify-center px-4">
            {!imageLoaded && <ImagePlaceholder size="80" />}
            <img className={imageLoaded ? "h-80 w-full rounded-2xl object-cover" : "hidden"} src={data?.asset.url} onLoad={handleImageLoad} />
            <h2 className="text-shadow absolute left-8 bottom-6 w-3/4 text-xl leading-10 text-white">{data?.className}</h2>
          </Link>
        </>
      )}
    </>
  );
}
