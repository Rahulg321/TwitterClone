export const generateRandomDate = () => {
  // Generate a random date within a specific range (adjust as needed)
  const startDate = new Date(2022, 0, 1); // January 1, 2022
  const endDate = new Date(); // Current date

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime);
};
