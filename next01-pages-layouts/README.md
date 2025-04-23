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

## 2. Folder = Route

- Each folder inside the app/ directory represents a part of your URL path.

```css
app/
├── about/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── layout.tsx
```

**Results in these routes:**

- /about → app/about/page.tsx

- /blog → app/blog/page.tsx

- /blog/my-first-post → app/blog/[slug]/page.tsx

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
