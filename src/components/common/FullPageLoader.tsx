"use client";

import { motion } from "framer-motion";
import { Beer } from "lucide-react";

export function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {/* Beer animation */}
                <div className="relative w-24 h-24 mb-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-4 border-muted border-t-brand"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Beer className="w-10 h-10 text-brand animate-bounce" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
