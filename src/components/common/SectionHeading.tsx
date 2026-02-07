interface SectionHeadingProps {
    icon?: string;
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeading({
    icon,
    title,
    subtitle,
    className = "",
}: SectionHeadingProps) {
    return (
        <div className={`mb-6 ${className}`}>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
                {icon && <span>{icon}</span>}
                {title}
            </h2>
            {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
        </div>
    );
}
