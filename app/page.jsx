import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Welcome</h1>
        <Link href="/properties">properties</Link>
      </div>
    </main>
  );
}
