"use client";

import { SignInButton } from "@/app/_components/SignInButton";
import { UserDropdown } from "@/app/_components/UserDropdown";
import { LoadingIcon } from "@/assets/icons";
import { useSession } from "next-auth/react";

export function Header() {
  const { data, status } = useSession();
  const user = data?.user;

  return (
    <header className="w-fill p-3 bg-gray-900 flex items-center justify-center ">
      <h1 className="text-white whitespace-nowrap text-2xl font-bold">
        The App
      </h1>
      <nav className="flex justify-between w-full px-10">
        <div></div>
        <div className="h-10 flex items-center">
          {status === "loading" ? (
            <span className="text-white text-2xl  animate-spin">
              <LoadingIcon />
            </span>
          ) : user ? (
            <UserDropdown user={user} />
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </header>
  );
}
