import { Registration, RegistrationStatus } from "~/types";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { ChangeRegistrationStatusButton } from "./components/ChangeRegistrationStatusButton";

type Props = Omit<Registration, "cpf" | "status">;

const RegistrationCard = ({
  admissionDate,
  email,
  employeeName,
  id,
}: Props) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {Object.values(RegistrationStatus).map((status) => (
          <ChangeRegistrationStatusButton status={status} id={id} key={id} />
        ))}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
