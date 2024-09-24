import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { act } from "react";
import { useToast } from "./ToastContext";
import { ToastProvider } from "./ToastProvider";

const message = "Test message";
const Button = () => {
  const { addToast } = useToast();

  return (
    <button onClick={() => addToast(message, "success")}>Show Toast</button>
  );
};

const renderComponent = () => {
  return render(
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Button />
      </ToastProvider>
    </ThemeProvider>
  );
};

describe("ToastProvider component", () => {
  test("renders toast messages", () => {
    renderComponent();

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    const toastMessage = screen.getByText(message);
    expect(toastMessage).toBeInTheDocument();
  });

  test("removes toast after timeout", async () => {
    jest.useFakeTimers();

    renderComponent();

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    const toastMessage = screen.getByText(message);
    expect(toastMessage).toBeInTheDocument();

    act(() => jest.runAllTimers());

    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  test("closes toast when button is clicked", () => {
    renderComponent();

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    const closeButton = screen.getByRole("button", { name: /x/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = renderComponent();

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
  });
});
