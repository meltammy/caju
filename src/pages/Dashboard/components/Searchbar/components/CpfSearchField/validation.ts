import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isValidCpf } from "~/utils/validations/isValidCpf";

const schema = yup.object({
  cpf: yup
    .string()
    .test(
      "is-valid-cpf",
      "Insira um CPF válido para executar a busca",
      (value) => isValidCpf(value)
    ),
});

export const searchCpfFormResolver = yupResolver(schema);

export type SearchCpfFormData = yup.InferType<typeof schema>;
