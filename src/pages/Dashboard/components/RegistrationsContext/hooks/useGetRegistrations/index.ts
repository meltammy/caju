import { Registration } from "~/types";
import { useQuery } from "~/hooks/useQuery";
import { isValidCpf } from "~/utils/validations/isValidCpf";

export function useGetRegistrations(searchValue?: string) {
  const validCpf = isValidCpf(searchValue) ? searchValue : undefined;
  const cpfParam = `cpf=${validCpf}`;

  return useQuery<Registration[]>({
    path: `/registrations?${cpfParam}`,
  });
}
