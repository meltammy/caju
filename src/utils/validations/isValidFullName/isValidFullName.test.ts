import { isValidFullName } from "./";

describe("isValidFullName", () => {
  it.each([
    [true, "John Doe"],
    [true, "Mário Assunção"],
    [true, "Jane Smith"],
    [false, "A B"],
    [false, "JohnDoe"],
    [false, "Jane"],
    [false, "1John Doe"],
    [false, "2Jane Smith"],
    [false, "J"],
    [false, "A"],
    [false, ""],
    [false, "   "],
    [false, "John@Doe"],
    [false, "Jane#Smith"],
    [false, "A B C"],
  ])('should return %p for the full name "%s"', (expected, name) => {
    expect(isValidFullName(name)).toBe(expected);
  });
});
