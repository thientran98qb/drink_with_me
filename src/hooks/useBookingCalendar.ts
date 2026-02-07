import { useState } from "react";
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isWeekend
} from "date-fns";
import { vi } from "date-fns/locale";

export function useBookingCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [guestName, setGuestName] = useState("");
    const [menuType, setMenuType] = useState("bia-hoi");
    const [earlyDelivery, setEarlyDelivery] = useState(true);
    const [infiniteRefill, setInfiniteRefill] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Time selection state
    const [startTime, setStartTime] = useState(19.5);
    const [endTime, setEndTime] = useState("");

    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentMonth), { locale: vi }),
        end: endOfWeek(endOfMonth(currentMonth), { locale: vi }),
    });

    const isHot = (date: Date) => isWeekend(date);

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToToday = () => setCurrentMonth(new Date());

    return {
        currentMonth,
        setCurrentMonth,
        days,
        selectedDate,
        setSelectedDate,
        guestName,
        setGuestName,
        menuType,
        setMenuType,
        earlyDelivery,
        setEarlyDelivery,
        infiniteRefill,
        setInfiniteRefill,
        isSubmitting,
        handleSubmit,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        nextMonth,
        prevMonth,
        goToToday,
        isHot
    };
}
