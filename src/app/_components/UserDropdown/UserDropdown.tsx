import { LogOutIcon, SettingsIcon, UserIcon } from "@/assets/icons";
import { signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-black bg-white rounded-full p-2 text-xl">
        <UserIcon className="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            className="flex items-center gap-x-2 font-semibold "
            href={"/settings"}
          >
            <SettingsIcon className="text-lg" /> Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <form
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
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
