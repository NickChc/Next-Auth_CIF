import { auth } from "@/auth";
import { SignInButton } from "@/app/_components/SignInButton";
import { UserDropdown } from "@/app/_components/UserDropdown";

export async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="w-fill p-3 bg-gray-900 flex items-center justify-center ">
      <h1 className="text-white whitespace-nowrap text-2xl font-bold">
        The App
      </h1>
      <nav className="flex justify-between w-full px-10">
        <div></div>
        {user ? <UserDropdown /> : <SignInButton />}
      </nav>
    </header>
  );
}
