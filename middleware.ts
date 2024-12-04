import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/firebase";

export async function middleware(request: NextRequest) {
  const session = await auth.currentUser;

  if (!session) {
    const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = `redirectTo=${requestedPage}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
