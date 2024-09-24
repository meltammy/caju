import { ComponentProps } from "react";
import Button from "../Button";
import { StyledSpinner } from "./styles";

type Props = {
  isLoading?: boolean;
} & ComponentProps<typeof Button>;

export const asyncButtonTestId = "async-button";
export function AsyncButton({ isLoading, children, disabled, ...rest }: Props) {
  return (
    <Button
      {...rest}
      disabled={isLoading || disabled}
      data-testid={asyncButtonTestId}
    >
      {isLoading ? <StyledSpinner /> : children}
    </Button>
  );
}
