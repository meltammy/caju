import styled from "styled-components";

const Button = styled.button<{ $variant: "outline" | "filled"; color: string }>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  place-content: center;
  cursor: pointer;
  height: 3.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-wrap: nowrap;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 1;
  }

  ${(props) => {
    switch (props.$variant) {
      case "outline":
        return `
          border: 2px solid ${props.color};
          color:  ${props.color};
          background: transparent;
        `;
      case "filled":
        return `
          background-color:  ${props.color};
          color: ${props.theme.colors.white};
        `;
      default:
        return `
          background-color: ${props.color ?? props.theme.colors.green};
          color: ${props.theme.colors.white};
        `;
    }
  }}
`;

export default Button;
