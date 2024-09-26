import { removeNonNumericCharacters } from "~/utils/formatters/removeNonNumericCharacters";
import { CreateRegistrationFormData } from "../../validation";

export function formatCreateRegistrationPayload({
  admissionDate,
  cpf,
  ...data
}: CreateRegistrationFormData) {
  return {
    ...data,
    cpf: removeNonNumericCharacters(cpf),
    admissionDate: admissionDate.toISOString(),
  };
}
