"use client";

import { User } from "next-auth";

interface UserDataProps {
  user: User;
}

export function UserData({ user }: UserDataProps) {
  return (
    <div>
      <h1>{user.name || user.id}</h1>
    </div>
  );
}
