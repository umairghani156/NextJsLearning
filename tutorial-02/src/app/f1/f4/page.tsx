import Link from "next/link";

export default function F4() {
    return (
        <div>
            <h1 className="mb-4">F4 Page</h1>
            <Link href={'/f1/f3'} className={'text-blue-500 border border-blue-500 px-4 py-2'}>Back to F3</Link>
            <Link href={'/about'} className={'text-blue-500 border border-blue-500 px-4 py-2'}>About</Link>

        </div>
    )
}