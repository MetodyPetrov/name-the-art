import { Artifika } from "next/font/google";
import Image from "next/image";

interface ArtWorkInfo {
    image: string,
    title?: string,
    id?: number
}

function getRandomNumber(): number {
    const min = 20000;
    const max = 100000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getImage(artId: number = getRandomNumber()): Promise<ArtWorkInfo> {
    try {
        const artwork = await (await fetch(`https://api.artic.edu/api/v1/artworks/${artId}?fields=image_id,title`)).json();
        if(!artwork.data.image_id) throw new Error();
        const image = `https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`;
        return { image: image, title: artwork.title};
    } catch {
        return await getImage();
    }
}

export default async function GuesserPage() {
    const art = await getImage();
    return (
        <form className="w-full relative m-32 flex flex-col bg-gray-300">
            <div className="w-full min-h-full relative">
                    <Image fill priority
                        src={art.image}
                        alt={art.title || 'image without a title'}
                        unoptimized={true}
                        className="object-contain border-black border-[6px] relative"
                    ></Image>
            </div>
            <input
                placeholder="Name the image"
                className="mt-10 bg-black text-white outline-none p-5 text-2xl font-semibold"
            ></input>
        </form>
    )
}