import Image from "next/image";
import {wonderImages, WonderImage } from "../wonders";

export default function PhotoPage({
    params:{ id },
}: {
    params: { id: string }
}){
    const image = wonderImages.find((image) => image.id === id)!;
    return (
        <div className="container mx-auto my-10">
           <div className="w-1/2 mx-auto">
           <div>
            <h1 className="text-center text-3xl font-bold my-4">{image.name}</h1>
           </div>
           <Image src={image.src} alt="Wonders of the World"
           className="w-full object-cover aspect-square"
           />
           <div className="bg-white-500 py-4">
               <p>Photographer: {image.photographer}</p>
               <p>Location: {image.location}</p>    
           </div>
           </div>
        </div>
    )
}