"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  // ✅ Prevent hydration mismatch
  if (status === "loading") {
    return null;
  }

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link href="/" className="relative group">
        <h1 className="text-xl cursor-pointer font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Patreon-cl
        </h1>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition whitespace-nowrap">
          Go to home
        </span>
      </Link>

      {/* Right Side */}
      <div className="flex items-center relative">
        {session ? (
          <>
            {/* Profile Button */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-sm font-medium shadow-lg"
            >
              Welcome {session.user.email}
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div
                onMouseLeave={() => setShowDropdown(false)}
                className="absolute right-0 top-12 w-44 bg-black rounded-xl shadow-lg z-20"
              >
                <ul className="text-sm">
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-neutral-800 rounded-t-xl"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-neutral-800 rounded-t-xl"
                    >
                      Your profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut({callbackUrl: "/login"})}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-800 rounded-b-xl"
                    >
                      Log-out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login">
            <button className="w-20 px-2 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 shadow-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
