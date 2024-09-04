import Image from "next/image";
import wonderImages,{WonderImage } from "../wonders";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage = wonderImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt="Wonders of the World"
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3 className="text-gray-500 px-4">{photo.photographer}</h3>
          <h3 className="text-gray-500 px-4">{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}