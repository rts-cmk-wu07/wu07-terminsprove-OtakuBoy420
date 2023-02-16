import useAxios from "../../hooks/useAxios";
import getCookie from "../../functions/getCookie";
import Loader from "../global/Loader";
import ScheduleClassItem from "./ScheduleClassItem";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
export default function ScheduleClassList() {
  const navigate = useNavigate();
  const userId = getCookie("userId");
  const token = getCookie("token");
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/users`, { needsAuth: true, token: token, needsId: true, id: userId });

  return (
    <>
      {loading ? (
        <Loader size="lg" />
      ) : error ? (
        <div className="flex w-full flex-col items-center gap-1 pt-6">
          <HiOutlineExclamationCircle className="text-red-500" />
          <p className="text-base text-red-500"> {error?.message ? error?.message : "Error fetching data"}</p>
          <button
            className="mt-4 w-full rounded-md border-2 px-4 py-2 text-black"
            onClick={() => {
              navigate("/home");
            }}>
            To home
          </button>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col">
          {data?.classes.map((classItem) => (
            <ScheduleClassItem key={classItem?.id} classItem={classItem} />
          ))}
        </ul>
      )}
    </>
  );
}
