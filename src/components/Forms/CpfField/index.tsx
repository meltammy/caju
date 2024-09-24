import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";

import { RegisterFormProps } from "../types";
import { Input } from "./styles";
import { FieldWrapper } from "../FieldWrapper";

type Props<FormData extends FieldValues> = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any> &
  RegisterFormProps<FormData>;

export function CpfField<FormData extends FieldValues>({
  register,
  name,
  error,
  id = "cpf",
  label,
  ...props
}: Props<FormData>) {
  const registerProps = register ? register(name) : undefined;

  const helpId = `${id}-help`;
  return (
    <FieldWrapper id={id} label={label} error={error} helpId={helpId}>
      <Input
        {...props}
        {...registerProps}
        mask="999.999.999-99"
        placeholder="Digite um CPF válido"
        id={id}
        type="text"
        aria-invalid={!!error}
        aria-describedby={helpId}
      />
    </FieldWrapper>
  );
}
