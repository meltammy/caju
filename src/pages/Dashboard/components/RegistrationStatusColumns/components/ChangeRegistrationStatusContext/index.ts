import { createContext } from "react";
import { RegistrationStatus } from "~/types";

export type ChangeRegistrationStatusProps =
  | {
      id: string;
      status: RegistrationStatus;
    }
  | undefined;

export interface ChangeRegistrationStatusContextType {
  changeRegistrationStatusProps: ChangeRegistrationStatusProps;
  setChangeRegistrationStatusProps: (
    value: ChangeRegistrationStatusProps
  ) => void;
}

export const ChangeRegistrationStatusContext = createContext<
  ChangeRegistrationStatusContextType | undefined
>(undefined);
