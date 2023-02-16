import ClassDetailsHero from "../components/subcomponents/ClassDetailsHero";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/global/Loader";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import useAxios from "../hooks/useAxios";
import ClassDetailsContent from "../components/subcomponents/ClassDetailsContent";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";

export default function ClassDetailsPage() {
  const { id } = useParams();
  const { data: classData, error: classError, loading: classLoading } = useAxios(`${import.meta.env.VITE_API_URI}/classes/${id}`);
  const { data: assetsData, error: assetsError, loading: assetsLoading } = useAxios(`${import.meta.env.VITE_API_URI}/assets`);
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  useEffect(() => {
    setNavigationTitle("ClassDetails");
  }, []);
  return (
    <>
      {classLoading && assetsLoading ? (
        <Loader size="lg" />
      ) : classError || assetsError ? (
        <div className="flex items-center gap-1">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {classError?.message || assetsError?.message ? assetsError?.message || classError?.message : "Error fetching data"}</p>
        </div>
      ) : (
        <section>
          <ClassDetailsHero classData={classData} id={id} />
          <ClassDetailsContent classData={classData} assetsData={assetsData} />
        </section>
      )}
    </>
  );
}
