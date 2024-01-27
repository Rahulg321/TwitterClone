import React from "react";
import { IoBag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { CategoryUser } from "@/app/types";

const UserProfileInfoSection = ({
  fullName,
  userId,
  userName,
  userbio,
  userLocation,
  userCategory,
  followers,
  following,
}: {
  fullName: string;
  userId: string;
  userName: string;
  userbio: string;
  userLocation: string;
  userCategory: CategoryUser;
  followers: number;
  following: number;
}) => {
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{fullName}</span>
          <span className="text-base text-gray-400">@{userName}</span>
        </div>
        <div>
          <Link href={`${userId}/settings`}>
            <button className="rounded-xl border px-4 py-2 transition hover:scale-105">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>

      <div className="my-4 leading-tight">
        <p>{userbio}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <IoBag />
          </div>
          <span>{userCategory}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <IoLocationSharp />
          </div>
          <span>{userLocation}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <FaCalendarAlt />
          </div>
          <span className="">Joined October 2022</span>
        </div>
      </div>

      <div className="mt-2 flex gap-4">
        <div>
          <span>{following}</span>
          <span className="ml-1 italic text-gray-400">Following</span>
        </div>
        <div>
          <span>{followers}</span>
          <span className="ml-1 italic text-gray-400">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfoSection;
