import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FieldWrapper } from ".";

const helpId = "help-test";
const renderFieldWrapper = (
  props: Partial<React.ComponentProps<typeof FieldWrapper>> = {}
) => {
  const defaultProps = {
    id: "test-field",
    helpId,
    label: "Test Label",
    children: <input type="text" id="test-field" />, // Adicione o id ao input
    ...props,
  };

  return render(<FieldWrapper {...defaultProps} />);
};

describe("FieldWrapper component", () => {
  it("should render label and children", () => {
    const { getByLabelText } = renderFieldWrapper();

    expect(getByLabelText(/test label/i)).toBeInTheDocument();

    const input = getByLabelText(/test label/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "test-field");
  });

  it("should render error message when provided", () => {
    const { getByTestId } = renderFieldWrapper({
      error: "This field is required",
    });

    const errorMessage = getByTestId(helpId);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("This field is required");
  });

  it("should does not render error message when not provided", () => {
    const { queryByTestId } = renderFieldWrapper();

    const errorMessage = queryByTestId(helpId);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = renderFieldWrapper();
    expect(asFragment()).toMatchSnapshot();
  });
});
