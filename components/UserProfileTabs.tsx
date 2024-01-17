import React from "react";

const UserProfileTabs = () => {
  return (
    <div className="mt-6 flex items-center border-b">
      <div className="flex-1 p-4 transition hover:bg-slate-700">Posts</div>
      <div className="flex-1 p-4 transition hover:bg-slate-700">Replies</div>
      <div className="flex-1 p-4 transition hover:bg-slate-700">Highlights</div>
      <div className="flex-1 p-4 transition hover:bg-slate-700">Media</div>
      <div className="flex-1 p-4 transition hover:bg-slate-700">Likes</div>
    </div>
  );
};

export default UserProfileTabs;
