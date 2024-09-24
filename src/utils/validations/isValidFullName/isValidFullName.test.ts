import { isValidFullName } from "./";

describe("isValidFullName", () => {
  it.each([
    [true, "John Doe"],
    [true, "Jane Smith"],
    [false, "A B"],
    [false, "JohnDoe"],
    [false, "Jane"],
    [false, "1John Doe"],
    [false, "2Jane Smith"],
    [false, "J"],
    [false, "A"],
    [false, ""], // empty
    [false, "   "], // whitespace only
    [false, "John@Doe"], // special character
    [false, "Jane#Smith"], // special character
    [false, "A B C"], // multiple initials (should be valid now)
  ])('should return %p for the full name "%s"', (expected, name) => {
    expect(isValidFullName(name)).toBe(expected);
  });
});
