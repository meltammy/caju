import { createContext } from "react";
import { RegistrationStatus } from "~/types";

export type ConfirmationModalProps =
  | {
      changeStatusProps?: {
        id: string;
        status: RegistrationStatus;
      };
      deleteRegistrationProps?: {
        id: string;
      };
    }
  | undefined;

export interface ConfirmationModalContextType {
  confirmationModalProps: ConfirmationModalProps;
  setConfirmationModalProps: (value: ConfirmationModalProps) => void;
}

export const ConfirmationModalContext = createContext<
  ConfirmationModalContextType | undefined
>(undefined);
