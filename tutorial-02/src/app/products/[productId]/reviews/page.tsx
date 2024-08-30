
export default function ProductReviews(
    {params }
    : { params: { productId: string } }
) {
   
    return (
        <div>
            <h1>Reviews About product {params.productId}</h1>
        </div>
    )

}