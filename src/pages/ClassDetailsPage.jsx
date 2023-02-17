import ClassDetailsHero from "../components/pagecomponents/ClassDetailsHero";
import { useParams } from "react-router-dom";
import Loader from "../components/global/Loader";
import useAxios from "../hooks/useAxios";
import ClassDetailsContent from "../components/pagecomponents/ClassDetailsContent";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
import getCookie from "../functions/getCookie";

export default function ClassDetailsPage() {
  const userId = getCookie("userId");
  const token = getCookie("token");
  const { id } = useParams();
  const { data: classData, error: classError, loading: classLoading } = useAxios(`${import.meta.env.VITE_API_URI}/classes/${id}`);
  const { data: assetsData, error: assetsError, loading: assetsLoading } = useAxios(`${import.meta.env.VITE_API_URI}/assets`);
  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useAxios(`${import.meta.env.VITE_API_URI}/users`, {
    needsAuth: true,
    token: token,
    needsId: true,
    id: userId,
  });
  return (
    <>
      {classLoading && assetsLoading && userLoading ? (
        <Loader size="lg" />
      ) : classError || assetsError ? (
        <div className="flex items-center gap-1">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {classError?.message || assetsError?.message ? assetsError?.message || classError?.message : "Error fetching data"}</p>
        </div>
      ) : (
        <section>
          <ClassDetailsHero classData={classData} classId={id} userData={userData} userId={userId} token={token} />
          <ClassDetailsContent classData={classData} assetsData={assetsData} />
        </section>
      )}
    </>
  );
}
