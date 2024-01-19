import React from "react";
import { IoBag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const UserProfileInfoSection = ({
  fullName,
  userName,
}: {
  fullName: string;
  userName: string;
}) => {
  return (
    <div className="px-2">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{fullName}</span>
        <span className="text-xl text-gray-400">{userName}</span>
      </div>

      <div className="my-4 leading-tight">
        <p>
          👨‍💻 Aspiring Full Stack Developer | 🎮 PS4 Gamer 🕹️ | 🏸 Former Pro
          Badminton Player 🏸 | 🌐 Sharing my coding odyssey
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <IoBag />
          </div>
          <span>Community</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <IoLocationSharp />
          </div>
          <span>Prague,Spain</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <div>
            <FaLink />
          </div>
          <span className="external-link ">
            rahul-portfolio-app-nu.vercel.app
          </span>
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
          <span>1203</span>
          <span className="ml-1 italic text-gray-400">Following</span>
        </div>
        <div>
          <span>14.1K</span>
          <span className="ml-1 italic text-gray-400">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfoSection;
