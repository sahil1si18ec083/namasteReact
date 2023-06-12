// This is my custom hooks for fetching data from a dummy api
import { useEffect, useState } from "react";

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.clone().json();
      })
      .then((data) => setData(data))
      .catch(() => setError(true));
  }, [url]);

  return { data, error };
};
export default useFetch;
