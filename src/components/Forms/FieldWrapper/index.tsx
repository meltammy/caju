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
      <label htmlFor={id} aria-labelledby={id}>
        {label}
      </label>
      {children}
      {error && (
        <span
          role="alert"
          id={helpId}
          style={{ fontSize: 12, color: "red" }}
          data-testid={helpId}
        >
          {error}
        </span>
      )}
    </div>
  );
}
