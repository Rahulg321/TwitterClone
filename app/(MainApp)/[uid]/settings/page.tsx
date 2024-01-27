import React from "react";
import { changeUserProfile } from "@/app/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import getFirebaseUser from "@/firebase/getUser";

const page = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  let profileUser;
  if (user) {
    profileUser = await getFirebaseUser(user.id);
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Change your profile</h2>

      <form
        action={changeUserProfile}
        className="my-8 flex flex-col gap-4 px-4"
      >
        <div className="flex flex-col">
          <label htmlFor="">Change your profile name</label>
          <input
            type="text"
            name="profileName"
            placeholder="johndoe@gmail.com"
            className="user-input"
            defaultValue={profileUser?.first_name}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Change your username</label>
          <input
            type="text"
            name="username"
            placeholder="johndoe@gmail.com"
            className="user-input"
            defaultValue={profileUser?.user_name}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Change your profile pic</label>
          <input
            type="text"
            name="profilePic"
            placeholder="profilePic"
            className="user-input"
            defaultValue={profileUser?.profile_picture}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Change your cover image </label>
          <input
            type="text"
            name="coverImg"
            placeholder="coverIMG"
            className="user-input"
            defaultValue={profileUser?.cover_picture}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Enter your description</label>
          <textarea
            name="description"
            id=""
            placeholder="bio"
            className="user-input"
            defaultValue={profileUser?.user_bio}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Change your location</label>
          <input
            type="text"
            name="location"
            className="user-input"
            placeholder="US-CALIFORNIA"
            defaultValue={profileUser?.user_location}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">What type of user are you?</label>
          <select name="category" className="rounded-xl bg-slate-700 px-4 py-3">
            <option value="Community">Community</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-full bg-gray-100 px-4 py-2 text-black transition hover:scale-105"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default page;
