import { Metadata } from "next";
export const metadata : Metadata = {
    title:{
        absolute: "Blog",
    },
}
export default function MyBlog(){
    return <h1>Blog page</h1>
}