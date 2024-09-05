"use client";

import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { publicAxios } from "@/utils/publicAxios";

export default function ClientPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setError(null);
    try {
      setLoading(true);
      const res = await publicAxios.get("http://localhost:3000/api/users");

      setUsers(res.data);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      {loading && <h2 className="text-3xl text-center ">LOADING...</h2>}
      {error && <div className="text-red-500">{error}</div>}
      {users.map((user) => {
        console.log(user);
        return <h2 key={user.id}>{user.role}</h2>;
      })}
    </main>
  );
}
