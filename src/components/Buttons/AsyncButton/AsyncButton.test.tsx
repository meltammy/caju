import "jest-styled-components";
import "@testing-library/jest-dom";
import { AsyncButton } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";

const renderButton = (props?: ComponentProps<typeof AsyncButton>) => {
  return render(
    <ThemeProvider theme={theme}>
      <AsyncButton {...props}>Click Me</AsyncButton>
    </ThemeProvider>
  );
};

describe("AsyncButton component", () => {
  it("should render children when not loading", () => {
    renderButton();

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent("Click Me");
  });

  it("should render spinner when loading", () => {
    renderButton({ isLoading: true });

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(screen.queryByText("Click Me")).toBeNull();
  });

  it("should match snapshot when not loading", () => {
    const { asFragment } = renderButton();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot when loading", () => {
    const { asFragment } = renderButton({ isLoading: true });
    expect(asFragment()).toMatchSnapshot();
  });
});
