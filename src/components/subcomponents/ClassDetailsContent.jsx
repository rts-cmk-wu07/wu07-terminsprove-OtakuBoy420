export default function ClassDetailsContent({ classData, assetsData }) {
  return (
    <article className="px-4 py-3">
      <h2 className="text-lg leading-4">Schedule</h2>
      <div className="flex w-full justify-between">
        <p className="text-xs">{classData?.classDay}</p>
        <p className="text-xs">{classData?.classTime}</p>
      </div>
      <p className="mt-4 text-sm leading-4">{classData?.classDescription}</p>
      <h3 className="mt-4 text-lg">Trainer</h3>
      <div className="flex ">
        <img className="w-14 rounded-lg" src={assetsData[classData?.trainer?.assetId]?.url} />
        <p className="ml-2 p-1">{classData?.trainer?.trainerName}</p>
      </div>
    </article>
  );
}
