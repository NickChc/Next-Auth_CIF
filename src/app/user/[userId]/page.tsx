import db from "../../../../prisma/prisma";

interface UserProfileProps {
  params: {
    userId: string;
  };
}

export default async function UserProfile({
  params: { userId },
}: UserProfileProps) {
  const user = await db.user.findUnique({ where: { id: userId } });

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">
        Profile for - {user?.name || `ID - ${user?.id}`}
      </h1>
    </div>
  );
}
