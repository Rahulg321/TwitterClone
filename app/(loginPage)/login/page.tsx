import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
  return (
    <section className="flex min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-center text-[22rem]">
        <FaXTwitter />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <h1 className="text-6xl font-extrabold">Happening Now</h1>
        <h4 className="my-8 text-3xl font-bold">Join Today</h4>
        <div className="flex gap-4">
          <RegisterLink className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-black transition hover:scale-105 hover:bg-slate-300">
            Create a new Account <FaGoogle />
          </RegisterLink>
          <LoginLink className="rounded-xl bg-blue-400 px-4 py-2 transition hover:scale-105 hover:bg-blue-600">
            Sign up with an existing account
          </LoginLink>
          <LogoutLink className="rounded-xl bg-blue-400 px-4 py-2 transition hover:scale-105 hover:bg-blue-600">
            Log out
          </LogoutLink>
        </div>
      </div>
    </section>
  );
};

export default page;
