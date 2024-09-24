import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

const renderHeader = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <Header>{children}</Header>
    </ThemeProvider>
  );
};

describe("Header component", () => {
  it("should contains the title", () => {
    const { getByText } = renderHeader(<h1>Test Header</h1>);
    expect(getByText("Test Header")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = renderHeader(<h1>Test Header</h1>);
    expect(asFragment()).toMatchSnapshot();
  });
});
