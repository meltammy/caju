import { ReactNode } from "react";

export type TextFieldProps = {
  label?: string;
  error?: string;
  id: string;
  helpId: string;
  children: ReactNode;
};

export function FieldWrapper({
  error,
  children,
  label,
  helpId,
  id,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      <span role="alert" id={helpId} style={{ fontSize: 12, color: "red" }}>
        {error}
      </span>
    </div>
  );
}
