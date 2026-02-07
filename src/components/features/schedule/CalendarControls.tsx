import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface CalendarControlsProps {
    currentMonth: Date;
    onPrev: () => void;
    onNext: () => void;
    onToday: () => void;
}

export function CalendarControls({ currentMonth, onPrev, onNext, onToday }: CalendarControlsProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card p-4 rounded-3xl shadow-sm border border-border">
            <div className="flex items-center gap-4">
                <Button onClick={onPrev} variant="ghost" size="icon" className="rounded-full hover:bg-muted cursor-pointer">
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold w-32 sm:w-40 md:w-48 text-center capitalize">{format(currentMonth, 'MMMM yyyy', { locale: vi })}</h3>
                <Button onClick={onNext} variant="ghost" size="icon" className="rounded-full hover:bg-muted cursor-pointer">
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
            <div className="flex gap-2">
                <Button className="bg-brand text-white font-bold rounded-full shadow-md shadow-brand/30 hover:bg-brand-dark cursor-pointer">Tháng</Button>
                <Button onClick={onToday} variant="ghost" className="rounded-full hover:bg-muted font-medium cursor-pointer">Hôm nay</Button>
            </div>
        </div>
    );
}
