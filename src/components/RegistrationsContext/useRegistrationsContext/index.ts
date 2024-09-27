import { useContext } from "react";
import { RegistrationsContext, RegistrationsContextType } from "..";

export const useRegistrationsContext = (): RegistrationsContextType => {
  const context = useContext(RegistrationsContext);

  if (!context) {
    throw new Error(
      "useRegistrationsContext must be used within a RegistrationsProvider"
    );
  }

  return context;
};
