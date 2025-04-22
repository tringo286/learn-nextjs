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
      <h2>
        <Link href="/" className="text-blue-500">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <p key={user.id} className="mb-5">
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
