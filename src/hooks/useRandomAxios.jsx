import axios from "axios";
import { useEffect, useState } from "react";

export default function useRandomAxios(url, randomNumber) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) return;
    if (!randomNumber) return;

    const request = axios.get(`${url}/${randomNumber}`);

    if (!request) return;

    request.then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        setLoading(false);
      } else {
        setError(response.status);
      }
    });
  }, [url, randomNumber]);

  return { data, loading, error };
}
