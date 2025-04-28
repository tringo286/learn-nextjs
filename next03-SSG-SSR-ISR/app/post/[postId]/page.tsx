import getPost from "@/lib/getPost";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    postId: string;
  };
}

// Generate a static page for each post at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: any) => ({
    postId: post.id.toString(),
  }));
}

// Dynamic SEO metadata per post
export async function generateMetadata({ params }: PageProps) {
  const post = await getPost(params.postId);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "Sorry, we couldn't find that post.",
    };
  }

  return {
    title: post.title,
    description: post.content, // Or a custom summary field
  };
}

export default async function PostPage({ params }: PageProps) {
  // Await the params explicitly before using its properties
  const { postId } = await params;

  const post = await getPost(postId);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/" className="block mt-10 text-blue-500">
        Go back to Posts Page
      </Link>
    </main>
  );
}
