import Loader from "../global/Loader";
import useAxios from "../../hooks/useAxios";
import ClassSliderItem from "./ClassSliderItem";
export default function ClassSlider() {
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes`);
  return (
    <div className="mt-6 max-w-fit pl-4">
      <h3 className="mb-2 text-lg">Classes for you</h3>
      {loading ? (
        <Loader />
      ) : (
        <ul className="flex w-full gap-6 overflow-x-scroll">
          {data?.map((item) => (
            <ClassSliderItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
