import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Input } from "./styles";
import { FieldWrapper } from "../FieldWrapper";

type Props<FormData extends FieldValues> = {
  label?: string;
  error?: string;
  control: Control<FormData>;
  name: Path<FormData>;
} & InputHTMLAttributes<any>;

const mask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export function CpfField<FormData extends FieldValues>({
  name,
  error,
  id = "cpf",
  label,
  control,
  ...props
}: Props<FormData>) {
  const helpId = `${id}-help`;

  return (
    <FieldWrapper id={id} label={label} error={error} helpId={helpId}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...props}
            {...field}
            guide={false}
            mask={mask}
            placeholder="Digite um CPF válido"
            id={id}
            type="text"
            aria-invalid={!!error}
            aria-describedby={helpId}
          />
        )}
      />
    </FieldWrapper>
  );
}
