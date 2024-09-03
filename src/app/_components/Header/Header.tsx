import { auth } from "@/auth";
import Link from "next/link";
import { LogOutButton } from "@/app/_components/LogOutButton";
import { SignInButton } from "@/app/_components/SignInButton";

export async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="w-fill p-3 bg-gray-900 flex items-center justify-center ">
      <nav className="flex justify-between w-full px-10">
        <div></div>
        {user ? <LogOutButton /> : <SignInButton />}
      </nav>
    </header>
  );
}
