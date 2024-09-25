import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { errorMessages } from "~/utils/validations/errorMessages";
import { isValidCpf } from "~/utils/validations/isValidCpf";

const schema = yup.object({
  cpf: yup
    .string()
    .test("is-valid-cpf", errorMessages.invalidCpf, (value) =>
      isValidCpf(value)
    ),
});

export const searchCpfFormResolver = yupResolver(schema);

export type SearchCpfFormData = yup.InferType<typeof schema>;
