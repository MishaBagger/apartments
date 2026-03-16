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
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '../ui/field'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { CardContent } from '../ui/card'
import { Button } from '../ui/button'

export default function Header() {
    return (
        <header className="flex justify-evenly items-center w-full h-20 bg-black/10 px-5 z-10000">
            <div className="flex w-auto h-full items-center justify-center md:flex-col md:gap-0 lg:gap-5 md:py-2 xl:flex-row">
                <Image
                    src="/next.svg"
                    width={0}
                    height={0}
                    className="w-auto h-1/2 md:flex-1"
                    loading="eager"
                    alt="logo"
                ></Image>
                <h1 className="font-inter text-base">
                    Ремонт квартир и домов в Вологде
                </h1>
            </div>
            <div className="flex w-auto h-full items-center justify-center gap-5">
                <a
                    className="flex font-bold font-antic flex-col md:gap-0 md:text-xs"
                    href="tel:+71234567890"
                >
                    <p className="xl:text-base font-bold font-antic md:text-xs ">
                        Получить бесплатную смету на ремонт
                    </p>
                    <div className="xl:text-base flex gap-2">
                        <Phone /> +7 (123) 456-78-90
                    </div>
                </a>
                <Dialog className="w-100">
                    <DialogTrigger className="bg-blue-400 text-white p-2 rounded hover:bg-green-700 duration-300 cursor-pointer">
                        Заказать звонок
                    </DialogTrigger>
                    <DialogContent className="md:max-w-1/3">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                Закажите звонок прямо сейчас
                            </DialogTitle>
                            <DialogDescription>
                                И мы перезвоним вам всего через 5 минут!
                            </DialogDescription>
                        </DialogHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="почта@example.com"
                                            required
                                        />
                                        <Label htmlFor="phone">Телефон</Label>
                                        <Input
                                            id="phone"
                                            type="phone"
                                            placeholder="+7 (123) 456-78-90"
                                            required
                                        />
                                    </div>
                                    <Field>
                                        <FieldLabel htmlFor="textarea-message">
                                            Комментарий
                                        </FieldLabel>
                                        <FieldDescription>
                                            Напишите подробнее про ремонт
                                        </FieldDescription>
                                        <Textarea
                                            id="textarea-message"
                                            placeholder="Писать тут"
                                            className="max-h-60"
                                        />
                                    </Field>
                                </div>
                                <FieldGroup className="mx-auto w-full my-5">
                                    <Field orientation="horizontal">
                                        <Checkbox
                                            id="terms-checkbox-dialog"
                                            name="terms-checkbox-dialog"
                                            required
                                        />
                                        <FieldLabel htmlFor="terms-checkbox-dialog">
                                            Я согласен с политикой
                                            конфиденциальности
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                        <Button
                            type="submit"
                            className="w-full cursor-pointer p-5"
                        >
                            Отправить
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    )
}
