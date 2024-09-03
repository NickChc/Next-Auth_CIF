"use server";

import { auth } from "@/auth";
import { TUpdateUserValues, updateSchema } from "@/lib/schemas";
import db from "../../prisma/prisma";
import { revalidatePath } from "next/cache";

export async function updateUser(values: TUpdateUserValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (userId == null) {
    throw new Error("Unauthorized action");
  }

  const { username } = updateSchema.parse(values);

  await db.user.update({
    where: { id: userId },
    data: {
      name: username,
    },
  });

  revalidatePath("/*");
}
