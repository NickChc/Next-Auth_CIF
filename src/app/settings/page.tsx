import { Metadata } from "next";
import { UserData } from "@/app/settings/_components/UserData";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  const session = await getSession();
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
