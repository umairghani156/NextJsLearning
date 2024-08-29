export default function ProductId({params}:{
    params: {productId: string}
}) {
    return <h1 className="text-3xl">Details About product {params.productId}</h1>
}