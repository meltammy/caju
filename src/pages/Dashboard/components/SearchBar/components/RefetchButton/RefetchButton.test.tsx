import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { RefetchButton } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

const renderRefetchButton = (refetch: () => void) => {
  return render(
    <ThemeProvider theme={theme}>
      <RefetchButton refetch={refetch} />
    </ThemeProvider>
  );
};

describe("RefetchButton component", () => {
  it("should render correctly", () => {
    renderRefetchButton(() => {});

    const button = screen.getByLabelText("refetch");

    expect(button).toBeInTheDocument();
  });

  it("should calls refetch function when clicked", () => {
    const refetchMock = jest.fn();
    renderRefetchButton(refetchMock);

    const button = screen.getByLabelText("refetch");

    fireEvent.click(button);

    expect(refetchMock).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    const { asFragment } = renderRefetchButton(() => {});

    expect(asFragment()).toMatchSnapshot();
  });
});
