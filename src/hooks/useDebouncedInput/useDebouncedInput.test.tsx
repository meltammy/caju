import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useDebouncedInput } from ".";

const TestComponent = () => {
  const { debouncedValue, bind } = useDebouncedInput<string>("");

  return (
    <div>
      <input {...bind} data-testid="input" />
      <span data-testid="debounced-value">{debouncedValue}</span>
    </div>
  );
};

describe("useDebouncedInput", () => {
  it("should update debounced value after a delay", async () => {
    render(<TestComponent />);

    const input = screen.getByTestId("input");
    const debouncedValueDisplay = screen.getByTestId("debounced-value");

    expect(debouncedValueDisplay.textContent).toBe("");

    fireEvent.change(input, { target: { value: "a" } });
    expect(debouncedValueDisplay.textContent).toBe("");

    await waitFor(() => expect(debouncedValueDisplay.textContent).toBe("a"), {
      timeout: 1000,
    });

    fireEvent.change(input, { target: { value: "abc" } });
    expect(debouncedValueDisplay.textContent).toBe("a");

    await waitFor(() => expect(debouncedValueDisplay.textContent).toBe("abc"), {
      timeout: 1000,
    });
  });

  it("should handle empty input", async () => {
    render(<TestComponent />);

    const input = screen.getByTestId("input");
    const debouncedValueDisplay = screen.getByTestId("debounced-value");

    fireEvent.change(input, { target: { value: "a" } });
    await waitFor(() => expect(debouncedValueDisplay.textContent).toBe("a"));

    fireEvent.change(input, { target: { value: "" } });
    await waitFor(() => expect(debouncedValueDisplay.textContent).toBe(""));
  });
});
