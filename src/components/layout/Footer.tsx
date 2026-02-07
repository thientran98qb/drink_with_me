import { Container } from "@/components/common/Container";
import { FOOTER_TEXT } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-8">
            <Container>
                <p className="text-center text-sm text-muted-foreground">
                    {FOOTER_TEXT}
                </p>
            </Container>
        </footer>
    );
}
