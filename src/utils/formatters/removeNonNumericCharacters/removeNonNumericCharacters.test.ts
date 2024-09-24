import { removeNonNumericCharacters } from ".";

describe("removeNonNumericCharacters", () => {
  it.each([
    ["123.456-7890", "1234567890"],
    ["CPF: 123.456.789-09", "12345678909"],
    ["!!123@@456$$789%%", "123456789"],
    ["", ""],
    ["abc123def456", "123456"],
  ])('should convert "%s" to "%s"', (input, expected) => {
    expect(removeNonNumericCharacters(input)).toBe(expected);
  });
});
