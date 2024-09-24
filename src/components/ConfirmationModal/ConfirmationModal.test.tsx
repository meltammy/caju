import "@testing-library/jest-dom";
import "jest-styled-components";

import { render, fireEvent } from "@testing-library/react";
import ConfirmationModal, { confirmationModalTestId } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";
import { asyncButtonTestId } from "../Buttons/AsyncButton";

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
    const { getByText } = renderModal();

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it("should calls onClose when cancel button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = renderModal({ onClose });

    fireEvent.click(getByText(cancelButtonLabel));
    expect(onClose).toHaveBeenCalled();
  });

  it("should calls onConfirm when confirmation button is clicked", () => {
    const onConfirm = jest.fn();
    const { getByText } = renderModal({ onConfirm });

    fireEvent.click(getByText("Yes"));
    expect(onConfirm).toHaveBeenCalled();
  });

  it("should disables buttons when loading", () => {
    const { getByRole, getByTestId } = renderModal({ isLoading: true });

    const cancelButton = getByRole("button", { name: /cancelar/i });
    const confirmButton = getByTestId(asyncButtonTestId);

    expect(cancelButton).toBeDisabled();
    expect(confirmButton).toBeDisabled();
  });

  it("should is not visible when isOpen is false", () => {
    const { getByTestId } = renderModal({ isOpen: false });

    const modal = getByTestId(confirmationModalTestId);
    expect(modal).toHaveStyleRule("display", "none");
  });

  it("should match snapshot when open", () => {
    const { asFragment } = renderModal();
    expect(asFragment()).toMatchSnapshot();
  });
});
