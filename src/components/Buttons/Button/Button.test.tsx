import "jest-styled-components";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from ".";
import { theme } from "~/../styles/theme";
import { ComponentProps } from "react";

const renderButton = (props?: ComponentProps<typeof Button>) => {
  return render(
    <ThemeProvider theme={theme}>
      <Button {...props}>{props?.children || "Click Me"}</Button>
    </ThemeProvider>
  );
};

describe("Button component", () => {
  test("renders correctly with default styles", () => {
    const { getByRole } = renderButton();

    const button = getByRole("button", { name: /click me/i });
    expect(button).toHaveStyleRule("background-color", theme.colors.green);
  });

  test("renders disabled button with grey background", () => {
    const { getByRole } = renderButton({
      children: "disabled",
      disabled: true,
    });

    const button = getByRole("button", { name: /disabled/i });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule("background-color", theme.colors.grey, {
      modifier: ":disabled",
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = renderButton();
    expect(asFragment()).toMatchSnapshot();
  });
});
