import { useEffect, useContext, useState } from "react";
import SearchField from "../components/subcomponents/SearchField";
import SearchResults from "../components/pagecomponents/SearchResults";
import NavigationTitleContext from "../contexts/NavigationTitleContext";
import useAxios from "../hooks/useAxios";

export default function SearchPage() {
  const { setNavigationTitle } = useContext(NavigationTitleContext);
  const [searchValue, setSearchValue] = useState("");
  const { data: classesData, loading: classesLoading, error: classesError } = useAxios(`${import.meta.env.VITE_API_URI}/classes`);
  const { data: trainersData, loading: trainersLoading, error: trainersError } = useAxios(`${import.meta.env.VITE_API_URI}/trainers`);
  useEffect(() => {
    setNavigationTitle("Search");
  }, []);
  return (
    <section className="mt-8 p-4 pr-0">
      <h1 className="text-xl">Search</h1>
      <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults
        searchValue={searchValue}
        classesData={classesData}
        classesLoading={classesLoading}
        classesError={classesError}
        trainersData={trainersData}
        trainersLoading={trainersLoading}
        trainersError={trainersError}
      />
    </section>
  );
}
