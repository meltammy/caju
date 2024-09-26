/**
 * Checks if the given value is a string.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is string} True if the value is a string, otherwise false.
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
