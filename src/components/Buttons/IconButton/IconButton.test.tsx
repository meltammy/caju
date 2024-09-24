import "@testing-library/jest-dom";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { IconButton } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

const renderIconButton = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <IconButton>{children}</IconButton>
    </ThemeProvider>
  );
};

describe("IconButton component", () => {
  test("renders button with children", () => {
    const { getByRole } = renderIconButton("Click Me");
    const button = getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  test("matches snapshot", () => {
    const { asFragment } = renderIconButton("Click Me");
    expect(asFragment()).toMatchSnapshot();
  });
});
