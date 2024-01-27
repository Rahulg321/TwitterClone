import ProfileTopName from "@/components/ProfileTopName";
import React from "react";
import Image from "next/image";
import UserProfileInfoSection from "@/components/UserProfileInfoSection";
import UserProfileTabs from "@/components/UserProfileTabs";
import Tweet from "@/components/Tweet";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import getFirebaseUser from "@/firebase/getUser";
import { CategoryUser } from "@/app/types";

const page = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  let profileUser;
  if (user) {
    profileUser = await getFirebaseUser(user.id);
  }

  return (
    <div>
      <ProfileTopName profileUserName={profileUser?.first_name as string} />
      <div className=" relative mb-20">
        <div className="aspect-h-2 aspect-w-3">
          <Image
            src={profileUser?.cover_picture as string}
            alt="background image of user profile"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="absolute bottom-[-60px] left-4 h-[150px] w-[150px] cursor-pointer   rounded-full border-b-4">
          <div className="relative aspect-1">
            <Image
              src={profileUser?.profile_picture as string}
              alt="profile photo of a person"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              className="rounded-full border-4 border-black  object-cover"
            />
          </div>
        </div>
      </div>
      <UserProfileInfoSection
        userId={profileUser?.userId as string}
        fullName={profileUser?.first_name as string}
        userName={profileUser?.user_name as string}
        userbio={profileUser?.user_bio as string}
        userLocation={profileUser?.user_location as string}
        userCategory={profileUser?.user_category as CategoryUser}
        followers={profileUser?.followers as number}
        following={profileUser?.following as number}
      />
      <UserProfileTabs />

      {/* show all the tweets made by the user */}
    </div>
  );
};

export default page;
