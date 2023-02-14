import useAxios from "../hooks/useAxios";
import { useState, useEffect, useContext } from "react";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import LandingClassCard from "../components/subcomponents/LandingClassCard";
export default function Home() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  const [randomNumber, setRandomNumber] = useState(Math.floor(0));
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4 + 1));
    setNavigationTitle("Popular Classes");
  }, []);
  console.log(randomNumber);
  const { data, error, loading } = useAxios(`${import.meta.env.VITE_API_URI}/classes/${randomNumber}`);

  return (
    <div>
      <LandingClassCard data={data} error={error} loading={loading} />
    </div>
  );
}
