import { getSession } from "next-auth/react";

export default async function Home() {
  // const session = await getSession();

  // if (session?.user) {
  //   return <h1>Hello, {session.user.email}</h1>;
  // }

  return <div>Home Page</div>;
}
