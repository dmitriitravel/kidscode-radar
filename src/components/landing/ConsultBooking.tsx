import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

// «Узнайте больше о школе на бесплатной консультации» — баннер с маскотом + чеклист + форма.
const ASSET = "https://static.tildacdn.com";
const CHIKA_PC = `${ASSET}/tild3530-6262-4035-b330-396135353438/chika.png`;
const CHIKA_MOB = `${ASSET}/tild3361-6433-4133-b630-363165663636/chika.png`;
const SPARKLE = `${ASSET}/tild3665-3763-4632-b962-323933646639/Sparcle.png`;

const BENEFITS = [
  "Покажем, как проходят уроки на нашей платформе",
  "Поможем выбрать тариф и разобраться с документами",
  "Откроем бесплатный доступ, чтобы вы могли всё попробовать сами",
];

const GRADES = [5, 6, 7, 8, 9, 10, 11].map((g) => `${g} класс`);

export function ConsultBooking() {
  const [grade, setGrade] = useState("");

  return (
    <section aria-labelledby="consult-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-white">
          <div className="flex justify-center bg-[#faf7ff]">
            <picture>
              <source media="(min-width:768px)" srcSet={CHIKA_PC} />
              <img
                src={CHIKA_MOB}
                alt=""
                aria-hidden="true"
                width={2320}
                height={506}
                loading="lazy"
                decoding="async"
                className="h-[120px] w-full object-cover object-center sm:h-[180px]"
              />
            </picture>
          </div>

          <div className="p-6 sm:p-10">
            <h2 id="consult-title" className="text-3xl font-bold leading-tight sm:text-4xl">
              Узнайте больше о школе на бесплатной консультации
            </h2>

            <ul className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <img src={SPARKLE} alt="" aria-hidden="true" width={24} height={24} loading="lazy" className="h-6 w-6 shrink-0" />
                  <span className="text-base leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                  aria-hidden="true"
                >
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </span>
                <div>
                  <p className="font-semibold">Рады видеть вас снова!</p>
                  <p className="text-muted-foreground">Начните учиться на выгодных условиях</p>
                </div>
              </div>

              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Спасибо! Запишем вас на консультацию.");
                }}
              >
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  aria-label="Класс"
                  required
                  className="h-12 rounded-xl border-0 bg-[#f4f4f6] px-4 text-base text-foreground sm:w-44"
                >
                  <option value="" disabled>
                    Класс
                  </option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="btn-accent inline-flex h-12 items-center justify-center rounded-xl px-7 text-base font-semibold"
                >
                  Записаться на консультацию
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
