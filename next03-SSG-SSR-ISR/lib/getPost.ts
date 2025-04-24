export default async function getPost(postId: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://api.vercel.app/blog/${postId}`, {next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}