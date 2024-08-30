import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Blog',
}

export default function SecondPost() {
    return (
        <div>
            <h1>Second Post</h1>
        </div>
    )
}