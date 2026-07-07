import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

// Поп-ап «Подробный состав тарифов» — сравнительная таблица с раскрывающимися пунктами.
const TARIFFS = ["Стандарт", "Оптимум", "ИТ-профиль", "Премиум"];

// Цвета «галочки» по тарифам: Стандарт — серый, далее розовый / оранжевый / фиолетовый.
const PILL: { bg: string; fg: string }[] = [
  { bg: "#eceef1", fg: "#6b7280" },
  { bg: "#ff64b0", fg: "#ffffff" },
  { bg: "#ff9e00", fg: "#ffffff" },
  { bg: "linear-gradient(135deg,#a86bf0,#5a23a0)", fg: "#ffffff" },
];

type Row = { t: string; d: string; v: [number, number, number, number] };

const ROWS: Row[] = [
  { t: "Уроки в формате вебинаров", d: "Ученики решают задания и сразу получают оценку. Преподаватель по ходу корректирует сложность заданий, опираясь на результаты класса. Можно писать вопросы в чате. Уроки ведут педагоги из ведущих школ России, эксперты ЕГЭ, победители профильных конкурсов", v: [1, 1, 1, 1] },
  { t: "Домашние задания с автопроверкой", d: "Как только ученик завершает тест, оценка выставляется автоматически. Задания составлены по материалам урока", v: [1, 1, 1, 1] },
  { t: "Проверка письменных работ", d: "Ученик пишет задание от руки на бумаге и загружает фото на платформу. Учитель проверяет, указывает на ошибки и даёт рекомендации по исправлению", v: [0, 1, 1, 1] },
  { t: "Прикрепление к школе и аттестация", d: "Ученик прикрепляется к школе-партнёру и проходит онлайн-аттестацию по итогам года. Ученики 9-го и 11-го классов могут сдать экзамены очно в школе, к которой они прикреплены, и получить на руки аттестат", v: [0, 1, 1, 1] },
  { t: "Библиотека материалов", d: "Теория, определения, формулы — всё необходимое для быстрой подготовки к контрольным и аттестациям", v: [1, 1, 1, 1] },
  { t: "Письменная обратная связь от классного руководителя", d: "Он следит за посещаемостью и оценками. Если ребёнок теряет мотивацию, родитель узнаёт об этом первым. В чате можно задавать вопросы про учёбу", v: [1, 1, 1, 1] },
  { t: "Встречи с классным руководителем", d: "Классный руководитель готовит отчёт об успехах и трудностях ученика и проводит встречу для обсуждения с семьёй", v: [0, 1, 1, 1] },
  { t: "Встречи с экспертами", d: "Ученики общаются с представителями разных профессий: дизайнерами, шеф-поварами, программистами. На встречах можно задать вопросы и получить план, как войти в профессию и развиваться в ней", v: [1, 1, 1, 1] },
  { t: "Встречи с нейропсихологом", d: "Сессии с нейропсихологом в течение года помогают выстроить обучение с учётом особенностей ребёнка", v: [0, 0, 1, 1] },
  { t: "Автоматические отчёты для родителей", d: "Раз в неделю на почту приходит отчёт: какие вебинары посетил ребёнок, какие оценки получил за активность на уроке и домашнюю работу", v: [1, 1, 1, 1] },
  { t: "Кружки и мастер-классы", d: "Дополнительные занятия для всестороннего развития. Бывают регулярными (математические и физические лаборатории, филологический клуб, кружок программирования и разговорный английский) и тематическими (по фотографии, дебатам и др.) Чтобы попасть на занятие, нужно записаться на ближайшую дату", v: [1, 1, 1, 1] },
  { t: "Уроки в мини-группах", d: "В группах — до 12 человек. Ученики занимаются с камерой и микрофоном, задают вопросы и обсуждают задания с одноклассниками", v: [0, 1, 1, 1] },
  { t: "Индивидуальные уроки", d: "Формат занятий один на один с преподавателем. Подходит, чтобы нагнать программу или углубиться в предмет", v: [0, 0, 0, 1] },
  { t: "Углублённая программа", d: "Задания повышенной сложности и олимпиадного уровня. В профильных классах — больше часов по ключевым предметам для глубокого погружения в тему", v: [0, 0, 1, 0] },
];

function Pill({ i, on }: { i: number; on: boolean }) {
  if (!on) {
    return (
      <span className="flex h-7 w-11 items-center justify-center rounded-lg text-sm sm:w-14" style={{ backgroundColor: "#eceef1", color: "#aeb6bf" }}>
        ×
      </span>
    );
  }
  const c = PILL[i];
  return (
    <span className="flex h-7 w-11 items-center justify-center rounded-lg text-sm font-bold sm:w-14" style={{ background: c.bg, color: c.fg }}>
      ✓
    </span>
  );
}

const GRID = "grid grid-cols-[minmax(0,1fr)_repeat(4,2.75rem)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_repeat(4,3.5rem)] sm:gap-3";

export function TariffCompare({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({ 10: true });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:items-center"
      style={{ background: "rgba(9,30,42,0.72)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Подробный состав тарифов"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="max-h-[85vh] overflow-auto">
          <div className="min-w-[560px]">
            <div className={`sticky top-0 z-10 border-b border-border bg-white px-5 py-4 text-sm font-semibold sm:px-7 ${GRID}`}>
              <span className="text-muted-foreground">Наполнение</span>
              {TARIFFS.map((t) => (
                <span key={t} className="text-center text-[13px] leading-tight sm:text-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="px-5 sm:px-7">
              {ROWS.map((row, idx) => {
                const isOpen = !!openRows[idx];
                return (
                  <div key={row.t} className="border-b border-border/70 last:border-0">
                    <div
                      className={`cursor-pointer py-4 ${GRID}`}
                      onClick={() => setOpenRows((s) => ({ ...s, [idx]: !s[idx] }))}
                    >
                      <span className="flex items-start gap-2 pr-2">
                        <ChevronDown className={`mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        <span className="text-[15px] font-medium leading-snug">{row.t}</span>
                      </span>
                      {row.v.map((on, i) => (
                        <span key={i} className="flex justify-center">
                          <Pill i={i} on={!!on} />
                        </span>
                      ))}
                    </div>
                    {isOpen && (
                      <p className="-mt-1 pb-4 pl-7 pr-2 text-sm leading-snug text-muted-foreground">{row.d}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
