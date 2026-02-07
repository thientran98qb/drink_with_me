"use client";

import { motion } from "framer-motion";
import { APP_TAGLINE, APP_DESCRIPTION } from "@/lib/constants";

export function HeroSection() {
    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 px-3 py-1 animate-pulse"
            >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]"></span>
                </span>
                <span className="text-xs font-bold text-[#10b981] uppercase tracking-wider">🍻 Sẵn sàng lên kèo!</span>
            </motion.div>

            <motion.h1
                className="mb-6 text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Bạn muốn nhậu? <br />
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-brand to-warning bg-clip-text text-transparent"
                >
                    Đặt lịch với tôi ngay!
                </motion.span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-md text-lg font-normal text-muted-foreground"
            >
                {APP_TAGLINE}. {APP_DESCRIPTION}
            </motion.p>
        </section>
    );
}
