# Lesson 10: Mutations

In this lesson, we'll learn how to implement mutations in a Next.js application. We’ll walk through how to create, update, and delete todos using a mock API powered by json-server, and explain the difference between soft and hard navigation in Next.js.

## 1. Mutation

In web development, a **mutation** refers to any operation that **modifies data** on the server. Unlike queries, which fetch data (e.g., GET requests), mutations are used to:

- **Create** new data (e.g., POST)

- **Update** existing data (e.g., PUT or PATCH)

- **Delete** data (e.g., DELETE)

In this lesson, you’ll see how to handle mutations using asynchronous fetch calls to a REST API.

## 2. Soft vs. Hard Navigation

- **Soft Navigation**: Uses Next.js's built-in routing (`useRouter().push()`) to switch pages without a full page reload. Preserves app state and provides a faster UX.

- **Hard Navigation**: Triggers a full page reload, resetting the entire app state. Typically done with `window.location.href.`

## 3. Mock backend

```bash
npx json-server -w db.json -p 3500 -h 127.0.0.1
```
