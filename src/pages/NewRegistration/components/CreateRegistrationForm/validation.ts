import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { errorMessages } from "~/utils/validations/errorMessages";
import { isValidCpf } from "~/utils/validations/isValidCpf";
import { isValidFullName } from "~/utils/validations/isValidFullName";

const schema = yup.object({
  employeeName: yup
    .string()
    .required(errorMessages.required)
    .test("is-valid-fullname", errorMessages.invalidName, (value) =>
      isValidFullName(value)
    ),
  cpf: yup
    .string()
    .required(errorMessages.required)
    .test("is-valid-cpf", errorMessages.invalidCpf, (value) =>
      isValidCpf(value)
    ),
  email: yup
    .string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.required),
  admissionDate: yup
    .date()
    .required(errorMessages.required)
    .typeError(errorMessages.invalidAdmissionDate),
});

export const newRegistrationFormResolver = yupResolver(schema);

export type CreateRegistrationFormData = yup.InferType<typeof schema>;
