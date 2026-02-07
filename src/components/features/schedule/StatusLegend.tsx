import { CheckCircle2, AlertTriangle, MinusCircle } from "lucide-react";

export function StatusLegend() {
    return (
        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <div className="flex flex-col p-3 sm:p-4 bg-card border border-border rounded-2xl flex-1 min-w-[110px] sm:min-w-[140px] shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-success/20 text-success flex items-center justify-center mb-1.5 sm:mb-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase">Rảnh</span>
                <span className="font-bold text-xs sm:text-sm leading-tight">Chờ mồi bén</span>
            </div>
            <div className="flex flex-col p-3 sm:p-4 bg-card border border-border rounded-2xl flex-1 min-w-[110px] sm:min-w-[140px] shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-warning/20 text-warning flex items-center justify-center mb-1.5 sm:mb-2">
                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase">Hên xui</span>
                <span className="font-bold text-xs sm:text-sm leading-tight">Đang xem xét</span>
            </div>
            <div className="flex flex-col p-3 sm:p-4 bg-card border border-border rounded-2xl flex-1 min-w-[110px] sm:min-w-[140px] shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand/20 text-brand flex items-center justify-center mb-1.5 sm:mb-2">
                    <MinusCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase">Bận</span>
                <span className="font-bold text-xs sm:text-sm leading-tight">Đã có kèo</span>
            </div>
        </div>
    );
}
