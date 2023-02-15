import Loader from "../global/Loader";
import { useState, useEffect } from "react";
import useAxiosRandom from "../../hooks/useRandomAxios";
import { Link } from "react-router-dom";
export default function LandingClassCard() {
  const [randomNumber, setRandomNumber] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
  }, []);
  const { data, error, loading } = useAxiosRandom(`${import.meta.env.VITE_API_URI}/classes`, randomNumber);
  return (
    <>
      {loading ? (
        <Loader size="20" />
      ) : (
        <Link to={`/class/${data.id}`} className="relative flex h-full w-full flex-col items-center justify-center px-4">
          <img className="h-80 w-full rounded-2xl object-cover" src={data?.asset.url} />
          <h2
            style={{
              textShadow: "#000 2px 0 4px",
            }}
            className="absolute left-8 bottom-6 w-3/4 text-xl text-white">
            {data?.className}
          </h2>
        </Link>
      )}
    </>
  );
}
