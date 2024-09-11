import { Product } from '@/components/product';
import { Review } from '@/components/review';
import React, { Suspense } from 'react'

const ProductDetails = () => {
  return (
    <div>
        <h1>Product Details</h1>
        <Suspense fallback={<p>Loading...</p>}>
        <Product />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
        <Review/>
        </Suspense>
    </div>
  )
}

export default ProductDetails;