"use client";

import { Container, BeerBubbles, ScrollToTop } from "@/components/common";
import { Header, Footer } from "@/components/layout";
import { useScheduleCalendar } from "@/hooks/useScheduleCalendar";
import { ScheduleHero } from "@/components/features/schedule/ScheduleHero";
import { StatusLegend } from "@/components/features/schedule/StatusLegend";
import { CalendarControls } from "@/components/features/schedule/CalendarControls";
import { ScheduleCalendarGrid } from "@/components/features/schedule/ScheduleCalendarGrid";
import { BookingModal } from "@/components/features/schedule/BookingModal";

export default function SchedulePage() {
    const {
        currentMonth,
        days,
        selectedDate,
        isModalOpen,
        nextMonth,
        prevMonth,
        goToToday,
        handleDateClick,
        closeModal
    } = useScheduleCalendar();

    return (
        <>
            <BeerBubbles />
            <Header />
            <ScrollToTop />

            <div className="relative flex min-h-screen flex-col bg-background">
                <div className="h-16" />

                <main className="relative z-10 flex-1">
                    <Container className="py-8 sm:py-12 flex flex-col gap-8">
                        {/* Hero & Legend */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
                            <ScheduleHero />
                            <StatusLegend />
                        </div>

                        {/* Calendar Controls */}
                        <CalendarControls
                            currentMonth={currentMonth}
                            onNext={nextMonth}
                            onPrev={prevMonth}
                            onToday={goToToday}
                        />

                        {/* Calendar Grid */}
                        <ScheduleCalendarGrid
                            days={days}
                            currentMonth={currentMonth}
                            onDateClick={handleDateClick}
                        />
                    </Container>
                </main>

                <Footer />
            </div>

            {/* Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDate={selectedDate}
            />
        </>
    );
}
