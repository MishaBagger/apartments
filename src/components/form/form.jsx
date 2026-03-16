'use client'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '../ui/field'
import { Checkbox } from '../ui/checkbox'

export default function Form() {
    return (
        <Card className="w-full max-w-md mx-auto my-10">
            <CardHeader>
                <CardTitle className="text-center text-2xl">
                    Запишитесь к нам
                </CardTitle>
                <CardDescription>
                    Напишите адрес электронной почты и номер телефона, и мы
                    свяжемся с Вами в течение 5 минут
                </CardDescription>
            </CardHeader>
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
                                id="terms-checkbox-basic"
                                name="terms-checkbox-basic"
                            />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Я согласен с политикой конфиденциальности
                            </FieldLabel>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer p-5">
                    Отправить
                </Button>
            </CardFooter>
        </Card>
    )
}
