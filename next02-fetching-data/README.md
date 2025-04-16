# Lesson 2: Fetching Data in Next.js

In this lesson, the focus is on understanding how to work with async server components, dynamic routing, and React’s Suspense for better user experience.

## Notes

### Server Components & Async Data
All the data-fetching logic lives inside the lib folder. Each file (`getAllUsers.ts`, `getUser.ts`, `getUserPosts.ts`) uses the native fetch API to retrieve data from a placeholder API. These functions are then used in server components to fetch and render content.

### Suspense for Async UI
In the page.tsx of the [userId] route, instead of fetching both user and posts data in parallel using Promise.all, I used React’s Suspense to handle the posts asynchronously:


```tsx
const userData: Promise<User> = getUser(userId);
const userPostsData: Promise<Post[]> = getUserPosts(userId);

// const [user, userPosts] = await Promise.all([userData, userPostsData]);
const user = await userData;

return (
  <>
    <h2>{user.name}</h2>
    <br />
    <Suspense fallback={<h2>Loading ...</h2>}>
      <UserPosts promise={userPostsData} />
    </Suspense>
  </>
);
```
This allowed the user details to render immediately, while the posts are loaded lazily with a fallback.

### Summary
This project helped me get comfortable with:

- Using async functions directly in server components

- Organizing fetch logic separately in lib

- Handling loading states with Suspense