import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers(); // Returns a promise that resolves to an array of users

  const users = await usersData; // Await the promise to get the users data

  const content = (
    <section>
      <Link href="/" className="text-blue-500 mb-5 block">Back to Home</Link>
      <p className="text-3xl text-bold mb-5">Users Page</p>
      {users.map((user) => {
        return (
          <p key={user.id} className="mb-5">
            <Link href={`/users/${user.id}`} className="text-blue-400">{user.name}</Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
