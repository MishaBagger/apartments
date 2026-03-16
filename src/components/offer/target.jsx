'use client'
import { motion } from 'framer-motion'

export default function Target() {
    return (
        <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            // viewport={{ once: true }}
            className="bg-black/50 p-5 w-2xl rounded-sm"
        >
            <h1 className="sm:text-2xl xl:text-5xl font-antic text-blue-50">
                <span className="text-6xl font-bold">Качественный ремонт </span>
                <span className="text-yellow-200 font-inter font-bold">
                    квартир, домов и офисов{' '}
                </span>
                <span>любой сложности</span>
            </h1>
        </motion.div>
    )
}
