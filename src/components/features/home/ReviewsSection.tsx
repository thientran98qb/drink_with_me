"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { mockReviews } from "@/lib/mock-data";

export function ReviewsSection() {
    return (
        <section className="py-12">
            <FadeInUp>
                <SectionHeading title="REVIEWS TỪ ĐỒNG NHẬU" />
            </FadeInUp>

            <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.15}>
                {mockReviews.map((review) => (
                    <StaggerItem key={review.id}>
                        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                            <Card className="border-l-4 border-l-brand h-full cursor-pointer hover:shadow-lg transition-shadow overflow-hidden relative">
                                <Quote className="absolute top-4 right-4 h-8 w-8 text-brand/10" />

                                <CardContent className="p-6">
                                    <p className="mb-4 italic text-muted-foreground relative z-10">
                                        &ldquo;{review.content}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className="bg-brand/20 text-brand font-semibold">
                                                {review.authorAvatar || review.authorName.charAt(1).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <p className="font-semibold">{review.authorName}</p>
                                            {review.authorTitle && (
                                                <p className="text-sm text-muted-foreground">{review.authorTitle}</p>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
