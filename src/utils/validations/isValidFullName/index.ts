/**
 * Checks if the string contains at least one space.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if there is at least one space, otherwise false.
 */
function hasAtLeastOneSpace(str: string): boolean {
  const regex = /\s/;
  return regex.test(str);
}

/**
 * Checks if all words in a string have at least 2 characters.
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns true if all words have at least 2 characters, otherwise false.
 */
function areAllWordsAtLeastTwoCharacters(input: string): boolean {
  const words = input.trim().split(/\s+/);
  return words.every((word) => word.length >= 2);
}

/**
 * Checks if no word in a string starts with a number.
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns true if no word starts with a number, otherwise false.
 */
function areAllWordsNotStartingWithNumber(input: string): boolean {
  const words = input.trim().split(/\s+/);
  return words.every((word) => !/^\d/.test(word));
}

/**
 * Validates if a full name meets various conditions.
 * @param {string} fullName - The full name to be validated.
 * @returns {boolean} - Returns true if the full name is valid, otherwise false.
 */
export function isValidFullName(fullName: string): boolean {
  const validations = [
    hasAtLeastOneSpace,
    areAllWordsAtLeastTwoCharacters,
    areAllWordsNotStartingWithNumber,
  ];

  return validations.every((validation) => validation(fullName));
}
