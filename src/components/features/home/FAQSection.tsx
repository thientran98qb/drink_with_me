"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { mockFAQs } from "@/lib/mock-data";

export function FAQSection() {
    return (
        <section id="faq" className="py-12 scroll-mt-28">
            <FadeInUp>
                <SectionHeading icon="❓" title="Hỏi xoáy đáp xoay" />
            </FadeInUp>

            <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.1}>
                {mockFAQs.map((faq, index) => (
                    <StaggerItem key={index}>
                        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                            <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <p className="mb-2 font-semibold text-foreground">Q: {faq.question}</p>
                                    <p className="text-muted-foreground">A: {faq.answer}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
