import { useState, ReactNode, FC } from "react";
import {
  ChangeRegistrationStatusContext,
  ChangeRegistrationStatusProps,
} from "..";

export const ChangeRegistrationStatusProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [changeRegistrationStatusProps, setChangeRegistrationStatusProps] =
    useState<ChangeRegistrationStatusProps>();

  return (
    <ChangeRegistrationStatusContext.Provider
      value={{
        changeRegistrationStatusProps,
        setChangeRegistrationStatusProps,
      }}
    >
      {children}
    </ChangeRegistrationStatusContext.Provider>
  );
};
