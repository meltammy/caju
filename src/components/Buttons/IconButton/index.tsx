import styled from "styled-components";

export const _IconButtonStyled = styled.button`
  cursor: pointer;
  border: 2px solid currentColor;
  width: fit-content;
  padding: 0.25rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
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
