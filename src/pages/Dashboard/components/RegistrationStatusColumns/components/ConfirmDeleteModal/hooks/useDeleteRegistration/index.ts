import { useToast } from "~/components/Toast/ToastContext";
import { useMutation } from "~/hooks/useMutation";
import { useRegistrationsContext } from "~/pages/Dashboard/components/RegistrationsContext/useRegistrationsContext";

export function useDeleteRegistration() {
  const { addToast } = useToast();
  const { refetch } = useRegistrationsContext();

  const { mutate, ...rest } = useMutation({
    method: "DELETE",
    onSuccess: () => {
      refetch();
      addToast("Admissão deletada com sucesso!", "success");
    },
    onError: () =>
      addToast("Ocorreu um erro ao tentar deletar a admissão.", "error"),
  });

  return {
    mutate: (id: string) =>
      mutate({
        path: `/registrations/${id}`,
      }),
    ...rest,
  };
}
