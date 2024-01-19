import ProfileTopName from "@/components/ProfileTopName";
import React from "react";
import Image from "next/image";
import UserProfileInfoSection from "@/components/UserProfileInfoSection";
import UserProfileTabs from "@/components/UserProfileTabs";
import Tweet from "@/components/Tweet";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { extractUsername } from "@/lib/ExtractUsername";
import { profile } from "console";

const page = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  let username: string = "";

  if (user && user.email) {
    username = extractUsername(user.email) as string;
  }

  let fullName = "";

  if (user && user.given_name) {
    fullName =
      user.given_name + (user.family_name ? " " + user.family_name : "");
  }

  let profilePicture = "";
  if (user?.picture) {
    profilePicture = user.picture;
  } else {
    profilePicture =
      "https://images.unsplash.com/photo-1695556406049-8ca4f2ff854c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  return (
    <div>
      <ProfileTopName profileUserName={fullName} />
      <div className="relative mb-20 h-[300px]">
        <Image
          src={
            "https://images.unsplash.com/photo-1704234257809-9cbc16c6a7c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
          }
          alt="background image of user profile"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        <div className="absolute bottom-[-60px] left-4 h-[150px] w-[150px] cursor-pointer   rounded-full border-b-4">
          <div className="relative h-[150px] w-[150px]">
            <Image
              src={profilePicture}
              alt="profile photo of a person"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              className="rounded-full border-4 border-black  object-cover"
            />
          </div>
        </div>
      </div>
      <UserProfileInfoSection fullName={fullName} userName={username} />
      <UserProfileTabs />
    </div>
  );
};

export default page;
