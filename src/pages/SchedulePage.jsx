import { useEffect } from "react";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import { useContext } from "react";
import ScheduleClassList from "../components/subcomponents/ScheduleClassList";
export default function SchedulePage() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  useEffect(() => {
    setNavigationTitle("Schedule");
  }, []);
  return (
    <section className="p-4 pt-12">
      <h1 className="text-xl">My Schedule</h1>
      <ScheduleClassList />
    </section>
  );
}
