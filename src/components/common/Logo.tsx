import { Beer } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2", className)}>
            <Beer className="h-6 w-6 text-brand" />
            <span className="text-xl font-bold">
                DrinkWithMe<span className="text-brand">.dev</span>
            </span>
        </Link>
    );
}
