/**
 * Formats a date into the 'dd/mm/yyyy' format.
 *
 * @param {Date | string} date - The date to be formatted, which can be a Date object or a string representing a date.
 * @returns {string} The formatted date in the 'dd/mm/yyyy' format if successful; otherwise, returns the original date.
 *
 * @throws {Error} Throws an error if the date cannot be converted to a valid Date object.
 */
export function formatDate(date: Date | string) {
  try {
    const formattedDate = new Intl.DateTimeFormat("pt-BR").format(
      new Date(date)
    );
    return formattedDate;
  } catch {
    return date;
  }
}
