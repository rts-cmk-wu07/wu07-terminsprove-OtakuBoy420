import { useEffect, useContext } from "react";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import LandingClassCard from "../components/subcomponents/LandingClassCard";
import ClassSlider from "../components/subcomponents/ClassSlider";
export default function HomePage() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  useEffect(() => {
    setNavigationTitle("Popular Classes");
  }, []);

  return (
    <div className="py-4">
      <LandingClassCard />
      <ClassSlider />
    </div>
  );
}
