import Link from "next/link";

export default function Game() {
    return (
        <div className="w-full h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href="..." className="p-10 m-3 bg-gray-300 text-8xl font-bold transition-all duration-300 hover:shadow-xl hover:p-20">PROVIDER</Link>
                <Link href="..." className="p-10 m-3 bg-green-300 text-8xl font-bold transition-all duration-300 hover:shadow-xl hover:p-20">GUESSER</Link>
            </div>
        </div>
    )
}