import { useMutation } from "~/hooks/useMutation";
import { RegistrationStatus } from "~/types";

type Props = {
  id: string;
  status: RegistrationStatus;
};

export function useUpdateRegistrationStatus({ id, status }: Props) {
  return useMutation({
    method: "PATCH",
    path: `/registrations/${id}`,
    body: {
      status,
    },
  });
}
