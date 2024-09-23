import { useState, useEffect, useCallback } from "react";

interface Props {
  path?: string;
}

const URL = import.meta.env.VITE_API_URL;

export const useQuery = <Data>({ path = "" }: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const options: RequestInit = {
        method: "GET",
      };

      const response = await fetch(URL + path, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [path, URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, refetch: fetchData };
};
