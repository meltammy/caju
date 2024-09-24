import { removeNonNumericCharacters } from "~/utils/formatters/removeNonNumericCharacters";
import { NewRegistrationFormData } from "../../validation";

export function formatCreateRegistrationPayload({
  admissionDate,
  cpf,
  ...data
}: NewRegistrationFormData) {
  return {
    ...data,
    cpf: removeNonNumericCharacters(cpf),
    admissionDate: admissionDate.toISOString(),
  };
}
