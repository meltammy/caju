import { Registration } from "~/types";
import { useQuery } from "~/hooks/useQuery";

export function useGetRegistrations(searchValue?: string) {
  return useQuery<Registration[]>({
    path: `/registrations?cpf_like=${searchValue}`,
  });
}
