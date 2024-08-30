import Link from "next/link";
export default function products() {
    return (
        <div>
            <h1>Product Details</h1>
            <h2><Link href="/products/1" className="text-blue-500">Product 1</Link></h2>
            <h2><Link href="/products/2" className="text-blue-500">Product 2</Link></h2>
            <h2><Link href="/products/3" className="text-blue-500">Product 3</Link></h2>
            <h2><Link href="/products/4" className="text-blue-500" replace>Product 4</Link></h2>

            <Link href="/" className="text-blue-500">Home</Link>
        </div>
    );
}