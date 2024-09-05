import Link from "next/link";
import prisma from "../../../prisma/prisma";

export default async function UserList() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Next Auth CIF</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>

      <ul className="list-disc">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="font-semibold text-xl flex flex-col gap-y-3"
            >
              <Link className="underline" href={`/user/${user.id}`}>
                {user.name || `User ${user.id}`}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
