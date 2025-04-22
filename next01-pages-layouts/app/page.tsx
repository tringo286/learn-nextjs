import Link from "next/link";

export default function Home() {
  return (    
   <div>
      <h1>This is the homepage</h1>
      <Link href="/about" className="text-blue-500">Go to about page</Link>      
   </div>
  );
}
