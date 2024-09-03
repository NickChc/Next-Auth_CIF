import { Metadata } from "next";
import { UserData } from "@/app/settings/_components/UserData";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  const session = await auth();
  const user = session?.user;

  if (user == null) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return (
    <main>
      <UserData user={user} />
    </main>
  );
}
