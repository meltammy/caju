import { useState } from "react";

type Method = "PUT" | "POST" | "PATCH";

interface Props {
  method: Method;
}

interface FetchDataProps {
  path?: string;
  body?: Record<string, unknown>;
}

const URL = import.meta.env.VITE_API_URL;

export const useMutation = <Data>({ method }: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async ({ path = "", body }: FetchDataProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
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
  };

  return { data, error, isLoading, mutate: fetchData };
};
