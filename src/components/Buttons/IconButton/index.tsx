import styled from "styled-components";

export const _IconButtonStyled = styled.button`
  width: fit-content;
  padding: 0.25rem;
  border: 2px solid currentColor;
  border-radius: 1.5rem;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.green};

  svg {
    color: currentColor;
  }
`;

type IconButtonProps = {
  children?: React.ReactNode;
  color?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: IconButtonProps) => {
  return <_IconButtonStyled {...props}>{props.children}</_IconButtonStyled>;
};
