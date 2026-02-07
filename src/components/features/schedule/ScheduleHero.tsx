import { Calendar } from "lucide-react";

export function ScheduleHero() {
    return (
        <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-brand w-fit">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Lịch Trình Công Khai</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter">
                Lịch Trình <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-warning">Say Xỉn</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
                Kiểm tra gan của tôi và đặt lịch. Xanh là rảnh, Đỏ là chịu. Vui lòng xin phép vợ tôi trước khi book 2 ngày liên tiếp.
            </p>
        </div>
    );
}
