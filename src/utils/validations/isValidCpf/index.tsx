import { removeNonNumericCharacters } from "~/utils/formatters/removeNonNumericCharacters";

/**
 * Checks if the CPF has exactly 11 digits.
 *
 * @param {string} cpf - The CPF number as a string.
 * @returns {boolean} True if the CPF has 11 digits; otherwise, false.
 */
const isLengthValid = (cpf: string): boolean => {
  return cpf.length === 11;
};

/**
 * Checks if the CPF consists of 11 identical digits.
 *
 * @param {string} cpf - The CPF number as a string.
 * @returns {boolean} True if the CPF has 11 identical digits; otherwise, false.
 */
const isRepeatedDigits = (cpf: string): boolean => {
  return /^(.)\1{10}$/.test(cpf);
};

/**
 * Calculates a single verification digit for a CPF number.
 *
 * @param {string} numbers - A string representing the digits of the CPF used to calculate the verification digit.
 * @param {number} initialWeight - The initial weight to be used in the calculation. Valid values are 10 or 11.
 * @returns {number} The calculated verification digit (0-9).
 */
const calculateVerificationDigit = (
  numbers: string,
  initialWeight: 10 | 11
): number => {
  const sum = Array.from(numbers).reduce((acc, digit, index) => {
    return acc + parseInt(digit) * (initialWeight - index);
  }, 0);

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

/**
 * Calculates both verification digits for a CPF number.
 *
 * @param {string} cpf - A string representing the CPF number used to calculate the verification digits.
 * @returns {{ firstDigit: number; secondDigit: number }} An object containing the first and second verification digits.
 */
const getVerificationDigits = (
  cpf: string
): { firstDigit: number; secondDigit: number } => {
  const firstNineDigits = cpf.substring(0, 9);
  const firstDigit = calculateVerificationDigit(firstNineDigits, 10);

  const firstTenDigits = cpf.substring(0, 10);
  const secondDigit = calculateVerificationDigit(firstTenDigits, 11);

  return { firstDigit, secondDigit };
};

/**
 * Validates a CPF number.
 *
 * @param {string} cpf - The CPF number as a string.
 * @returns {boolean} True if the CPF is valid; otherwise, false.
 */
export const isValidCpf = (cpf?: string | null): boolean => {
  if (!cpf) return false;

  cpf = removeNonNumericCharacters(cpf);

  if (!isLengthValid(cpf) || isRepeatedDigits(cpf)) {
    return false;
  }

  const { firstDigit, secondDigit } = getVerificationDigits(cpf);

  // Compare calculated verification digits with the CPF
  return cpf.endsWith(`${firstDigit}${secondDigit}`);
};
