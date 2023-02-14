import Loader from "../global/Loader";
export default function LandingClassCard(props) {
  const { data, loading, error } = props;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <img className="h-80 w-full rounded-2xl object-cover" src={data?.asset.url} />
          <h2
            style={{
              textShadow: "#000 2px 0 4px",
            }}
            className="absolute left-2 bottom-6 w-full text-xl text-white">
            {data?.className}
          </h2>
        </div>
      )}
    </>
  );
}
