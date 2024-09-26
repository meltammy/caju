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
import { formatCpf } from "~/utils/formatters/formatCpf";
import { formatDate } from "~/utils/formatters/formatDate";
import { IconAndText } from "./components/IconAndText";

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
      <IconAndText icon={<HiOutlineUserCircle />} text={employeeName} />
      <IconAndText icon={<HiOutlineMail />} text={email} />
      <IconAndText
        icon={<HiOutlineCalendar />}
        text={formatDate(admissionDate).toString()}
      />
      <IconAndText icon={<HiIdentification />} text={formatCpf(cpf)} />

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
