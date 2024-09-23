import { ThemeProvider } from "styled-components";
import Button from ".";
import { render, screen } from "@testing-library/react";
import { theme } from "~/../styles/theme";

describe("Button", () => {
  it("Should show button", () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Button>Ativar</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button", { name: /ativar/i }));
    debug();
  });
});
