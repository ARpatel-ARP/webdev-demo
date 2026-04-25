// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware executed:", request.nextUrl.pathname);
  return NextResponse.json({ message: "Middleware executed" });

  return NextResponse.redirect(new URL("/", request.url)) ;
}

// Apply middleware to all routes
export const config = {
  matcher: "/about/:path*",
};
