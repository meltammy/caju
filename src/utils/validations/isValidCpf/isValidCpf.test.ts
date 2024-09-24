import { isValidCpf } from "./";

describe("isValidCpf", () => {
  const validCpfs = ["11144477735", "12345678909", "111.444.777-35"];
  const invalidCpfs = ["12345678900", "11144477736", "111.444.777-36"];

  it.each(validCpfs)("should return true for valid CPF: %s", (cpf) => {
    expect(isValidCpf(cpf)).toBe(true);
  });

  it.each(invalidCpfs)("should return false for invalid CPF: %s", (cpf) => {
    expect(isValidCpf(cpf)).toBe(false);
  });

  it.each(["111.444.77A-35", "111.444.777-!@#"])(
    "should return false for CPF with non-numeric characters: %s",
    (cpf) => {
      expect(isValidCpf(cpf)).toBe(false);
    }
  );

  it("should return false for CPF with less than 11 digits", () => {
    expect(isValidCpf("111444777")).toBe(false);
  });

  it("should return false for CPF with more than 11 digits", () => {
    expect(isValidCpf("111444777350")).toBe(false);
  });

  it.each(["11111111111", "22222222222"])(
    "should return false for CPF with all identical digits: %s",
    (cpf) => {
      expect(isValidCpf(cpf)).toBe(false);
    }
  );

  it.each([null, undefined])(
    "should return false for null or undefined values: %s",
    (cpf) => {
      expect(isValidCpf(cpf)).toBe(false);
    }
  );
});
