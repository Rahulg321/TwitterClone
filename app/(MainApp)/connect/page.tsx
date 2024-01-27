import BackArrowProfilePage from "@/components/BackArrowProfilePage";
import UserProfileCard from "@/components/UserProfileCard";
import React from "react";
import { IoSettings } from "react-icons/io5";
import getAllUsers from "@/firebase/getAllUsers";

const page = async () => {
  const users = await getAllUsers();
  console.log("all users in connect page are", users);
  return (
    <div>
      <div className="flex items-center justify-between border-b-2 px-2 py-4">
        <div className="flex items-center">
          <BackArrowProfilePage />
          <span className="ml-4 text-xl font-bold">Connect</span>
        </div>
        <IoSettings />
      </div>

      <div>
        <h3 className="mb-4 mt-6 text-2xl font-bold">Suggested for you</h3>
        {users.map((user) => (
          <UserProfileCard
            key={user.userId}
            userFullName={`${user.first_name} ${user.last_name}`}
            userProfilePic={user.profile_picture}
            userbio={user.user_bio}
            username={user.user_name}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
