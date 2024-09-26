import * as S from "./styles";
import { ModalOverlay } from "../ModalOverlay";
import { mediaSources } from "~/mediaSources";
import { theme } from "~/../styles/theme";
import { useEffect, useState } from "react";

type Event = { stopPropagation: () => void };

export const confirmationModalTestId = "confirmation-modal";

const storageKey = "showWelcomeModal";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showWelcomeModal = sessionStorage.getItem(storageKey);

    setIsOpen(showWelcomeModal !== "false");
  }, []);

  function onClose() {
    setIsOpen(false);
    return sessionStorage.setItem(storageKey, "false");
  }

  return (
    <ModalOverlay $isOpen={isOpen} data-testid={confirmationModalTestId}>
      <S.ModalContainer
        $isOpen={isOpen}
        onClick={(event: Event) => event?.stopPropagation()}
      >
        <S.Title>Olá, eu sou a Mel!</S.Title>
        <S.DescriptionContainer>
          <S.Description>
            Estou muito animada com a oportunidade de participar do processo
            seletivo na <b>Caju</b>.
          </S.Description>
          <S.Description>
            Acredito que minha experiência e habilidades se alinham
            perfeitamente com os valores e objetivos da empresa.
          </S.Description>
          <S.Description>
            Estou ansiosa para contribuir com minha criatividade e dedicação,
            além de aprender e crescer em um ambiente que estimula a inovação e
            a colaboração.
          </S.Description>
          <S.Description>
            <b>Obrigada pela oportunidade!</b>
          </S.Description>
        </S.DescriptionContainer>

        <S.Illustration src={mediaSources.juca} />

        <S.StyledButton color={theme.colors.secondary} onClick={onClose}>
          Ir para o Dashboard
        </S.StyledButton>
      </S.ModalContainer>
    </ModalOverlay>
  );
}
