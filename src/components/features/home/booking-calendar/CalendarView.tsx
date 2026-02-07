import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    format,
    isSameMonth,
    isSameDay,
    getDate,
    isBefore,
    startOfToday,
    isWeekend
} from "date-fns";
import { vi } from "date-fns/locale";

const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

interface CalendarViewProps {
    currentMonth: Date;
    days: Date[];
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
    onNextMonth: () => void;
    onPrevMonth: () => void;
    onGoToToday: () => void;
}

export function CalendarView({
    currentMonth,
    days,
    selectedDate,
    onDateSelect,
    onNextMonth,
    onPrevMonth,
    onGoToToday
}: CalendarViewProps) {
    const isHot = (date: Date) => isWeekend(date);

    return (
        <div className="flex flex-col h-full">
            {/* Header Controls */}
            <div className="mb-4 flex items-center justify-between">
                <Button onClick={onPrevMonth} variant="ghost" size="icon" className="cursor-pointer hover:bg-muted/50 rounded-full">
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex flex-col items-center">
                    <span className="font-bold text-lg capitalize">{format(currentMonth, 'MMMM yyyy', { locale: vi })}</span>
                    {!isSameMonth(currentMonth, new Date()) && (
                        <button
                            onClick={onGoToToday}
                            className="text-[10px] font-bold text-brand hover:underline cursor-pointer animate-in fade-in zoom-in"
                        >
                            Về hôm nay
                        </button>
                    )}
                </div>

                <Button onClick={onNextMonth} variant="ghost" size="icon" className="cursor-pointer hover:bg-muted/50 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1 text-center text-sm font-medium text-muted-foreground">
                {DAYS.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days.map((date) => {
                    const isCurrentMonth = isSameMonth(date, currentMonth);
                    const isDisabled = isBefore(date, startOfToday());
                    const isSelectedDay = selectedDate && isSameDay(date, selectedDate);
                    const isHotDay = isHot(date);

                    return (
                        <motion.button
                            key={date.toString()}
                            disabled={!isCurrentMonth || isDisabled}
                            onClick={() => onDateSelect(date)}
                            whileHover={(!isCurrentMonth || isDisabled) ? {} : { scale: 1.1 }}
                            whileTap={(!isCurrentMonth || isDisabled) ? {} : { scale: 0.95 }}
                            className={`relative flex aspect-square w-full items-center justify-center rounded-lg text-sm transition-colors ${!isCurrentMonth
                                    ? "opacity-0 pointer-events-none" // Hide days outside month
                                    : isDisabled
                                        ? "opacity-30 cursor-not-allowed bg-muted"
                                        : isSelectedDay
                                            ? "bg-brand text-white font-semibold shadow-lg"
                                            : isHotDay
                                                ? "bg-hot/10 text-hot font-medium hover:bg-hot/20"
                                                : "hover:bg-muted"
                                } ${(!isCurrentMonth || isDisabled) ? "" : "cursor-pointer"}`}
                        >
                            {getDate(date)}
                            {isCurrentMonth && isHotDay && !isSelectedDay && !isDisabled && (
                                <span className="absolute -right-1 -top-1 rounded-full bg-hot px-1.5 text-[10px] font-bold text-white">
                                    HOT
                                </span>
                            )}
                        </motion.button>
                    );
                })}
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-brand" />
                    <span className="text-muted-foreground">Đang chọn</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-hot" />
                    <span className="text-muted-foreground">Cuối tuần (Hot)</span>
                </div>
            </div>
        </div>
    );
}
