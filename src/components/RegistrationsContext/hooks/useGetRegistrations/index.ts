import { Registration } from "~/types";
import { useQuery } from "~/hooks/useQuery";
import { isValidCpf } from "~/utils/validations/isValidCpf";
import { removeNonNumericCharacters } from "~/utils/formatters/removeNonNumericCharacters";

export function useGetRegistrations(searchCpf?: string) {
  const formattedCpf = isValidCpf(searchCpf)
    ? removeNonNumericCharacters(searchCpf)
    : undefined;

  const cpfParam = formattedCpf ? `cpf=${formattedCpf}` : "";

  return useQuery<Registration[]>({
    path: `/registrations?${cpfParam}`,
  });
}
