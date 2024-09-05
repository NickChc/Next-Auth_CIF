"use client";

import { AdminIcon, LogOutIcon, SettingsIcon, UserIcon } from "@/assets/icons";
// import { signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-black bg-white rounded-full p-2 text-xl">
        <UserIcon className="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-3 mt-1">
        <DropdownMenuItem>
          <Link
            className="flex items-center gap-x-2 font-semibold "
            href={"/settings"}
          >
            <SettingsIcon className="text-lg" /> Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <p>{user.name}</p>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <button
            className="flex items-center gap-x-2 font-semibold"
            onClick={() => signOut()}
          >
            <LogOutIcon className="text-lg font-bold" />
            Log Out
          </button>

          {/* SERVER APPROACH BELOW */}

          {/* <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-x-2 font-semibold"
            >
              <LogOutIcon className="text-lg font-bold" />
              Log Out
            </button>
          </form> */}
        </DropdownMenuItem>

        {user.role === "admin" && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link
                className="flex items-center gap-x-2 font-semibold cursor-pointer"
                href={"/admin"}
              >
                {/* <Lock /> */}
                <AdminIcon className="text-lg" />
                Admin
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
