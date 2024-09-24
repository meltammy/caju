import { ReactNode, useState } from "react";
import { Toast } from "../types";
import ToastContext from "../ToastContext";
import ToastContainer from "..";

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(0);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (message: string, type: "success" | "error" | "info") => {
    const id = nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setNextId((prev) => prev + 1);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      {children}
    </ToastContext.Provider>
  );
}
