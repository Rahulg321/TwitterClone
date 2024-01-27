import React from "react";
import clsx from "clsx";
import getFirebaseUser from "@/firebase/getUser";
import { getCurrentLoggedInUser } from "@/lib/utils";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

type HeaderProps = {
  className?: string;
};

const Header = async ({ className }: HeaderProps) => {
  const user = await getCurrentLoggedInUser();
  if (!user) {
    redirect("/login");
  }
  const currentUser = await getFirebaseUser(user?.id);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 block border-b bg-gray-900 md:hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between p-2">
        <div className="relative aspect-1 w-[3rem]">
          <Image
            src={currentUser?.profile_picture as string}
            alt={`profile picture of ${currentUser?.user_name}`}
            fill
            className="cover rounded-full border-2"
          />
        </div>
        <div className="text-2xl">
          <FaXTwitter />
        </div>
        <div className="text-2xl">
          <IoSettings />
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-static flex-1 cursor-pointer border px-4 py-2 text-center transition">
          <span>For you</span>
        </div>
        <div className="flex-1 cursor-pointer border px-4 py-2 text-center">
          Following
        </div>
      </div>
    </header>
  );
};

export default Header;
