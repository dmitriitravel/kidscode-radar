import { Fragment, useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

// «Узнайте больше о школе на бесплатной консультации» — баннер с маскотом + чеклист + форма (тёмная гамма).
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
    <section id="consult" aria-labelledby="consult-title" style={{ backgroundColor: "#f4f5f6" }} className="scroll-mt-24 py-14 sm:py-16">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl">
          <div className="flex justify-center bg-[#f4f5f6]">
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
                className="h-[110px] w-full object-contain object-bottom sm:h-[200px]"
              />
            </picture>
          </div>

          <div
            className="p-6 text-white sm:p-10"
            style={{ background: "linear-gradient(160deg,#181222 0%,#0d0a13 100%)" }}
          >
            <h2 id="consult-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
              Узнайте больше о школе на бесплатной консультации
            </h2>

            <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center">
              {BENEFITS.map((b, i) => (
                <Fragment key={b}>
                  <p className="flex-1 text-center text-base leading-snug text-white/90">{b}</p>
                  {i < BENEFITS.length - 1 && (
                    <img src={SPARKLE} alt="" aria-hidden="true" width={24} height={24} loading="lazy" className="hidden h-6 w-6 shrink-0 md:block" />
                  )}
                </Fragment>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3 lg:flex-1">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#ff9e00" }}
                  aria-hidden="true"
                >
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </span>
                <div>
                  <p className="font-semibold">Рады видеть вас снова!</p>
                  <p className="text-sm text-white/60">Начните учиться на выгодных условиях</p>
                </div>
              </div>

              <form
                className="flex flex-col gap-3 sm:flex-row lg:flex-[2]"
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
                  className="h-12 flex-1 rounded-xl border-0 bg-white px-4 text-base text-foreground"
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
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-xl px-7 text-base font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(180deg,#cf9bff,#a86bf0)" }}
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
