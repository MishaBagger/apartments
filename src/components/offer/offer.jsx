import Image from 'next/image'
import Grid from './grid'
import Target from './target'

export default function Offer() {
    return (
        <section className="relative w-full h-full aspect-video">
            <div className="container w-full h-1/2 flex flex-col justify-end items-start mx-auto">
                <Target />
                <Grid />
            </div>

            <Image
                src="/background.png"
                fill
                className="object-cover -z-10" // ← на весь экран, под контентом
                priority
                alt="background"
            />
        </section>
    )
}
