# Lesson 8: Middleware

In this lesson, we explore how to use **middleware** in Next.js to intercept and modify requests, implement **rate limiting**, and handle **CORS** (Cross-Origin Resource Sharing) to secure API endpoints.

## 1. Concepts

Middleware in Next.js runs before a request is completed. It's useful for tasks like:

- Authentication

- Logging

- CORS validation

- Rate limiting

For example:

Middleware is only triggered for routes matching the defined pattern

```ts
export const config = {
  matcher: "/api/:path*", // Only match API routes under /api/
}``;
```

## 2. Matching Paths

Using the `matcher` property in `middleware.ts`, we specify which routes should be intercepted by the middleware.

```ts
matcher: "/api/:path*";
```

## 3. Rate Limiting

To protect our API from abuse, we implement rate limiting using the `limiter` package.

```ts
export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
```

This configuration allows `3 requests per minut`e per process.
If a client exceeds this rate, we return a `429 Too Many Requests` response.

## 4. CORS (Cross-Origin Resource Sharing)

CORS controls which domains can access your resources. In the middleware, we enforce a **whitelist** of allowed origins.

```ts
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];
```

If a request's origin is not in the allowed list, it's rejected with a `400 Bad Request`.

## Lesson Summary

This lesson demonstrates how to:

- Secure APIs using Next.js middleware
- Implement rate limiting with the `limiter` package
- Validate CORS using origin headers
- Use `matcher` to selectively apply middleware
