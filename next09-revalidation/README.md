# Lesson 9: Revalidation

## 1. Revalidation

Revalidation is a feature in Next.js that allows statically generated pages to be updated without rebuilding the entire app. You can set a revalidation interval or trigger it manually through an API route.

## 2. Generating a Secret Token

To securely revalidate pages, generate a random secret token using Node.js:

```js
require("crypto").randomBytes(16).toString("hex");

// Output: 5459021db09d1c913aab51791ea22134
```

Store the token in the .env.local

```bash
MY_SECRET_TOKEN=y5459021db09d1c913aab51791ea22
```

## 3. Automatic Revalidation Interval

In your page file (e.g., `app/posts/page.tsx`), set the revalidation interval like so:

```ts
export const revalidate = 10; // Revalidates every 10 seconds
```

This will ensure the page is regenerated at most once every 10 seconds when requests come in.

## 4. On-Demand Revalidation Endpoint

### 4.1 Concept

On-demand revalidation refers to a strategy where you manually trigger the regeneration of static pages when data changes, rather than relying on automatic or scheduled revalidation intervals.

**For example:**

- A content editor updates a blog post in your CMS.

- Your CMS sends a webhook request to your site.

- Your server handles the request and calls res.revalidate('/your-page') in a Next.js API route.

- The page is re-rendered immediately, not waiting for the revalidation time to expire.

### 4.2 Manually Trigger Revalidation:

Create an API route at `app/pages/api/revalidate.ts` to manually trigger revalidation:

```ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
```

This allows you to revalidate a specific page by calling the API route.

**Example Usage**

To trigger revalidation, send a GET request like:

```sh
curl "http://localhost:3000/api/revalidate?path=/&secret=your_secret_token"
```
This would revalidate the home page (``/``).

When you replace `/` with any other path in the query, you can trigger the revalidation of that specific path.

For example:

```bash
curl "http://localhost:3000/api/revalidate?path=/about&secret=your_secret_token"
```

This would revalidate the ``/about`` page.
