import { cn } from "@/lib/utils";
import { getDate, isSameMonth, isToday } from "date-fns";
import { getDayStatus } from "@/hooks/useScheduleCalendar"; // We import the helper from the hook file or move helper to utils
import { DayStatus } from "@/hooks/useScheduleCalendar";

// Note: Ensure getDayStatus is exported from the hook file or moved to a utils file.
// For now assuming it is exported from the hook file.

interface ScheduleCalendarGridProps {
    days: Date[];
    currentMonth: Date;
    onDateClick: (date: Date) => void;
}

export function ScheduleCalendarGrid({ days, currentMonth, onDateClick }: ScheduleCalendarGridProps) {
    // Corrected week start: Mon -> Sun (T2 -> CN)
    const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    return (
        <div className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-border bg-muted/30">
                {weekDays.map((day) => (
                    <div key={day} className="py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wide sm:tracking-widest">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 auto-rows-fr bg-muted gap-px border-b border-border">
                {days.map((date) => (
                    <DayCell
                        key={date.toString()}
                        date={date}
                        currentMonth={currentMonth}
                        onClick={() => onDateClick(date)}
                    />
                ))}
            </div>
        </div>
    );
}

function DayCell({ date, currentMonth, onClick }: { date: Date, currentMonth: Date, onClick: () => void }) {
    const status = getDayStatus(date);
    const isCurrentMonth = isSameMonth(date, currentMonth);
    const isTodayDate = isToday(date);

    return (
        <div
            className={cn(
                "min-h-[80px] sm:min-h-[100px] md:min-h-[140px] p-1.5 sm:p-2 md:p-3 flex flex-col transition-colors relative",
                isCurrentMonth ? "bg-card hover:bg-muted/30" : "bg-card/50 hover:bg-card/60",
                isTodayDate && "ring-2 ring-inset ring-brand/50"
            )}
        >
            <span
                className={cn(
                    "w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold rounded-full mb-0.5 sm:mb-1",
                    isTodayDate ? "bg-brand text-white" : "text-foreground",
                    !isCurrentMonth && "text-muted-foreground opacity-50"
                )}
            >
                {getDate(date)}
            </span>

            {isCurrentMonth && status && (
                <StatusContent status={status} onClick={onClick} />
            )}
        </div>
    );
}

function StatusContent({ status, onClick }: { status: NonNullable<DayStatus>, onClick: () => void }) {
    if (status.type === 'wife') {
        return (
            <>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%,rgba(0,0,0,0.03)_100%)] bg-[length:20px_20px] pointer-events-none"></div>
                <div className="flex-1 flex flex-col gap-1 sm:gap-1.5 relative z-10 mt-1 sm:mt-2">
                    <div className="px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                        <div className="flex items-center gap-1 sm:gap-1.5 text-red-600 dark:text-red-400">
                            <status.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold leading-tight">{status.label}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex-1 flex flex-col gap-1 sm:gap-1.5">
            {status.type === 'free' || status.type === 'maybe' ? (
                <button
                    onClick={onClick}
                    className={cn(
                        "w-full text-left px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border hover:scale-[1.02] active:scale-95 transition-all cursor-pointer",
                        status.type === 'free'
                            ? "bg-success/10 border-success/30 hover:bg-success/20"
                            : "bg-warning/10 border-warning/30 hover:bg-warning/20"
                    )}
                >
                    <div className={cn("flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1",
                        status.type === 'free' ? "text-green-700 dark:text-green-400" : "text-yellow-700 dark:text-yellow-500"
                    )}>
                        <status.icon className={cn("h-3 w-3 sm:h-4 sm:w-4", status.type === 'free' && "animate-pulse")} />
                        <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide">
                            {status.type === 'free' ? 'Rảnh' : 'Hên xui'}
                        </span>
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-bold leading-tight text-foreground">{status.label}</p>
                </button>
            ) : (
                <div className={cn(
                    "px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border opacity-80",
                    status.type === 'maintenance' ? "bg-muted border-border" : "bg-brand/10 border-brand/30"
                )}>
                    <div className={cn("flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1",
                        status.type === 'maintenance' ? "text-muted-foreground" : "text-brand"
                    )}>
                        <status.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wide">
                            {status.type === 'maintenance' ? 'Bảo trì' : (status.type === 'busy' ? 'Bận' : 'Nhậu')}
                        </span>
                    </div>
                    <p className={cn("text-[10px] sm:text-xs md:text-sm font-bold leading-tight text-foreground", status.type === 'busy' && "line-through")}>
                        {status.label}
                    </p>
                </div>
            )}
        </div>
    );
}
