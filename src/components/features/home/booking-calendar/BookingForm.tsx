import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MENU_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface BookingFormProps {
    selectedDate: Date | null;
    startTime: number;
    guestName: string;
    onGuestNameChange: (val: string) => void;
    menuType: string;
    onMenuTypeChange: (val: string) => void;
    earlyDelivery: boolean;
    onEarlyDeliveryChange: (val: boolean) => void;
    infiniteRefill: boolean;
    onInfiniteRefillChange: (val: boolean) => void;
    isSubmitting: boolean;
    onSubmit: () => void;
}

export function BookingForm({
    selectedDate,
    startTime,
    guestName,
    onGuestNameChange,
    menuType,
    onMenuTypeChange,
    earlyDelivery,
    onEarlyDeliveryChange,
    infiniteRefill,
    onInfiniteRefillChange,
    isSubmitting,
    onSubmit
}: BookingFormProps) {
    const formatTime = (val: number) => {
        const hours = Math.floor(val);
        const minutes = (val % 1) * 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-4 bg-muted/30 p-4 rounded-xl h-fit">
            <div>
                <label className="mb-2 block text-sm font-medium uppercase text-muted-foreground">
                    Ngày đặt
                </label>
                <Input
                    value={selectedDate ? `${format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: vi })} - ${formatTime(startTime)}` : "Chưa chọn ngày"}
                    disabled
                    className={cn("bg-background font-bold capitalize", selectedDate ? "text-brand" : "text-muted-foreground")}
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium uppercase text-muted-foreground">
                    Tên bạn là gì?
                </label>
                <Input
                    placeholder="(Để tôi biết ai đặt)"
                    value={guestName}
                    onChange={(e) => onGuestNameChange(e.target.value)}
                    className="transition-shadow focus:shadow-md bg-background"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium uppercase text-muted-foreground">
                    Menu dự kiến
                </label>
                <Select value={menuType} onValueChange={onMenuTypeChange}>
                    <SelectTrigger className="w-full hover:border-brand transition-colors bg-background">
                        <SelectValue placeholder="Chọn menu" />
                    </SelectTrigger>
                    <SelectContent>
                        {MENU_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-3">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="early-delivery"
                        checked={earlyDelivery}
                        onCheckedChange={(checked) => onEarlyDeliveryChange(checked as boolean)}
                    />
                    <label htmlFor="early-delivery" className="text-sm cursor-pointer">
                        Cam kết đưa chữ &ldquo;thốt&rdquo; về tận nhà nếu sập.
                    </label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="infinite-refill"
                        checked={infiniteRefill}
                        onCheckedChange={(checked) => onInfiniteRefillChange(checked as boolean)}
                    />
                    <label htmlFor="infinite-refill" className="text-sm cursor-pointer">
                        Sẽ bao trọn gói nếu kéo quá ngon.
                    </label>
                </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
                <Button
                    className="w-full bg-brand hover:bg-brand-dark shadow-lg shadow-brand/30 cursor-pointer py-6 text-lg"
                    size="lg"
                    onClick={onSubmit}
                    disabled={isSubmitting || !selectedDate}
                >
                    <AnimatePresence mode="wait">
                        {isSubmitting ? (
                            <motion.span
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center"
                            >
                                <PartyPopper className="mr-2 h-5 w-5" />
                                Chốt kèo thành công! 🎉
                            </motion.span>
                        ) : (
                            <motion.span
                                key="default"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Chốt kèo ngay
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Button>
            </motion.div>

            <p className="text-center text-xs text-muted-foreground mt-4">
                Chúng tôi không chịu trách nhiệm nếu bạn say.
            </p>
        </div>
    );
}
