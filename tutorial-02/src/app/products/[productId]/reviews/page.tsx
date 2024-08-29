export default function ProductReviews(
    {params }
    : { params: { productId: string } }
) {
    return <div>Reviews About product {params.productId}</div>
}