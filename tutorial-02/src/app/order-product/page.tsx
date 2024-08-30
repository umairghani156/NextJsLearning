"use client"

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter()
    const orderHandler = () => {
        console.log('Ordering...');
        router.push('/');
        //router.replace('/');
       // router.refresh();
       // router.back()
        
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={orderHandler} className="text-blue-500 border border-blue-500 px-4 py-2">Place Order</button>
        </>
    )
}