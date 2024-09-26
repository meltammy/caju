import { Toast } from "../../types";
import * as S from "./styles";

type Props = {
  toast: Toast;
  onRemove: (id: number) => void;
};

export function ToastItem({ toast, onRemove }: Props) {
  return (
    <S.ToastStyled type={toast.type} id={`${toast.id}-toast`}>
      {toast.message}
      <S.Button onClick={() => onRemove(toast.id)}>X</S.Button>
    </S.ToastStyled>
  );
}
