"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { mockLeaderboard } from "@/lib/mock-data";

export function Leaderboard() {
    return (
        <FadeInUp delay={0.3}>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Card id="leaderboard" className="scroll-mt-28">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <span>🍺</span>
                                BXH THẦN CỒN
                                <TrendingUp className="h-4 w-4 text-success" />
                            </CardTitle>
                            <span className="text-sm text-muted-foreground">Tháng 10</span>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                            {mockLeaderboard.map((entry) => (
                                <StaggerItem key={entry.user.id}>
                                    <motion.div
                                        whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.02)" }}
                                        className="flex items-center gap-3 rounded-lg p-2 cursor-pointer transition-colors"
                                    >
                                        <span
                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold ${entry.rank === 1
                                                ? "bg-warning/20 text-warning"
                                                : entry.rank === 2
                                                    ? "bg-muted text-muted-foreground"
                                                    : "bg-brand/10 text-brand"
                                                }`}
                                        >
                                            {entry.rank}
                                        </span>

                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={entry.user.avatar} alt={entry.user.displayName} />
                                            <AvatarFallback className="bg-brand/20 text-brand">
                                                {entry.user.displayName.charAt(1)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex-1">
                                            <p className="font-semibold">{entry.user.displayName}</p>
                                            <p className="text-sm text-muted-foreground">{entry.description}</p>
                                        </div>

                                        {entry.isTrophy && (
                                            <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                                                <Trophy className="h-5 w-5 text-warning" />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </CardContent>
                </Card>
            </motion.div>
        </FadeInUp>
    );
}
