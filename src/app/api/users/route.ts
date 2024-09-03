import { NextResponse } from "next/server";
import db from "../../../../prisma/prisma";

export async function GET() {
  try {
    const users = await db.user.findMany();

    // throw Error;

    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.error();
  }
}
