import useAxios from "../../hooks/useAxios";
import getCookie from "../../functions/getCookie";
import Loader from "../global/Loader";
import ScheduleItem from "./ScheduleItem";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
export default function ScheduleList() {
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
      ) : data?.classes?.length > 0 ? (
        <ul className="mt-6 flex flex-col">
          {data?.classes.map((classItem) => (
            <ScheduleItem key={classItem?.id} classItem={classItem} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col">
          <p className="mt-6">You have no classes scheduled. Go to the home page to browse our classes!</p>
          <button
            className="mt-4 w-full rounded-md border-2 px-4 py-2 text-black"
            onClick={() => {
              navigate("/home");
            }}>
            To home
          </button>
        </div>
      )}
    </>
  );
}
