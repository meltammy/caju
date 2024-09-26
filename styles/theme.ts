import { RegistrationStatus } from "~/types";

export const theme = {
  colors: {
    primary: "#e80537",
    secondary: "#ff7500",
    green: "#64a98c",
    lightGrey: "#00000038",
    grey: "#ccc",
    black: "#000",
    white: "#fff",
    petroleumBlue: "#007c89",
    success: "#4caf50",
    error: "#f44336",
    info: "#2196F3",
  },
  registrationStatus: {
    [RegistrationStatus.Review]: {
      background: "#FDF8E9",
      color: "#EFC24D",
      buttonColor: "#ff7500",
    },
    [RegistrationStatus.Approved]: {
      background: "#EEEEFD",
      color: "#4242DF",
      buttonColor: "#0066ff",
    },
    [RegistrationStatus.Reproved]: {
      background: "#FBEDF6",
      color: "#CE2893",
      buttonColor: "#ff4655",
    },
  },
};
