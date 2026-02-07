import { CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function BookingHeader() {
    return (
        <CardHeader className="pb-2 p-2 sm:p-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                Đặt kèo nhậu
                <Sparkles className="h-5 w-5 text-warning animate-pulse" />
            </CardTitle>
            <p className="text-sm text-muted-foreground">
                Điền form bên dưới để book lịch. Từ chối kèo mồm.
            </p>
        </CardHeader>
    );
}
