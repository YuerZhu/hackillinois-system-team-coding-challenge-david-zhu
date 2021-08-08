import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState();
    const [error, setError] = useState()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetch();
  }, []);
  return {data, error};
}
