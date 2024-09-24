import { ComponentProps } from "react";
import Button from "../Button";
import { StyledSpinner } from "./styles";

type Props = {
  isLoading?: boolean;
} & ComponentProps<typeof Button>;

export function AsyncButton({ isLoading, children, disabled, ...rest }: Props) {
  return (
    <Button {...rest} disabled={isLoading || disabled}>
      {isLoading ? <StyledSpinner /> : children}
    </Button>
  );
}
