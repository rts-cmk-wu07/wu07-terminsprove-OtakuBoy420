import { useEffect, useState } from "react";
import LandingClassCard from "../components/subcomponents/LandingClassCard";
import ClassSliderList from "../components/subcomponents/ClassSliderList";
import useAxios from "../hooks/useAxios";
export default function HomePage() {
  const [randomNumber, setRandomNumber] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
  }, []);
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes`);

  return (
    <section className="py-4">
      <LandingClassCard data={!loading && !error ? data?.filter((item) => item.id === randomNumber) : null} loading={loading} error={error} />
      <ClassSliderList data={data} loading={loading} error={error} pl heading="Classes for you" mt />
    </section>
  );
}
