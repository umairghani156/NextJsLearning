import Link from "next/link";
import Image from "next/image";
import { wonderImages } from "./wonders";

export default function Home(){
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                New Wonders of the world
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    wonderImages.map(({id, src, name}) => (
                        <Link  href={`/photo-feed/${id}`}>
                            <Image
                                src={src}
                                alt="Wonders of the World"
                                className="w-full object-cover aspect-square hover:opacity-75"
                            />
                        </Link>
                    ))
                }

            </div>

        </main>
    )
}