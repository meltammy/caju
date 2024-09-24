import { Toast } from "../../types";
import { ToastStyled } from "./styles";

type Props = {
  toast: Toast;
  onRemove: (id: number) => void;
};

export function ToastItem({ toast, onRemove }: Props) {
  return (
    <ToastStyled type={toast.type}>
      {toast.message}
      <button onClick={() => onRemove(toast.id)}>X</button>
    </ToastStyled>
  );
}
