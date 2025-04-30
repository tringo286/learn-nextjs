# Lesson 5: Blog Website

This lesson introduces a basic blog website built using Next.js App Router. It demonstrates dynamic routing, static generation, custom components, and basic CSS styling.

## Project Structure Overview

- **app/**: Contains the main application structure using the App Router
- **components/**: Shared UI components used throughout the site
- **posts/**: Route handler for dynamic blog post rendering
- **blogposts/**: Markdown files used as content sources for posts
- **lib/**: Utility functions for post management and formatting
- **public/images/**: Static assets like profile pictures

## Additional Notes

### 1. [Tailwind Typography Plugin Installation](https://github.com/tailwindlabs/tailwindcss-typography)

### 2. Markdown-based Libraries

#### 2.1 gray-matter

- **Purpose**: gray-matter is used to parse front matter from Markdown files. Front matter is metadata added to the top of a Markdown file, usually in YAML format, that can contain information like titles, dates, categories, tags, etc.

- **How it works**: It extracts this metadata and the Markdown content so that you can use them separately in your Next.js application.

For example

```tsx
// Use gray-matter to parse the post metadata section
const matterResult = matter(fileContents);

const blogPost: BlogPost = {
  id,
  title: matterResult.data.title,
  date: matterResult.data.date,
};
```

#### 2.2 remark

- **Purpose**: remark is a Markdown processor that allows you to transform Markdown content. It can convert Markdown into HTML, manipulate the content, and apply transformations like syntax highlighting, formatting, etc.

- **How it works**: You can use remark to convert the raw Markdown content (without front matter) into HTML.

For example:

```tsx
// Use gray-matter to parse the post metadata section
const matterResult = matter(fileContents);

const processedContent = await remark().use(html).process(matterResult.content);

const contentHtml = processedContent.toString();

const blogPostWithHTML: BlogPost & { contentHtml: string } = {
  id,
  title: matterResult.data.title,
  date: matterResult.data.date,
  contentHtml,
};
```

#### 2.3 remark-html

- **Purpose**: remark-html is a plugin for remark that specifically converts Markdown to HTML. When you use remark for processing Markdown, you can use remark-html to produce the corresponding HTML output.

- **How it works**: It helps convert the parsed Markdown (using remark) into valid HTML that can be rendered in your app.

```tsx
const processedContent = await remark().use(html).process(matterResult.content);
```

### 3. Built-in Node JS Modules - fs and path:

#### 3.1 fs (File System module)

- The **fs** module allows you to interact with the file system, such as reading from and writing to files, creating directories, and more.

- **Reading files**: The `fs.readFileSync()` method is used to read the content of a file synchronously. For example:

For example:

```tsx
const fileContents = fs.readFileSync(fullPath, "utf8");
```

This reads the content of a markdown file `(.md)` as a string in UTF-8 encoding.

**Reading the directory**: The `fs.readdirSync()` method reads all the file names in a directory.

For example:

```tsx
const fileNames = fs.readdirSync(postsDirectory);
```

This reads the list of files (e.g., markdown files) in the `blogposts` directory.

### 3.2 path (Path module)

- The `path` module provides utilities for working with file and directory paths, helping you create cross-platform-compatible paths (i.e., paths that work on both Windows and UNIX-like systems like Linux or macOS).

- **Joining paths**: The `path.join()` method is used to safely join multiple path segments into one. For example:

```tsx
const postsDirectory = path.join(process.cwd(), "blogposts");
```

This combines the current working directory (obtained with `process.cwd()`) with the 'blogposts' directory to create the absolute path to the `blogposts` folder.
