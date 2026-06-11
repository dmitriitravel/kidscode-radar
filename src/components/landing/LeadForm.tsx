import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { GRADE_OPTIONS } from "@/data/landing";
import { toast } from "sonner";

interface LeadFormProps {
  submitLabel: string;
  /** Тёмная подложка → светлый текст подсказок */
  inverted?: boolean;
}

export function LeadForm({ submitLabel, inverted = false }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [agreeData, setAgreeData] = useState(true);
  const [agreeAds, setAgreeAds] = useState(true);

  const noteClass = inverted
    ? "text-white/70"
    : "text-muted-foreground";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeData) {
      toast.error("Подтвердите согласие на обработку персональных данных");
      return;
    }
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setName("");
    setPhone("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        required
        placeholder="Ваше имя"
        aria-label="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 rounded-xl bg-white text-foreground"
      />
      <Input
        type="tel"
        required
        placeholder="Телефон"
        aria-label="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-12 rounded-xl bg-white text-foreground"
      />
      <Select value={grade} onValueChange={setGrade}>
        <SelectTrigger
          aria-label="Класс"
          className="h-12 rounded-xl bg-white text-foreground"
        >
          <SelectValue placeholder="Класс" />
        </SelectTrigger>
        <SelectContent>
          {GRADE_OPTIONS.map((g) => (
            <SelectItem key={g} value={g}>
              {g}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <button
        type="submit"
        className="btn-accent h-12 w-full rounded-xl text-base font-semibold"
      >
        {submitLabel}
      </button>

      <label className={`flex items-start gap-2 text-xs leading-snug ${noteClass}`}>
        <Checkbox
          checked={agreeData}
          onCheckedChange={(v) => setAgreeData(Boolean(v))}
          className="mt-0.5 bg-white"
        />
        <span>Даю согласие на обработку персональных данных</span>
      </label>
      <label className={`flex items-start gap-2 text-xs leading-snug ${noteClass}`}>
        <Checkbox
          checked={agreeAds}
          onCheckedChange={(v) => setAgreeAds(Boolean(v))}
          className="mt-0.5 bg-white"
        />
        <span>Соглашаюсь на получение рекламы</span>
      </label>
    </form>
  );
}
