'use client'
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-center">Welcome to the Coffee Shop Game</h1>
      <Link
        href="/game?difficulty=easy"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play Now
      </Link>

      <p className="text-center">
        Play as a professional barista in this coffee shop simulator.
      </p>
    </main>
  );
}
