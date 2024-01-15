import React from "react";
import NewTweetForm from "@/components/NewTweetForm";
import Tweet from "@/components/Tweet";

const page = () => {
  return (
    <>
      <div className="border-b-2">
        <NewTweetForm />
      </div>
    </>
  );
};

export default page;
