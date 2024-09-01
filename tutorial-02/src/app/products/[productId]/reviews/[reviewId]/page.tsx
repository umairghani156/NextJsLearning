"use client"
function getRandom(count: number){
    return Math.floor(Math.random() * count)
}
export default function ProductReviews(
    {params}:
     {params: 
        {productId: string, reviewId: string}
    }) {
    //const random = getRandom(2);
    // if (random === 1) {
    //     throw new Error("Error in review");
    // }
    return (
    <div>Reviews About product {params.productId} review {params.reviewId}</div>
    )
}

//Hello World