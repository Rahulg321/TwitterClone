"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const BackArrowProfilePage = () => {
  const router = useRouter();

  const handleBackArrowClick = () => {
    router.push("/home");
  };

  return (
    <div
      className="ml-4 cursor-pointer rounded-full p-2 transition hover:bg-slate-700"
      onClick={handleBackArrowClick}
    >
      <FaArrowLeftLong />
    </div>
  );
};

export default BackArrowProfilePage;
