import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FieldWrapper } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

const helpId = "help-test";
const renderFieldWrapper = (
  props: Partial<React.ComponentProps<typeof FieldWrapper>> = {}
) => {
  const defaultProps = {
    id: "test-field",
    helpId,
    label: "Test Label",
    children: <input type="text" id="test-field" />,
    ...props,
  };

  return render(
    <ThemeProvider theme={theme}>
      <FieldWrapper {...defaultProps} />
    </ThemeProvider>
  );
};

describe("FieldWrapper component", () => {
  it("should render label and children", () => {
    renderFieldWrapper();

    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/test label/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "test-field");
  });

  it("should render error message when provided", () => {
    renderFieldWrapper({
      error: "This field is required",
    });

    const errorMessage = screen.getByTestId(helpId);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("This field is required");
  });

  it("should does not render error message when not provided", () => {
    renderFieldWrapper();

    const errorMessage = screen.queryByTestId(helpId);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = renderFieldWrapper();
    expect(asFragment()).toMatchSnapshot();
  });
});
