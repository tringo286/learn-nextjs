import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl'>Home Page</h1>
      <p>
        <Link className='text-blue-500 cursor-pointer' href="/users">Go to Users</Link>
      </p>
    </main>
  );
}
