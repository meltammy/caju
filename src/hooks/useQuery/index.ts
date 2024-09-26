import { useState, useEffect, useCallback } from "react";

interface Props {
  path?: string;
}

type UseQuery<Data> = {
  data: Data | null;
  error: string | null;
  isLoading: boolean;
  refetch: () => void;
};

const URL = import.meta.env.VITE_API_URL;

type Cache = {
  [path: string]: unknown;
};

// Initialize cache
const cache: Cache = {};

/**
 * Custom hook to fetch data from an API with caching.
 *
 * @template Data
 * @param {Props} props - The props for the hook.
 * @returns {UseQuery<Data>} The query state including data, error, loading status, and refetch function.
 */
export const useQuery = <Data>({ path = "" }: Props): UseQuery<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (isCacheEnabled = true) => {
      if (cache[path] && isCacheEnabled) {
        return setData(cache[path] as Data);
      }

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

        cache[path] = result;
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [path]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, refetch: () => fetchData(false) };
};
