import { ReactNode } from "react";
import * as S from "./styles";

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
    <S.Container>
      <S.Label htmlFor={id} aria-labelledby={id}>
        {label}
      </S.Label>
      {children}
      {error && (
        <S.ErrorMessage role="alert" id={helpId} data-testid={helpId}>
          {error}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
}
