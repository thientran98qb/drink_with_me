"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
}

export function BeerBubbles() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        // Generate bubbles only on client side to avoid hydration mismatch
        const newBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 20 + 10,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 10,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        initial={{
                            y: "110vh",
                            x: `${bubble.left}vw`,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.6, 0.6, 0],
                            scale: 1
                        }}
                        transition={{
                            duration: bubble.duration,
                            delay: bubble.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute rounded-full"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            background: "radial-gradient(circle at 30% 30%, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.05))",
                            boxShadow: "inset -2px -2px 6px rgba(255,255,255,0.1), 0 0 10px rgba(249,115,22,0.1)",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
