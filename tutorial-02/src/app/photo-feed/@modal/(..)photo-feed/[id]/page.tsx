import Image from "next/image";
import { WonderImage, wonderImages } from "@/app/photo-feed/wonders";

import Modal from "@/components/Modal";

export default function PhotoModal({ params:{id} }: { params: { id: string } }) {
    const wonder = wonderImages.find((p) => p.id === id)!;
    return (
        <Modal>
            <Image
                src={wonder.src}
                alt="Wonders of the World"
                className="w-full object-cover aspect-square"
            />
            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{wonder.name}</h2>
                <h3>{wonder.photographer}</h3>
                <h3>{wonder.location}</h3>
            </div>
        </Modal>
    )
}