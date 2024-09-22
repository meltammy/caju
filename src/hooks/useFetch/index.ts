import { useState, useEffect } from 'react';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface UseFetchProps {
  url?: string;
  path?: string;
  method?: Method;
  body?: Record<string, unknown>;
}

const URL = import.meta.env.VITE_API_URL

export const useFetch = <Data>({ url = URL, method = 'GET', path='', body }: UseFetchProps) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(url + path, options);

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
  };
  
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isLoading, refetch: fetchData };
};
