import { NextRequest, NextResponse } from "next/server";

const PORTAL_PATHS = ["/dashboard", "/bokningar", "/installningar", "/profil"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPortalPath = PORTAL_PATHS.some((p) => pathname.startsWith(p));

  if (isPortalPath) {
    // TODO: Ersätt med riktig auth-check (Clerk, NextAuth eller Supabase Auth)
    const isLoggedIn = false;
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/logga-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon|api|public).*)"],
};
