# Lesson 1: Pages & Layouts in Next.js

This project is part of my journey in learning **Next.js**, starting with understanding the App Router system, building basic layouts, and working with page-level components.

## 1. Routing System and App Structure.

### 📄 Pages Router (Old Way)

- Based on the `pages/` directory.
- **File = Route** (e.g., `pages/about.js` becomes `/about`)
- Data fetching handled via:
  - `getStaticProps`
  - `getServerSideProps`
  - `getStaticPaths`
- No support for layouts or nested routes natively.
- Simple and great for many use cases.

### 🧩 App Router (New Way)

- Based on the `app/` directory.
- Supports:
  - Nested layouts
  - Server & client components
  - Loading, error, not-found UI per route
- Data fetching is done using:
  - `fetch()` directly in components (RSC)
  - `generateStaticParams` (like `getStaticPaths`)
- Much more flexible, especially for complex UIs.

## 2. Segment in Next.js App Router

A segment is basically a folder in your /app directory that represents a part of your URL path.

#### Example structure:

```bash
/app
  /dashboard
    page.tsx         → Renders at /dashboard
  /dashboard/settings
    page.tsx         → Renders at /dashboard/settings
  /about
    page.tsx         → Renders at /about
```

Each folder like dashboard, settings, about is a segment, and it controls a portion of the route.

### 2.1 Segment-Level Features

Within each segment, you can define files that control rendering, behavior, and layout for that level.

| File            | Purpose                                                              |
| --------------- | -------------------------------------------------------------------- |
| `page.tsx`      | Main component rendered at that route segment (`/dashboard`)         |
| `layout.tsx`    | Wraps all child segments (like a shared layout, nav, etc.)           |
| `template.tsx`  | Like layout, but resets on navigation (good for modals, transitions) |
| `error.tsx`     | Error boundary for that route and its children                       |
| `not-found.tsx` | Renders when `notFound()` is called or no match is found             |
| `loading.tsx`   | Suspense fallback shown while loading (SSR/streaming)                |
| `default.tsx`   | Used with parallel routes (more advanced routing setup)              |

### 2.2 Hierarchy Example

```bash
/app
  layout.tsx          → wraps the entire app
  /dashboard
    layout.tsx        → wraps everything under /dashboard
    page.tsx          → renders at /dashboard
    /settings
      page.tsx        → renders at /dashboard/settings
      error.tsx       → handles errors in /dashboard/settings
```

Each level can override or extend behavior from the parent segment.

## 3. Layouts in Next.js (`layout.tsx`)

- Layouts (`layout.tsx`) wrap **every route** under the folder they're placed in.
- `app/layout.tsx` is the **root layout**.

---

### Purpose

Meant for shared UI across multiple pages.  
Automatically wraps every `page.tsx` inside it.

---

### Perfect for:

- Header / Navbar
- Footer
- Sidebar
- Providers (e.g. theme, auth, etc.)

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <Navbar />
        <main>{children}</main> {/* <-- page.tsx renders here */}
        <Footer />
      </body>
    </html>
  );
}
```

- page.tsx defines the route content for the specific path. For example, app/about/page.tsx is served at /about.

## 4. Pages in Next.js (`page.tsx`)

- A `page.tsx` file is used to define a **route** in your app.
- Any file named `page.tsx` inside the `app` directory becomes a **route endpoint**.

---

### Purpose

Used to render the actual content of a specific route.  
Handles the UI and logic for that individual page.

---

### Common use cases:

- Static or dynamic page content
- Fetching and displaying data
- Handling user interactions
- Combining with layouts for consistent structure
