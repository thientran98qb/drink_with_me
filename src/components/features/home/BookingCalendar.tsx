"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeInRight } from "@/components/motion";
import { useBookingCalendar } from "@/hooks/useBookingCalendar";
import { BookingHeader } from "./booking-calendar/BookingHeader";
import { CalendarView } from "./booking-calendar/CalendarView";
import { TimeSelector } from "./booking-calendar/TimeSelector";
import { BookingForm } from "./booking-calendar/BookingForm";

export function BookingCalendar() {
    const {
        currentMonth,
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
        goToToday
    } = useBookingCalendar();

    return (
        <FadeInRight delay={0.1}>
            <Card className="w-full glass scroll-mt-24 p-2 sm:p-4 gap-4" id="booking">

                <BookingHeader />

                <CardContent className="space-y-4 p-2 sm:p-4 pt-0">
                    <div className="grid gap-4 lg:grid-cols-2">
                        {/* Left Column: Calendar & Time Selection */}
                        <div className="flex flex-col h-full gap-4">
                            <CalendarView
                                currentMonth={currentMonth}
                                days={days}
                                selectedDate={selectedDate}
                                onDateSelect={setSelectedDate}
                                onNextMonth={nextMonth}
                                onPrevMonth={prevMonth}
                                onGoToToday={goToToday}
                            />

                            <TimeSelector
                                startTime={startTime}
                                onStartTimeChange={setStartTime}
                                endTime={endTime}
                                onEndTimeChange={setEndTime}
                            />
                        </div>

                        {/* Right Column: Booking Form */}
                        <BookingForm
                            selectedDate={selectedDate}
                            startTime={startTime}
                            guestName={guestName}
                            onGuestNameChange={setGuestName}
                            menuType={menuType}
                            onMenuTypeChange={setMenuType}
                            earlyDelivery={earlyDelivery}
                            onEarlyDeliveryChange={setEarlyDelivery}
                            infiniteRefill={infiniteRefill}
                            onInfiniteRefillChange={setInfiniteRefill}
                            isSubmitting={isSubmitting}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </CardContent>
            </Card>
        </FadeInRight>
    );
}
