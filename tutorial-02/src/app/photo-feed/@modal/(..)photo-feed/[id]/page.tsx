import Image from "next/image";
import wonderImages, { WonderImage } from "../../../wonders";
import Modal from "@/components/modal";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage = wonderImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-black p-4">
        <h2 className="text-xl font-semibold text-black">{photo.name}</h2>
        <h3 className="text-gray-500">{photo.photographer}</h3>
        <h3 className="text-gray-500">{photo.location}</h3>
      </div>
    </Modal>
  );
}