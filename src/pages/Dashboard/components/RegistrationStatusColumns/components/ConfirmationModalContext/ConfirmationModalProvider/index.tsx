import { useState, ReactNode, FC } from "react";
import { ConfirmationModalContext, ConfirmationModalProps } from "..";

export const ConfirmationModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [changeRegistrationStatusProps, setChangeRegistrationStatusProps] =
    useState<ConfirmationModalProps>();

  return (
    <ConfirmationModalContext.Provider
      value={{
        confirmationModalProps: changeRegistrationStatusProps,
        setConfirmationModalProps: setChangeRegistrationStatusProps,
      }}
    >
      {children}
    </ConfirmationModalContext.Provider>
  );
};
