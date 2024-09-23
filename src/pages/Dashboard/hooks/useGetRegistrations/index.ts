import { Registration } from "~/types";
import { useQuery } from "~/hooks/useQuery";
import { useSearchRegistrationContext } from "~/pages/Dashboard/components/SearchRegistrationContext/useSearchRegistrationContext";

export function useGetRegistrations() {
  const { searchValue } = useSearchRegistrationContext();

  return useQuery<Registration[]>({
    path: `/registrations?cpf_like=${searchValue}`,
  });
}
