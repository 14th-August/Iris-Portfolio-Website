import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello From Index Page</h1>
      <Link href="/abc">Go to ABC Page</Link>
      <Link href="/abc/hello">Go to ABC Hello Page</Link>
    </>
  );
}
