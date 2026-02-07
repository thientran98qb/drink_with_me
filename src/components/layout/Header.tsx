"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    // Close mobile menu when clicking outside or pressing escape
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                    isScrolled
                        ? "border-b border-border/40 bg-background/80 backdrop-blur-md py-2 shadow-sm"
                        : "bg-transparent py-4 border-transparent"
                )}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="hover:rotate-[-2deg] transition-transform duration-300 cursor-pointer">
                            <Logo />
                        </div>

                        <nav className="hidden items-center gap-8 md:flex">
                            {NAV_LINKS.map((link) => (
                                <div key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand relative group cursor-pointer"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <Button className="bg-brand hover:bg-brand-dark hidden sm:flex shadow-lg shadow-brand/30 rounded-full px-6 cursor-pointer hover:scale-105 transition-transform active:scale-95">
                                <CalendarDays className="mr-2 h-4 w-4" />
                                Đặt lịch ngay
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 z-[101] w-[80%] max-w-sm bg-background border-l border-border shadow-2xl transition-transform duration-300 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <Logo />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Menu Content */}
                    <nav className="flex-1 overflow-y-auto p-6">
                        <div className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-brand transition-colors py-3 px-4 rounded-lg hover:bg-accent cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Menu Footer */}
                    <div className="p-6 border-t border-border">
                        <Button className="w-full bg-brand hover:bg-brand-dark shadow-lg shadow-brand/30 rounded-full cursor-pointer hover:scale-105 transition-transform active:scale-95">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Đặt lịch ngay
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
