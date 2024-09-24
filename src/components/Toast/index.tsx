import { FC } from "react";
import { Toast } from "./types";
import { Container } from "./styles";
import { ToastItem } from "./components/ToastItem";

const ToastContainer: FC<{
  toasts: Toast[];
  onRemove: (id: number) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <Container>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </Container>
  );
};

export default ToastContainer;
