import { createContext, FC, ReactNode, useContext, useState } from "react";
import styled from "styled-components";

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

const ToastContainerStyled = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToastStyled = styled.div<{ type: string }>`
  background-color: ${(props) =>
    props.type === "success"
      ? "#4caf50"
      : props.type === "error"
      ? "#f44336"
      : props.type === "info"
      ? "#2196F3"
      : "#333"};
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  transition: opacity 0.5s;
`;

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
          <button
            onClick={() => onRemove(toast.id)}
            style={{
              marginLeft: "10px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </ToastStyled>
      ))}
    </ToastContainerStyled>
  );
};
