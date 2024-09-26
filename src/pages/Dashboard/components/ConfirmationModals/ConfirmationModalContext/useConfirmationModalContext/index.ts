import { useContext } from "react";
import { ConfirmationModalContext, ConfirmationModalContextType } from "..";

export function useConfirmationModalContext(): ConfirmationModalContextType {
  const context = useContext(ConfirmationModalContext);

  if (!context) {
    throw new Error(
      "useChangeRegistrationStatusContext must be used within a SearchRegistrationProvider"
    );
  }

  return context;
}
