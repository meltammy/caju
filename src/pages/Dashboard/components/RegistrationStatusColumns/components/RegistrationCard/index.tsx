import { Registration, RegistrationStatus } from "~/types";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineUserCircle,
  HiIdentification,
} from "react-icons/hi";
import { ChangeRegistrationStatusButton } from "./components/ChangeRegistrationStatusButton";
import { DeleteRegistrationButton } from "./components/DeleteRegistrationButton";

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
  cpf,
  status: currentStatus,
}: Registration) => {
  return (
    <S.Card id={id} data-card-type-id={`card-${currentStatus}`}>
      <S.IconAndText>
        <HiOutlineUserCircle />
        <h2>{employeeName}</h2>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>
      <S.IconAndText>
        <HiIdentification />
        <span>{cpf}</span>
      </S.IconAndText>
      <S.Actions>
        {availableStatusesByCurrentStatus[currentStatus].map((status) => {
          const buttonId = `${id}-${status}`;
          return (
            <ChangeRegistrationStatusButton
              status={status}
              id={id}
              key={buttonId}
            />
          );
        })}
      </S.Actions>
      <DeleteRegistrationButton id={id} />
    </S.Card>
  );
};

export default RegistrationCard;
