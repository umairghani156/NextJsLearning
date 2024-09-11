
export const Product =async () =>{
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    return <h1>Product</h1>
}