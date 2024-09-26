import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

const renderHeader = () => {
  return render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

describe("Header component", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderHeader();
    expect(asFragment()).toMatchSnapshot();
  });
});
