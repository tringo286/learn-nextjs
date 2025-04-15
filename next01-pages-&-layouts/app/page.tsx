import Link from 'next/link';

export default function page() {
  return (
    <>
      <h1>Hello</h1>
      <Link href="/about">Go to about page</Link>
    </>
  )
}
