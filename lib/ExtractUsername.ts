export function extractUsername(email: string) {
  // Use a regular expression to match the username part before the "@" symbol
  const usernameMatch = email.match(/^([^@]+)@/);

  // If there's a match, return the username part, otherwise return null
  return usernameMatch ? usernameMatch[1] : null;
}
