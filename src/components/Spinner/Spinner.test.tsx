import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
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
    const { getByRole } = renderSpinner();

    const spinner = getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = renderSpinner();
    expect(asFragment()).toMatchSnapshot();
  });
});
