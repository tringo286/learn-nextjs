import Link from "next/link"

export default function About() {
  // throw new Error('Not today!')
  return (
    <div>      
      <p>This is the about page.</p>
      <Link href="/" className="text-blue-500">Go back to Home</Link>
    </div>
  )
}
 