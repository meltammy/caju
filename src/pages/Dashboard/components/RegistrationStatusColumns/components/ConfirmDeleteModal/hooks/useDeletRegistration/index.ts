import { useMutation } from "~/hooks/useMutation";

export function useDeletRegistration() {
  const { mutate, ...rest } = useMutation({
    method: "DELETE",
  });

  return {
    mutate: (id: string) =>
      mutate({
        path: `/registrations/${id}`,
      }),
    ...rest,
  };
}
