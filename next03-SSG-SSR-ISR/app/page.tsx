import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Page() {
  const posts: Post[] = await getAllPosts();
  return (
    <main>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
