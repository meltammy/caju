import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

export const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.petroleumBlue};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.petroleumBlue};
  }
`;

type UseFormProps<FormData extends FieldValues> =
  | {
      name: Path<FormData>;
      register: UseFormRegister<FormData>;
    }
  | {
      name: never;
      register: never;
    };

export type TextFieldProps<FormData extends FieldValues> = {
  label?: string;
  error?: string;
  id: string;
} & InputHTMLAttributes<any> &
  UseFormProps<FormData>;

function TextField<FormData extends FieldValues>({
  register,
  name,
  error,
  ...props
}: TextFieldProps<FormData>) {
  const registerProps = register ? register(name) : undefined;

  const helpId = `${props.id}-help`;

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input
        {...props}
        {...registerProps}
        aria-invalid={!!error}
        aria-describedby={helpId}
      />
      <span role="alert" id={helpId} style={{ fontSize: 12, color: "red" }}>
        {error}
      </span>
    </div>
  );
}

export default TextField;
