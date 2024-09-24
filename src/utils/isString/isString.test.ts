import { isString } from ".";

describe("isString", () => {
  it.each([
    [true, "hello"],
    [true, ""],
    [true, `test`],
    [false, 123],
    [false, true],
    [false, null],
    [false, undefined],
    [false, {}],
    [false, []],
    [false, Symbol("symbol")],
  ])("returns %s  for value %s", (value, expected) => {
    expect(isString(value)).toBe(expected);
  });
});
