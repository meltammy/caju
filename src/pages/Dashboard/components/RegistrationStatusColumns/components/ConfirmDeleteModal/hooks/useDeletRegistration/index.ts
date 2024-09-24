import { useToast } from "~/components/Toast/ToastContext";
import { useMutation } from "~/hooks/useMutation";

export function useDeletRegistration() {
  const { addToast } = useToast();

  const { mutate, ...rest } = useMutation({
    method: "DELETE",
    onSuccess: () => addToast("Admissão deletada com sucesso!", "success"),
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
