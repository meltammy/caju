import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type RegisterFormProps<FormData extends FieldValues> =
  | {
      name: Path<FormData>;
      register: UseFormRegister<FormData>;
    }
  | {
      name?: never;
      register?: never;
    };
