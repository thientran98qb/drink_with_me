import { Clock, Timer, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TimeSelectorProps {
    startTime: number;
    onStartTimeChange: (value: number) => void;
    endTime: string;
    onEndTimeChange: (value: string) => void;
}

export function TimeSelector({ startTime, onStartTimeChange, endTime, onEndTimeChange }: TimeSelectorProps) {
    const formatTime = (val: number) => {
        const hours = Math.floor(val);
        const minutes = (val % 1) * 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    return (
        <div className="border-t border-border pt-6 mt-auto">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Chọn giờ nhậu
            </h3>
            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-4">
                {[18, 20, 22].map(time => (
                    <button
                        key={time}
                        onClick={() => onStartTimeChange(time)}
                        className={cn(
                            "px-3 py-1.5 text-xs font-bold rounded-full border transition-all flex items-center gap-1 group cursor-pointer",
                            startTime === time
                                ? "bg-brand text-white border-brand shadow-md"
                                : "bg-muted hover:bg-muted/80 text-foreground border-transparent"
                        )}
                    >
                        {time}:00
                        <span className={cn("text-[10px] font-normal", startTime === time ? "text-white/80" : "text-muted-foreground")}>
                            {time === 18 ? "- Giờ cao điểm" : time === 20 ? "- Tăng 2" : "- Xuyên đêm"}
                        </span>
                    </button>
                ))}
            </div>

            {/* Slider */}
            <div className="relative mb-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Giờ bắt đầu: <strong className="text-brand text-sm">{formatTime(startTime)}</strong></span>
                    {startTime >= 19 && (
                        <span className="text-orange-500 font-bold flex items-center gap-1 text-[10px]">
                            <Sparkles className="w-3 h-3" />
                            Giờ này dễ say
                        </span>
                    )}
                </div>
                <input
                    type="range"
                    min={17}
                    max={24}
                    step={0.5}
                    value={startTime}
                    onChange={(e) => onStartTimeChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand"
                />
            </div>

            {/* End Time */}
            <div className="relative">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Dự kiến kết thúc</label>
                <div className="relative">
                    <Input
                        value={endTime}
                        onChange={(e) => onEndTimeChange(e.target.value)}
                        placeholder="Đến khi gục / Vợ gọi"
                        className="pl-4 pr-10"
                    />
                    <Timer className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
            </div>
        </div>
    );
}
