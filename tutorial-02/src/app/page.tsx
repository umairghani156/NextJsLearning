import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <Link href="/blog" className="text-blue-500">Blog</Link>
      <Link href="/products" className="text-blue-500 ml-4 ">Products</Link>
      
    </>
  );
}
