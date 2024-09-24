import { useHistory } from "react-router-dom";
import { useToast } from "~/components/Toast";
import { useMutation } from "~/hooks/useMutation";
import routes from "~/router/routes";
import { Registration, RegistrationStatus } from "~/types";

type Payload = Omit<Registration, "id" | "status">;

export function useCreateRegistration() {
  const history = useHistory();

  const goToDashboard = () => {
    history.push(routes.dashboard);
  };
  const { addToast } = useToast();

  const { mutate, ...rest } = useMutation({
    method: "POST",
    onSuccess: () => {
      addToast("Admissão criada com sucesso!", "success");
      goToDashboard();
    },
    onError: () => addToast("Ocorreu um erro ao criar a admissão.", "error"),
  });

  return {
    mutate: (payload: Payload) =>
      mutate({
        path: `/registrations`,
        body: { ...payload, status: RegistrationStatus.Review },
      }),
    ...rest,
  };
}
