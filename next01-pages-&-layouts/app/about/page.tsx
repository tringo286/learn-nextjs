import Link from "next/link"

export default function About() {
  // throw new Error('Not today!')
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  )
}
 