import { Registration } from "~/types";
import { useFetch } from "~/hooks/useFetch";
import { useSearchRegistrationContext } from "~/pages/Dashboard/components/SearchRegistrationContext/useSearchRegistrationContext";

export function useGetRegistrations() {
  const { searchValue } = useSearchRegistrationContext();

  return useFetch<Registration[]>({
    method: "GET",
    path: `/registrations?cpf_like=${searchValue}`,
  });
}
