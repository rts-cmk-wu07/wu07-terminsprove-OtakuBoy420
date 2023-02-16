import { HiOutlineExclamationCircle } from "@react-icons/all-files/hi/HiOutlineExclamationCircle";
import Loader from "../global/Loader";
import ClassSlider from "./ClassSlider";
import Trainer from "./Trainer";

export default function SearchResults(props) {
  const { searchValue, classesData, classesLoading, classesError, trainersData, trainersLoading, trainersError } = props;
  return (
    <div className="mt-4">
      <div className="mt-2">
        {classesLoading ? (
          <div className="flex h-32 w-full items-center justify-center">
            <Loader />
          </div>
        ) : classesError ? (
          <div className="m-4 flex h-32 items-center gap-1 rounded-lg border-2 p-4">
            <HiOutlineExclamationCircle className="text-red-500" />
            <p className="text-base text-red-500"> {classesError?.message ? classesError?.message : "Error fetching data"}</p>
          </div>
        ) : (
          <ClassSlider
            data={classesData
              .filter((classData) => {
                return classData.className.toLowerCase().includes(searchValue.toLowerCase()) || classData.trainer.trainerName.toLowerCase().includes(searchValue.toLowerCase());
              })
              .slice(0, classesData.length)}
            loading={classesLoading}
            error={classesError}
            heading="Popular Classes"
          />
        )}
      </div>
      <h2 className="mt-4 text-lg">Trainers</h2>
      <div className="mt-2">
        {trainersLoading ? (
          <div className="flex h-32 w-full items-center justify-center">
            <Loader />
          </div>
        ) : trainersError ? (
          <div className="m-4 flex h-32 items-center gap-1 rounded-lg border-2 p-4">
            <HiOutlineExclamationCircle className="text-red-500" />
            <p className="text-base text-red-500"> {trainersError?.message ? trainersError?.message : "Error fetching data"}</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {trainersData
              .filter((trainerData) => {
                return trainerData.trainerName.toLowerCase().includes(searchValue.toLowerCase());
              })
              .map((trainerData) => {
                return <Trainer key={trainerData.id} trainerData={trainerData} />;
              })}
          </ul>
        )}
      </div>
    </div>
  );
}
