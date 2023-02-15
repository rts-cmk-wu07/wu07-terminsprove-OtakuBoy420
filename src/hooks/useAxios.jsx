import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(url, needsAuth = false) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Get token from cookie

  const token = document?.cookie?.split("=")[1]?.split(";")[0];

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios.get(url).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        setLoading(false);
      } else {
        setError(response.status);
      }
    });
  }, [url]);

  const refreshData = () => {
    setLoading(true);
    setError(null);

    if (!axios.get(url)) return;

    axios.get(url).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        setLoading(false);
      } else {
        setError(response.status);
      }
    });
  };

  return { data, loading, error, refreshData };
}
