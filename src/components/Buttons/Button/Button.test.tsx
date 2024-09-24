import "jest-styled-components";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from ".";
import { theme } from "~/../styles/theme";

describe("Button component", () => {
  test("renders correctly with default styles", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>
      </ThemeProvider>
    );

    const button = getByRole("button", { name: /click me/i });
    expect(button).toHaveStyleRule("background-color", theme.colors.green);
  });

  test("renders disabled button with grey background", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button disabled>Disabled</Button>
      </ThemeProvider>
    );

    const button = getByRole("button", { name: /disabled/i });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule("background-color", theme.colors.grey, {
      modifier: ":disabled",
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
