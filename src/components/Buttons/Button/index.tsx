import styled from "styled-components";

const Button = styled.button<{ $variant: "outline" | "filled"; color: string }>`
  border: none;
  border-radius: 1rem;

  width: 100%;
  display: flex;
  align-items: center;
  place-content: center;

  padding: 0.5rem 2rem;
  height: 3.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0.5rem 1.5rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;
  text-wrap: nowrap;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 1;
  }

  ${(props) => {
    const color = props.color ?? props.theme.colors.green;
    switch (props.$variant) {
      case "outline":
        return `
          border: 2px solid ${color};
          color:  ${color};
          background: transparent;
        `;
      case "filled":
        return `
          background-color:  ${color};
          color: ${props.theme.colors.white};
        `;
      default:
        return `
          background-color: ${color};
          color: ${props.theme.colors.white};
        `;
    }
  }}
`;

export default Button;
