import { useMutation } from "~/hooks/useMutation";
import { RegistrationStatus } from "~/types";

type Props = {
  id: string;
  status: RegistrationStatus;
};

export function useUpdateRegistrationStatus() {
  const { mutate, ...rest } = useMutation({
    method: "PATCH",
  });

  return {
    mutate: ({ id, status }: Props) =>
      mutate({
        path: `/registrations/${id}`,
        body: {
          status,
        },
        ...rest,
      }),
  };
}
