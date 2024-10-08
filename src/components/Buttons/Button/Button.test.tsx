import "jest-styled-components";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
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
  it("should render correctly with default styles", () => {
    renderButton();

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyleRule("background-color", theme.colors.green);
  });

  it("should render disabled button with grey background", () => {
    renderButton({
      children: "disabled",
      disabled: true,
    });

    const button = screen.getByRole("button", { name: /disabled/i });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule("background-color", theme.colors.grey, {
      modifier: ":disabled",
    });
  });

  it("should match snapshot", () => {
    const { asFragment } = renderButton();
    expect(asFragment()).toMatchSnapshot();
  });
});
