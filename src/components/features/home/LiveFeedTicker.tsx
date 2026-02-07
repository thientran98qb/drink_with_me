"use client";

import { motion } from "framer-motion";
import { mockLiveFeed } from "@/lib/mock-data";
import { Trophy } from "lucide-react";

export function LiveFeedTicker() {
    // Duplicate items for seamless loop
    const items = [...mockLiveFeed, ...mockLiveFeed, ...mockLiveFeed];

    return (
        <div className="mb-8 w-full overflow-hidden rounded-full border border-gray-200 bg-white py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center px-4">
                <div className="flex shrink-0 items-center gap-2 whitespace-nowrap pr-4">
                    <Trophy className="h-4 w-4 text-brand" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">Live Feed:</span>
                </div>

                <div className="relative flex flex-1 overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {items.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex items-center">
                                <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <span
                                        className={`h-2 w-2 rounded-full ${item.type === "accept"
                                            ? "bg-green-500"
                                            : item.type === "reject"
                                                ? "bg-red-500"
                                                : "bg-blue-500"
                                            }`}
                                    />
                                    {item.message}
                                </span>
                                <span className="mx-4 text-slate-300 dark:text-slate-600">|</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
