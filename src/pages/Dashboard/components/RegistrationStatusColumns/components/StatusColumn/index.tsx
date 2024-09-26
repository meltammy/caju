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
    <S.Column $status={status} key={title}>
      <S.TitleColumn $status={status}>{title}</S.TitleColumn>
      <S.CollumContent id={`column-content-${status}`}>
        {registrations.map((registration) => {
          return <RegistrationCard key={registration.id} {...registration} />;
        })}
        <S.NoResultsMessage hidden={!!registrations.length}>
          Nenhum resultado encontrado
        </S.NoResultsMessage>
      </S.CollumContent>
    </S.Column>
  );
};
