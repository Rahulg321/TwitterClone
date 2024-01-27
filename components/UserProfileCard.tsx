import Image from "next/image";
import React from "react";

type UserProfileCardProps = {
  username: string;
  userProfilePic: string;
  userbio: string;
  userFullName: string;
};

const UserProfileCard = ({
  username,
  userProfilePic,
  userbio,
  userFullName,
}: UserProfileCardProps) => {
  return (
    <div className="mb-6 flex px-4">
      <div>
        <div className="relative aspect-1  w-12">
          <Image
            src={userProfilePic}
            alt="profile picture of some person"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="ml-4 flex flex-1 flex-col ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold">{userFullName}</span>
            <span className="text-sm italic text-slate-400">@{username}</span>
          </div>
          <button className="bg-primary rounded-3xl px-4 py-2">Follow</button>
        </div>
        <span className="mt-3 text-sm">{userbio}</span>
      </div>
    </div>
  );
};

export default UserProfileCard;
