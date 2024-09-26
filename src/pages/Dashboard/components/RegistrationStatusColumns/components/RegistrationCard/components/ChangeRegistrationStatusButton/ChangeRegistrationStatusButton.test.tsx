import "jest-styled-components";
import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { ChangeRegistrationStatusButton } from ".";
import { RegistrationStatus } from "~/types";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { ReactNode } from "react";
import { useConfirmationModalContext } from "~/pages/Dashboard/components/ConfirmationModals/ConfirmationModalContext/useConfirmationModalContext";
import { ConfirmationModalContextType } from "~/pages/Dashboard/components/ConfirmationModals/ConfirmationModalContext";

jest.mock(
  "~/pages/Dashboard/components/ConfirmationModals/ConfirmationModalContext/useConfirmationModalContext"
);

const renderWithThemeAndContext = (
  children: ReactNode,
  mockContextValue: Partial<ConfirmationModalContextType>
) => {
  (useConfirmationModalContext as jest.Mock).mockReturnValue(mockContextValue);
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

describe("ChangeRegistrationStatusButton", () => {
  const mockSetConfirmationModalProps = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with the correct label based on status", () => {
    const mockContextValue = {
      setConfirmationModalProps: mockSetConfirmationModalProps,
    };
    const status = RegistrationStatus.Approved;

    renderWithThemeAndContext(
      <ChangeRegistrationStatusButton status={status} id="1" />,
      mockContextValue
    );

    expect(screen.getByText("Aprovar")).toBeInTheDocument();
  });

  it("calls setConfirmationModalProps with the correct parameters on click", () => {
    const mockContextValue = {
      setConfirmationModalProps: mockSetConfirmationModalProps,
    };
    const status = RegistrationStatus.Reproved;

    renderWithThemeAndContext(
      <ChangeRegistrationStatusButton status={status} id="2" />,
      mockContextValue
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockSetConfirmationModalProps).toHaveBeenCalledWith({
      changeStatusProps: { status, id: "2" },
    });
  });

  it("renders the button with the correct id", () => {
    const mockContextValue = {
      setConfirmationModalProps: mockSetConfirmationModalProps,
    };
    const status = RegistrationStatus.Review;

    renderWithThemeAndContext(
      <ChangeRegistrationStatusButton status={status} id="3" />,
      mockContextValue
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", `button-change-status-to-${status}`);
  });

  it("matches snapshot", () => {
    const mockContextValue = {
      setConfirmationModalProps: mockSetConfirmationModalProps,
    };
    const status = RegistrationStatus.Approved;

    const { asFragment } = renderWithThemeAndContext(
      <ChangeRegistrationStatusButton status={status} id="1" />,
      mockContextValue
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
