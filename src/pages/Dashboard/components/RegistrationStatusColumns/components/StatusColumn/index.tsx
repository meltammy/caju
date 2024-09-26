import RegistrationCard from "../RegistrationCard";
import * as S from "./styles";
import { Registration, RegistrationStatus } from "~/types";

type Props = {
  status: RegistrationStatus;
  title: string;
  data: Registration[];
};

export const StatusColumn = ({ data, status, title }: Props) => {
  return (
    <S.Column $status={status} key={title}>
      <S.TitleColumn $status={status}>{title}</S.TitleColumn>
      <S.ColumContent id={`column-content-${status}`}>
        {data.map((registration) => {
          return <RegistrationCard key={registration.id} {...registration} />;
        })}
        <S.NoResultsMessage hidden={!!data.length}>
          Nenhum resultado encontrado
        </S.NoResultsMessage>
      </S.ColumContent>
    </S.Column>
  );
};
