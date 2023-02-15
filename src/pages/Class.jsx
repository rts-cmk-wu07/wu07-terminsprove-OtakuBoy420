import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/global/Loader";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import useAxios from "../hooks/useAxios";

export default function Class() {
  const { id } = useParams();
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes/${id}`);
  const { setNavigationTitle } = useContext(NavigationTitleContext);

  useEffect(() => {
    setNavigationTitle("");
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1>{data?.className}</h1>
          <img src={data?.asset.url} />
        </div>
      )}
    </>
  );
}
