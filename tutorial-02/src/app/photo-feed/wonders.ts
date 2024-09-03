import { StaticImageData } from "next/image";
import photo1 from "./photos/photo-1.jpg";
import photo2 from "./photos/photo-2.jpg";
import photo3 from "./photos/photo-3.jpg";
import photo4 from "./photos/photo-4.jpg";
import photo5 from "./photos/photo-5.jpg";

export type WonderImage = {
    id: String,
    name: String,
    src: StaticImageData,
    photographer: String,
    location: String
};

export const wonderImages: WonderImage[] = [
    {
        id: "1",
        name: "Wonders of the World",
        src: photo1,
        photographer: "John Doe",
        location: "Paris"
    },
    {
        id: "2",
        name: "Wonders of the World",
        src: photo2,
        photographer: "John Doe",
        location: "Paris"
    },
    {
        id: "3",
        name: "Wonders of the World",
        src: photo3,
        photographer: "John Doe",
        location: "Paris"
    },
    {
        id: "4",
        name: "Wonders of the World",
        src: photo4,
        photographer: "John Doe",
        location: "Paris"
    },
    {
        id: "5",
        name: "Wonders of the World",
        src: photo5,
        photographer: "John Doe",
        location: "Paris"
    }
];