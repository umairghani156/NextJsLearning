import Link from "next/link";

export default function F1() {
    return (
        <>
        <h1>F1</h1>
        <div className="mt-4">
            <Link href={'/f1/f2'} className={'text-blue-500 border border-blue-500 px-4 py-2'}>F2</Link>
        </div>
        </>
    )
}