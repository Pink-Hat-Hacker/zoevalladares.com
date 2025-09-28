import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-6 text-lg">
        Welcome! Check out my <Link href="/portfolio" className="text-blue-600 underline">projects</Link>.
      </p>
    </main>
  );
}