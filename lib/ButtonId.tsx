export function generateLikeButtonId(namespace: string, length = 10) {
  // Ensure the namespace is a string and has a reasonable length
  const sanitizedNamespace = String(namespace).slice(0, 20);

  // Generate a random alphanumeric string
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let generatedId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedId += characters.charAt(randomIndex);
  }

  // Combine the namespace and generated ID
  const likeButtonId = `${sanitizedNamespace}_${generatedId}`;

  // Ensure the total length does not exceed 50 characters
  return likeButtonId.slice(0, 50);
}
