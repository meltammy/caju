import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { RegisterFormProps } from "../types";
import { Input } from "./styles";
import { FieldWrapper } from "../FieldWrapper";

export type TextFieldProps<FormData extends FieldValues> = {
  label?: string;
  error?: string;
  id: string;
} & InputHTMLAttributes<any> &
  RegisterFormProps<FormData>;

function TextField<FormData extends FieldValues>({
  register,
  name,
  error,
  id,
  label,
  ...props
}: TextFieldProps<FormData>) {
  const registerProps = register ? register(name) : undefined;

  const helpId = `${id}-help`;

  return (
    <FieldWrapper id={id} label={label} error={error} helpId={helpId}>
      <Input
        {...props}
        {...registerProps}
        aria-invalid={!!error}
        aria-describedby={helpId}
      />
    </FieldWrapper>
  );
}

export default TextField;
