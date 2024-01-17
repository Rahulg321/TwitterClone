import ProfileTopName from "@/components/ProfileTopName";
import React from "react";
import Image from "next/image";
import UserProfileInfoSection from "@/components/UserProfileInfoSection";
import UserProfileTabs from "@/components/UserProfileTabs";
import Tweet from "@/components/Tweet";
import { generateRandomDate } from "@/lib/utils";

const page = () => {
  return (
    <div>
      <ProfileTopName />
      <div className="relative mb-20 h-[300px]">
        <Image
          src={
            "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src={
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="profile photo of a person"
              sizes="(min-width: 808px) 50vw, 100vw"
              fill
              className="rounded-full border-4 border-black  object-cover"
            />
          </div>
        </div>
      </div>
      <UserProfileInfoSection />
      <UserProfileTabs />
      <Tweet
        isVerified={true}
        userName="Conor Mcregror"
        tweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa iusto sint qui culpa fuga maxime rerum odit. Quasi rem assumenda ipsa cum a quis voluptatibus, recusandae fugit reiciendis hic."
        userId="@ConorMac"
        datePublished={generateRandomDate()}
      />
      <Tweet
        isVerified={true}
        userName="Conor Mcregror"
        tweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa iusto sint qui culpa fuga maxime rerum odit. Quasi rem assumenda ipsa cum a quis voluptatibus, recusandae fugit reiciendis hic."
        userId="@ConorMac"
        datePublished={generateRandomDate()}
      />
      <Tweet
        isVerified={true}
        userName="Conor Mcregror"
        tweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa iusto sint qui culpa fuga maxime rerum odit. Quasi rem assumenda ipsa cum a quis voluptatibus, recusandae fugit reiciendis hic."
        userId="@ConorMac"
        datePublished={generateRandomDate()}
      />
      <Tweet
        isVerified={true}
        userName="Conor Mcregror"
        tweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa iusto sint qui culpa fuga maxime rerum odit. Quasi rem assumenda ipsa cum a quis voluptatibus, recusandae fugit reiciendis hic."
        userId="@ConorMac"
        datePublished={generateRandomDate()}
      />
    </div>
  );
};

export default page;
