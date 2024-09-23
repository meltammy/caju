import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ToastContainerStyled, ToastStyled } from "./styles";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  addToast: (message: string, type: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(0);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (message: string, type: "success" | "error" | "info") => {
    setToasts((prev) => [...prev, { id: nextId, message, type }]);
    setNextId((prev) => prev + 1);

    setTimeout(() => {
      removeToast(nextId);
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      {children}
    </ToastContext.Provider>
  );
};

const ToastContainer: FC<{
  toasts: Toast[];
  onRemove: (id: number) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <ToastContainerStyled>
      {toasts.map((toast) => (
        <ToastStyled key={toast.id} type={toast.type}>
          {toast.message}
          <button onClick={() => onRemove(toast.id)}>X</button>
        </ToastStyled>
      ))}
    </ToastContainerStyled>
  );
};
