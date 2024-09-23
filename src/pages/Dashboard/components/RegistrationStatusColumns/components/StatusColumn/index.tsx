import RegistrationCard from "../RegistrationCard";
import * as S from "./styles";
import { Registration, RegistrationStatus } from "~/types";

type Props = {
  status: RegistrationStatus;
  title: string;
  registrations: Registration[];
};

export const StatusColumn = ({ registrations, status, title }: Props) => {
  return (
    <S.Column status={status} key={title}>
      <S.TitleColumn status={status}>{title}</S.TitleColumn>
      <S.CollumContent>
        {registrations.map((registration) => {
          return <RegistrationCard key={registration.id} {...registration} />;
        })}
      </S.CollumContent>
    </S.Column>
  );
};
