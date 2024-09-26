import "jest-styled-components";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IconAndText } from ".";

const MockIcon = () => <svg data-testid="mock-icon" />;
const testText = "Sample Text";

describe("IconAndText", () => {
  it("renders the icon and text correctly", () => {
    render(<IconAndText icon={<MockIcon />} text={testText} />);

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("should match snapshot when loading", () => {
    const { asFragment } = render(
      <IconAndText icon={<MockIcon />} text={testText} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
