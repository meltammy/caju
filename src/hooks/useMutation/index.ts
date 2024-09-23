import { useState } from "react";

type Method = "PUT" | "POST" | "PATCH";

interface UseFetchProps {
  path?: string;
  method: Method;
  body?: Record<string, unknown>;
}

const URL = import.meta.env.VITE_API_URL;

export const useMutation = <Data>({
  path = "",
  method,
  body,
}: UseFetchProps) => {
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
