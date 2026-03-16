'use client'
import { motion } from 'framer-motion'
import { Drill, HandCoins } from 'lucide-react'

export default function Grid() {
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
            className="container w-2xl h-1/3 grid grid-cols-2 gap-5"
        >
            <div className="flex items-center gap-2 text-white">
                <HandCoins className="w-20 h-20 " />
                <p className="text-xl text-shadow-lg">
                    Ремонт от 900 ₽/м², с работой, уборкой и гарантией
                </p>
            </div>
            <div className="flex items-center gap-2 text-white">
                <Drill className="w-20 h-20" />
                <p className="text-xl text-shadow-lg">
                    Оплата по принятию каждого этапа работ, возможна рассрочка
                </p>
            </div>
        </motion.div>
    )
}
