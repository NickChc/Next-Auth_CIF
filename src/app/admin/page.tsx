import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function AdminPage() {
  const session = await getSession();
  const user = session?.user;

  if (user == null) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not allowed to view this page.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-4xl font-bold text-center">--ADMIN--</h1>
      <p>Welcome, {user.name}</p>
    </main>
  );
}
