import { removeNonNumericCharacters } from "../removeNonNumericCharacters";

/**
 * Splits the CPF string into its components.
 *
 * This function removes any non-numeric characters from the input CPF value,
 * then splits it into the first part (3 digits), second part (3 digits),
 * third part (3 digits), and check digit (2 digits).
 *
 * @param {string} value - The raw CPF input value.
 * @returns {string[]} An array containing the CPF components:
 * firstPart, secondPart, thirdPart, and checkDigit.
 */
const splitCpf = (value: string): string[] => {
  const onlyNumbers = removeNonNumericCharacters(value);

  const firstPart = onlyNumbers.slice(0, 3);
  const secondPart = onlyNumbers.slice(3, 6);
  const thirdPart = onlyNumbers.slice(6, 9);
  const checkDigit = onlyNumbers.slice(9, 11);

  return [firstPart, secondPart, thirdPart, checkDigit];
};

/**
 * Constructs a formatted CPF string from its parts.
 *
 * This function takes an array of CPF parts and constructs a formatted string
 * by joining the parts with periods and formatting the check digit correctly.
 *
 * @param {string[]} parts - An array containing the CPF parts.
 * @returns {string} The formatted CPF string, e.g., "123.456.789-09".
 */
const formatCpfParts = (parts: string[]): string => {
  return parts
    .filter(Boolean)
    .join(".")
    .replace(/(\.\d{3})\.(\d{2})$/, "$1-$2");
};

/**
 * Formats a CPF string by applying the proper mask.
 *
 * The function first splits the CPF into its components, then formats
 * those components into a string with the appropriate mask.
 *
 * @param {string} value - The raw CPF input value, which may contain non-numeric characters.
 * @returns {string} The formatted CPF string, e.g., "123.456.789-09".
 */
export const formatCpf = (value: string): string => {
  const parts = splitCpf(value);
  return formatCpfParts(parts);
};
