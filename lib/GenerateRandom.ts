export default function getRandomNumberInRange(
  min: number,
  max: number,
): number {
  // Ensure min is less than or equal to max
  if (min > max) {
    throw new Error(
      "Minimum value must be less than or equal to maximum value",
    );
  }

  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Scale the decimal to the desired range and round to the nearest integer
  const randomNumber = Math.floor(randomDecimal * (max - min + 1) + min);

  return randomNumber;
}
