import React from "react";
import NewTweetForm from "@/components/NewTweetForm";
import Tweet from "@/components/Tweet";
import { generateRandomDate } from "@/lib/utils";

const page = () => {
  return (
    <>
      <div className="border-b-2">
        <NewTweetForm />
      </div>
      <Tweet
        isVerified={false}
        userName="Rahul Gupta"
        tweetText="The magic you are looking for is in the work that you are avoiding"
        userId="@rg5353070"
        datePublished={generateRandomDate()}
      />
      <Tweet
        isVerified={true}
        userName="Naval"
        tweetText="Play long term games with long term people"
        userId="@NavalismHQ"
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
        isVerified={false}
        userName="Mark Manson"
        tweetText="The key to a good life is not giving a fuck about more; it's giving a fuck about less, giving a fuck about what is true and immediate and important."
        userId="@IAmMarkManson"
        datePublished={generateRandomDate()}
      />
    </>
  );
};

export default page;
