import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(req: NextRequest) {
  return withAuth(req);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/home",
    "/communities",
    "/grok",
    "/explore",
    "/messages",
    "/lists",
    "/notifications",
    "/premium",
    "/",
  ],
};
