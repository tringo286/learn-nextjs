# Lesson 1: Pages & Layouts in Next.js

This project is part of my journey in learning **Next.js**, starting with understanding the App Router system, building basic layouts, and working with page-level components. The focus here is on routing, shared layouts, and the loading/error states.

## Notes

- Layouts (layout.tsx) wrap every route under the folder they’re placed in. app/layout.tsx is the root layout.

- loading.tsx and error.tsx provide route-level fallback UI for async loading and error handling.

- page.tsx defines the route content for the specific path. For example, app/about/page.tsx is served at /about.

- You can style components using either global styles (globals.css) or CSS Modules (*.module.css), which scope styles to the component.

