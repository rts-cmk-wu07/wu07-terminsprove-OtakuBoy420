import axios from "axios";
import { useEffect, useState } from "react";

export default function useRandomAxios(url, randomNumber) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (!url) return;
    if (!randomNumber) return;
    axios
      .get(`${url}/${randomNumber}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setData(response.data);
          setError(null);
          setLoading(false);
        } else {
          setError(new Error(`Fetching error: ${response.status}`));
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(new Error(`Fetching error: ${err.message}`));
        setLoading(false);
      });
  }, [url, randomNumber]);

  return { data, error, loading };
}
