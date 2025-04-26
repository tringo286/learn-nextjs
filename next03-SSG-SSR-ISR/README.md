# Lesson 3: SSG, SSR, ISR

This lesson explores three powerful rendering strategies in Next.js: **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, and **Incremental Static Regeneration (ISR)**. It also covers route rendering indicators, caching strategies, and how generateStaticParams fits into the big picture.

## 1. Rendering Strategies

### 1.1 Static Site Generation (SSG)

**What:** Pages are rendered to static HTML at build time.

**When:** Ideal for content that doesn't change often (e.g., blog posts, docs).

**How:** Use `fetch()` or external data loading in a `server component` or `generateStaticParams()` for dynamic routes.

---

### 1.2 Server-Side Rendering (SSR)

**What:** Page is rendered on every request on the server.

**When:** Great for user-specific data, frequently changing content.

**How:** Use `fetch()` inside a `server component` without caching (`cache: 'no-store'`) or with `dynamic = 'force-dynamic'`.

### 1.3 Incremental Static Regeneration (ISR)

**What:** Static pages can be updated after deployment without a full rebuild.

**When:** Combines best of SSG and SSR – fast loads + fresh data.

**How:** Use `fetch()` in a `server component` with `next: { revalidate: N }` for timed regeneration.\_

## 2. Route Rendering Indicators in Terminal

When you build your app using `next build`, Next.js shows symbols next to each route to indicate how it’s rendered:

- **○ (Circle)** – Static Route (SSG)
- **λ (Lambda)** – Server-side rendered (SSR or ISR)
- **ISR** – Incrementally statically regenerated

These indicators help you quickly identify the rendering method for each route by scanning the build output.

## 3. Static with Dynamic Fetching in the App Router

This approach allows you to **statically generate your page** but keep the **data inside it fresh** over time using **Incremental Static Regeneration (ISR)**. It gives you the best of both worlds: fast page loads and up-to-date content, without rebuilding your entire app.

### Key Concept

```tsx
fetch("https://api.example.com/data", {
  next: { revalidate: 120 },
});
```

This fetch call tells Next.js:

- "Revalidate (i.e., refetch and update) the data every 120 seconds."
- "Serve the stale data instantly, then update in the background."
- "Within the 120-second window, all incoming requests will receive the same cached (potentially stale) data."

## 4. generateStaticParams()

When you define `generateStaticParams()` in a dynamic route like `/post/[postId]`, you are telling Next.js which dynamic paths should be pre-rendered at build time.

This is mainly for Static Site Generation (SSG). So pages for `/post/1`, `/post/2`, etc., are generated at build time if their `postId` is returned from `generateStaticParams()`.

Example:

```tsx
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ postId: post.id }));
}
```

### Why use it?

Prepares pages for dynamic routes (like `/post/[postId]`) to use SSG or ISR.

**Useful when:**
- You want fast load times for popular posts.
- You want to reduce server load.

### When not to use it?
- If you have a massive number of posts, generating them all may be inefficient.
- You might prefer to fallback to ISR, rendering each page only when visited, then caching it.
