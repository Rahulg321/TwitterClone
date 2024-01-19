import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const generateRandomDate = () => {
  // Generate a random date within a specific range (adjust as needed)
  const startDate = new Date(2022, 0, 1); // January 1, 2022
  const endDate = new Date(); // Current date

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime);
};

export const isUserAuthenticated = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
};

export const getCurrentLoggedInUser = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user;
};
