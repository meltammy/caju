import "@testing-library/jest-dom";
import "jest-styled-components";

import { render, fireEvent, screen } from "@testing-library/react";
import ConfirmationModal, { confirmationModalTestId } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { asyncButtonTestId } from "../../Buttons/AsyncButton";

const title = "Confirm Action";
const description = "Are you sure you want to proceed?";
const cancelButtonLabel = "Cancelar";

const renderModal = (
  props: Partial<React.ComponentProps<typeof ConfirmationModal>> = {}
) => {
  const defaultProps = {
    title,
    description,
    confirmationButtonLabel: "Yes",
    isOpen: true,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    ...props,
  };

  return render(
    <ThemeProvider theme={theme}>
      <ConfirmationModal {...defaultProps} />
    </ThemeProvider>
  );
};

describe("ConfirmationModal component", () => {
  it("should render modal with title and description", () => {
    renderModal();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("should calls onClose when cancel button is clicked", () => {
    const onClose = jest.fn();
    renderModal({ onClose });

    fireEvent.click(screen.getByText(cancelButtonLabel));
    expect(onClose).toHaveBeenCalled();
  });

  it("should calls onConfirm when confirmation button is clicked", () => {
    const onConfirm = jest.fn();
    renderModal({ onConfirm });

    fireEvent.click(screen.getByText("Yes"));
    expect(onConfirm).toHaveBeenCalled();
  });

  it("should disables buttons when loading", () => {
    renderModal({ isLoading: true });

    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    const confirmButton = screen.getByTestId(asyncButtonTestId);

    expect(cancelButton).toBeDisabled();
    expect(confirmButton).toBeDisabled();
  });

  it("should is not visible when isOpen is false", () => {
    renderModal({ isOpen: false });

    const modal = screen.getByTestId(confirmationModalTestId);
    expect(modal).toHaveStyleRule("display", "none");
  });

  it("should match snapshot when open", () => {
    const { asFragment } = renderModal();
    expect(asFragment()).toMatchSnapshot();
  });
});
