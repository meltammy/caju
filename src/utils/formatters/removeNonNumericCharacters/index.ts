export function removeNonNumericCharacters(value?: string) {
  if (!value) return "";

  return value.replace(/\D/g, "");
}
