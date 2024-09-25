import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import TextField from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "~/../styles/theme";

function Component(props?: Partial<React.ComponentProps<typeof TextField>>) {
  const methods = useForm();

  const defaultProps = {
    id: "test-field",
    name: "testField",
    label: "Test Label",
    ...props,
  };

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <TextField
          {...defaultProps}
          register={methods.register}
          name="testField"
        />
      </FormProvider>
    </ThemeProvider>
  );
}

const renderTextField = (
  props: Partial<React.ComponentProps<typeof TextField>> = {}
) => {
  return render(<Component {...props} />);
};

describe("TextField component", () => {
  it("should render label and input", () => {
    renderTextField();

    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/test label/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "test-field");
  });

  it("should render error message when provided", () => {
    renderTextField({ error: "This field is required" });

    const errorMessage = screen.getByText(/this field is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should does not render error message when not provided", () => {
    renderTextField();

    const errorMessage = screen.queryByText(/this field is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should updates input value when typed", () => {
    renderTextField();
    const input = screen.getByLabelText(/test label/i);
    const value = "New Value";
    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);
  });

  it("should match snapshot", () => {
    const { asFragment } = renderTextField();
    expect(asFragment()).toMatchSnapshot();
  });
});
