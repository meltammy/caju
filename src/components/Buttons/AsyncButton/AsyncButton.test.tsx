import "jest-styled-components";
import "@testing-library/jest-dom";
import { AsyncButton } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";

const renderButton = (props?: ComponentProps<typeof AsyncButton>) => {
  return render(
    <ThemeProvider theme={theme}>
      <AsyncButton {...props}>Click Me</AsyncButton>
    </ThemeProvider>
  );
};

describe("AsyncButton component", () => {
  test("renders children when not loading", () => {
    const { getByRole } = renderButton();

    const button = getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent("Click Me");
  });

  test("renders spinner when loading", () => {
    const { getByRole, queryByText } = renderButton({ isLoading: true });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(queryByText("Click Me")).toBeNull();
  });

  test("matches snapshot when not loading", () => {
    const { asFragment } = renderButton();
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when loading", () => {
    const { asFragment } = renderButton({ isLoading: true });
    expect(asFragment()).toMatchSnapshot();
  });
});
