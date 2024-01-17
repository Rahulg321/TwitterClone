import React from "react";
import BackArrowProfilePage from "./BackArrowProfilePage";

const ProfileTopName = () => {
  return (
    <div className="flex items-center justify-start border-b pb-2 pt-4">
      <BackArrowProfilePage />
      <div className="ml-4 flex flex-col">
        <span className="text-2xl font-bold">Rahul Gupta</span>
        <span className="italic text-gray-400">1899 posts</span>
      </div>
    </div>
  );
};

export default ProfileTopName;
