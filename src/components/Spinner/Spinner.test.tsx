import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { Spinner } from ".";

const renderSpinner = () => {
  return render(
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>
  );
};

describe("Spinner component", () => {
  it("should render correctly", () => {
    renderSpinner();

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = renderSpinner();
    expect(asFragment()).toMatchSnapshot();
  });
});
