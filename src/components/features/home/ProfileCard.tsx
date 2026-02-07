"use client";

import { motion } from "framer-motion";
import { Star, AlertTriangle, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInUp } from "@/components/motion";
import { mockUser } from "@/lib/mock-data";

export function ProfileCard() {
    const progressPercentage = 90;

    return (
        <FadeInUp delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="relative overflow-hidden group shadow-xl border-gray-100 dark:border-gray-700">
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                        <div className="flex items-center gap-1 rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800 dark:border-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-200">
                            <Sparkles className="h-3 w-3" />
                            <span>Tháng này: 42 ly</span>
                        </div>
                    </div>

                    <CardContent className="p-6">
                        {/* User info */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    <Avatar className="h-20 w-20 border-4 border-[#fef3c7] dark:border-gray-600">
                                        <AvatarImage src={mockUser.avatar} alt={mockUser.displayName} className="object-cover" />
                                        <AvatarFallback className="bg-brand text-white text-xl">
                                            {mockUser.displayName.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                </motion.div>
                                <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 animate-bounce dark:bg-gray-800">
                                    <Sparkles className="h-4 w-4 text-brand" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {mockUser.displayName}
                                </h3>
                                <p className="text-sm text-slate-500">@{mockUser.username}</p>
                                <div className="mt-1 flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-4 w-4 ${star <= Math.floor(mockUser.rating)
                                                ? "fill-[#eab308] text-[#eab308]"
                                                : "text-muted"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Level and progress */}
                        <div className="space-y-4 mb-6">
                            <div className="flex items-end justify-between">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                    Level: <span className="">{mockUser.level}</span>
                                </span>
                                <span className="text-xs font-bold text-red-500 animate-pulse">
                                    Warning: System Overheating ({progressPercentage}%)
                                </span>
                            </div>

                            <div className="relative h-6 w-full overflow-hidden rounded-full border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                                <div className="absolute inset-0 flex items-center justify-end rounded-full bg-gradient-to-r from-orange-400 via-brand to-red-600 pr-2 shadow-[0_0_10px_rgba(244,89,37,0.5)] w-[90%]">
                                    <span className="mr-1 text-[10px] font-bold text-white drop-shadow-md">Sắp sập</span>
                                    <AlertTriangle className="h-3 w-3 text-white animate-spin" />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 dark:border-orange-800 dark:bg-orange-900/20 dark:text-orange-300">Lẩu lòng</span>
                                <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 dark:border-orange-800 dark:bg-orange-900/20 dark:text-orange-300">Bò nướng tảng</span>
                                <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 dark:border-orange-800 dark:bg-orange-900/20 dark:text-orange-300">Craft Beer</span>
                                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">No Bugs allowed</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </FadeInUp>
    );
}
