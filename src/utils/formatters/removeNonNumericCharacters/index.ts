/**
 * Removes non-numeric characters from a given string.
 *
 * @param {string} value - The string from which to remove non-numeric characters.
 * @returns {string} The string containing only numeric characters. Returns an empty string if the input is undefined or empty.
 */
export function removeNonNumericCharacters(value?: string) {
  if (!value) return "";

  return value.replace(/\D/g, "");
}
