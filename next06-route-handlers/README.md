# Lesson 6: Route Handlers

Route handlers are an important feature in Next.js as they enable us to manage server-side logic in a clean and efficient way, without needing to rely on external API routes for each individual request.

## 1. What are Route Handlers?

Route Handlers in Next.js are designed to manage HTTP requests. They act as an alternative to traditional API routes, but with more flexibility and simplicity. Instead of creating separate API files (e.g., **pages/api/route.js)**, you can create server-side functions that handle incoming requests directly within the page or app structure.

## 2. Defining a Route Handler

In Next.js, a route handler is defined within a **route.ts** (or .js) file inside the app directory. The function inside the file specifies what should happen when the route is accessed, allowing you to interact with the request directly.

For example:

```ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //const name = searchParams.get('name')
  //const instrument = searchParams.get('instrument')

  const obj = Object.fromEntries(searchParams.entries());

  //return NextResponse.json({ name, instrument })
  return NextResponse.json(obj);
}
```

## 3. HTTP Methods (GET, POST, PUT, DELETE, etc.)

Route handlers can be defined to respond to various HTTP methods such as **GET**, **POST**, **PUT**, and **DELETE**. This is useful when building forms, APIs, or performing CRUD operations in a Next.js app.

Example for handling a **POST** request:

```ts
export async function POST(request: Request) {
  const data: Feedback = await request.json();
  console.log("data: ", data);

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
}
```
