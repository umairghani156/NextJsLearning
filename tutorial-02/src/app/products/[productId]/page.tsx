import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params:{
        productId: string
    }
}
export const generateMetadata =async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}
export default function ProductId({params}: Props) {
    return (
    <>
    <h1 className="text-3xl">Details About product {params.productId}</h1>
    <Link href="/products" className="text-blue-500">Back</Link>
    </>
    )
}