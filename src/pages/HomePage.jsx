import { useEffect, useContext, useState } from "react";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import LandingClassCard from "../components/subcomponents/LandingClassCard";
import ClassSlider from "../components/subcomponents/ClassSlider";
import useAxios from "../hooks/useAxios";
export default function HomePage() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  const [randomNumber, setRandomNumber] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
  }, []);
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes`);
  useEffect(() => {
    setNavigationTitle("Popular Classes");
  }, []);

  return (
    <section className="py-4">
      <LandingClassCard data={!loading && !error ? data?.filter((item) => item.id === randomNumber) : null} loading={loading} error={error} />
      <ClassSlider data={data} loading={loading} error={error} pl heading="Classes for you" mt />
    </section>
  );
}
