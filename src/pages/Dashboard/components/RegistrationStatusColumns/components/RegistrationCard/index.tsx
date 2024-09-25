import { Registration, RegistrationStatus } from "~/types";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
} from "react-icons/hi";
import { ChangeRegistrationStatusButton } from "./components/ChangeRegistrationStatusButton";
import { DeleteRegistrationButton } from "./components/DeleteRegistrationButton";

type Props = Omit<Registration, "cpf">;

const availableStatusesByCurrentStatus = {
  [RegistrationStatus.Approved]: [RegistrationStatus.Review],
  [RegistrationStatus.Reproved]: [RegistrationStatus.Review],
  [RegistrationStatus.Review]: [
    RegistrationStatus.Approved,
    RegistrationStatus.Reproved,
  ],
};

const RegistrationCard = ({
  admissionDate,
  email,
  employeeName,
  id,
  status: currentStatus,
}: Props) => {
  return (
    <S.Card id={id} data-card-type-id={`card-${currentStatus}`}>
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
        {availableStatusesByCurrentStatus[currentStatus].map((status) => (
          <ChangeRegistrationStatusButton status={status} id={id} key={id} />
        ))}
        <DeleteRegistrationButton id={id} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
