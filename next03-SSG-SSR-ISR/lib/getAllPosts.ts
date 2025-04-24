export default async function getAllPosts() {
    const res = await fetch("https://api.vercel.app/blog");
    if (!res.ok) return undefined
    return res.json()
}