import { useToast } from "~/components/Toast/ToastContext";
import { useMutation } from "~/hooks/useMutation";
import { useRegistrationsContext } from "~/pages/Dashboard/components/RegistrationsContext/useRegistrationsContext";
import { RegistrationStatus } from "~/types";

type Props = {
  id: string;
  status: RegistrationStatus;
};

export function useUpdateRegistrationStatus() {
  const { refetch } = useRegistrationsContext();

  const { addToast } = useToast();

  const { mutate, ...rest } = useMutation({
    method: "PATCH",
    onSuccess: () => {
      refetch();
      addToast("Status alterado com sucesso!", "success");
    },
    onError: () =>
      addToast("Ocorreu um erro ao tentar alterar o status.", "error"),
  });

  return {
    mutate: ({ id, status }: Props) =>
      mutate({
        path: `/registrations/${id}`,
        body: {
          status,
        },
      }),
    ...rest,
  };
}
