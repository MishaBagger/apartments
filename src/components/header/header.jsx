import { Phone } from 'lucide-react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

export default function Header() {
    return (
        <header className="flex justify-evenly items-center w-full h-20 bg-black/10 px-5">
            <div className="flex w-auto h-full items-center justify-center gap-5 md:flex-col md:gap-0 md:py-2 xl:flex-row">
                <Image
                    src="/next.svg"
                    width={0}
                    height={0}
                    className="w-auto h-1/2 md:flex-1"
                    loading='eager'
                    alt="logo"
                ></Image>
                <h1 className="font-inter text-base">
                    Ремонт квартир и домов в Вологде
                </h1>
            </div>
            <div className="flex w-auto h-full items-center justify-center gap-5">
                <a
                    className="flex gap-2 font-bold font-antic flex-col md:gap-0 md:text-xs"
                    href="tel:+71234567890"
                >
                    <p className="xl:text-base font-bold font-antic md:text-xs">
                        Получить бесплатную смету на ремонт
                    </p>
                    <div className="xl:text-base flex gap-2">
                        <Phone /> +7 (123) 456-78-90
                    </div>
                </a>
                <Dialog>
                    <DialogTrigger className="bg-blue-400 text-white p-2 rounded hover:bg-green-700 duration-300 cursor-pointer">
                        Заказать звонок
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                Закажите звонок прямо сейчас
                            </DialogTitle>
                            <DialogDescription>
                                И мы перезвоним вам всего через 5 минут!
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    )
}
