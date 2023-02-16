export default function ScheduleClassItem({ classItem }) {
  return (
    <li className="mb-4 flex flex-col border-b border-dashed bg-white pb-1">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-sm">{classItem.classDay}</p>
          <p className="text-sm">{classItem.classTime}</p>
        </div>
        <h2 className="text-lg">{classItem.className}</h2>
      </div>
    </li>
  );
}
