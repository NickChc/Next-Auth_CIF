import PlaceholderImg from "@/assets/images/PlaceholderImg.png";
import Image from "next/image";
import getSession from "@/lib/getSession";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl font-bold mb-4">Home Page</h2>

      {user ? (
        <div className="mx-aut flex flex-col items-center">
          <h2 className="text-3xl font-semibold my-3">
            ROLE - {user?.role || "none"}
          </h2>

          <h3>{user?.name || "Anonymous"}</h3>
          <div className="relative">
            <Image
              src={user?.image || PlaceholderImg}
              alt={user?.name || "User Image"}
              className="max-w-[98vw] sm:max-w-[33vw]"
              width={300}
              height={300}
            />
          </div>
        </div>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </div>
  );
}
