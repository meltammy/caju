import { useContext } from "react";
import {
  ChangeRegistrationStatusContext,
  ChangeRegistrationStatusContextType,
} from "..";

export function useChangeRegistrationStatusContext(): ChangeRegistrationStatusContextType {
  const context = useContext(ChangeRegistrationStatusContext);

  if (!context) {
    throw new Error(
      "useChangeRegistrationStatusContext must be used within a SearchRegistrationProvider"
    );
  }

  return context;
}
