import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck, Beer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date | null;
}

export function BookingModal({ isOpen, onClose, selectedDate }: BookingModalProps) {
    if (!selectedDate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed bottom-6 right-6 max-w-sm w-full bg-card rounded-3xl shadow-2xl border border-border overflow-hidden z-50 origin-bottom-right"
                >
                    <div className="bg-brand p-4 flex items-center justify-between text-white">
                        <h3 className="font-bold text-lg">Chốt Kèo Này</h3>
                        <button onClick={onClose} className="text-white/80 hover:text-white cursor-pointer">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3 p-3 bg-success/10 rounded-xl border border-success/20">
                            <CalendarCheck className="h-6 w-6 text-success" />
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase">Ngày đã chọn</p>
                                <p className="font-bold text-foreground capitalize">{format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: vi })}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Tên thánh nhậu</label>
                                <input className="w-full rounded-xl border-border bg-muted px-4 py-3 text-sm focus:border-brand focus:ring-brand outline-none" placeholder="Để lại danh tính..." type="text" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Gu uống</label>
                                <select className="w-full rounded-xl border-border bg-muted px-4 py-3 text-sm focus:border-brand focus:ring-brand outline-none">
                                    <option>Bia thủ công (Sang chảnh)</option>
                                    <option>Bia hơi vỉa hè (Rẻ)</option>
                                    <option>Cồn là được</option>
                                </select>
                            </div>
                        </div>
                        <Button className="w-full py-6 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl mt-2 shadow-lg shadow-brand/30 transition-all flex items-center justify-center gap-2 cursor-pointer">
                            <span>Chốt đơn</span>
                            <Beer className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
