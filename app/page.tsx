import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/state"
        className="text-yellow-200 
      hover:text-yellow-400 font-bold text-4xl"
      >
        STATE QUIZ
      </Link>
    </main>
  );
}
