import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "./LeadForm";

interface LeadDialogProps {
  triggerLabel: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
}

export function LeadDialog({
  triggerLabel,
  triggerClassName = "btn-accent inline-flex h-12 items-center justify-center rounded-xl px-6 text-base font-semibold",
  title = "Записаться на консультацию",
  description = "Оставьте контакты — расскажем, как проходят уроки, поможем выбрать тариф и зафиксируем цену на новый учебный год.",
  submitLabel = "Записаться",
}: LeadDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>{triggerLabel}</DialogTrigger>
      <DialogContent className="rounded-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <LeadForm submitLabel={submitLabel} />
      </DialogContent>
    </Dialog>
  );
}
