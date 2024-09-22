export enum RegistrationStatus {
  Reproved = "REPROVED",
  Approved = "APPROVED",
  Review = "REVIEW",
}

export type Registration = {
  admissionDate: string;
  cpf: string;
  email: string;
  employeeName: string;
  id: string;
  status: RegistrationStatus;
};
