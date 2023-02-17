import { Link } from "react-router-dom";

export default function ScheduleItem({ classItem }) {
  return (
    <li className="mb-4 flex flex-col border-b border-dashed bg-white pb-1">
      <Link to={`/class/${classItem.id}`} className="flex items-center justify-between">
        <div className="flex w-full flex-col justify-between">
          <div className="flex justify-between">
            <p className="text-sm">{classItem.classDay}</p>
            <p className="text-sm">{classItem.classTime}</p>
          </div>
          <h2 className="text-lg">{classItem.className}</h2>
        </div>
      </Link>
    </li>
  );
}
