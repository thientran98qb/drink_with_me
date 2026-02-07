"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FullPageLoader } from "@/components/common/FullPageLoader";

export default function Template({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    // Minimum display time for loader to prevent flashing
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // 800ms minimum display time
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        // Using a high z-index div to ensure proper exit animation containment
                        className="relative z-[100]"
                    >
                        <FullPageLoader />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
                {children}
            </motion.div>
        </>
    );
}
