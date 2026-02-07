import { useState } from "react";
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isToday,
    getDate
} from "date-fns";
import { vi } from "date-fns/locale";
import { Activity, PartyPopper, MinusCircle, Hourglass, User, CheckCircle2 } from "lucide-react";

export type DayStatus = {
    type: 'maintenance' | 'busy' | 'maybe' | 'wife' | 'free';
    label: string;
    icon: any;
} | null;

export const getDayStatus = (date: Date): DayStatus => {
    const day = getDate(date);
    // Deterministic "random" status
    if (day === 1) return { type: 'maintenance', label: 'Bảo trì gan', icon: Activity };
    if (day === 4 || day === 12) return { type: 'busy', label: day === 12 ? 'Sinh nhật sếp' : 'Kèo thơm', icon: day === 12 ? PartyPopper : MinusCircle };
    if (day === 5 || day === 13) return { type: 'maybe', label: day === 13 ? 'Đi công tác?' : 'Đang xem xét', icon: Hourglass };
    if (day === 7 || day === 14 || day === 21 || day === 28) return { type: 'wife', label: 'Vợ gank', icon: User };
    if ([3, 6, 10, 15, 20, 25].includes(day)) return { type: 'free', label: day === 3 ? 'Chờ mồi bén' : 'Tìm đồng nhậu', icon: CheckCircle2 };
    return null;
};

export function useScheduleCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentMonth), { locale: vi }),
        end: endOfWeek(endOfMonth(currentMonth), { locale: vi }),
    });

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToToday = () => setCurrentMonth(new Date());

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return {
        currentMonth,
        days,
        selectedDate,
        isModalOpen,
        nextMonth,
        prevMonth,
        goToToday,
        handleDateClick,
        closeModal
    };
}
