import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// «Мы знаем, что волнует родителей»: ровные белые карточки (3+2) на ПК,
// слайдер по одной карточке на мобильных. Чередование иконка/текст сохранено.
interface Concern {
  icon: string;
  text: string;
  textTop?: boolean;
}

const PC_BASE =
  "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/perfect-choice";

const CONCERNS: Concern[] = [
  { icon: `${PC_BASE}/perfect-choice-case.png`, text: "Ребёнок теряет интерес к учёбе, школа не даёт результата" },
  { icon: `${PC_BASE}/perfect-choice-cup.png`, text: "Нет времени учиться из-за соревнований или концертов", textTop: true },
  { icon: `${PC_BASE}/perfect-choice-home.png`, text: "Ребёнок часто болеет, пропускает занятия, легко устаёт" },
  { icon: `${PC_BASE}/perfect-choice-planet.png`, text: "Семья много переезжает или живёт за границей", textTop: true },
  { icon: `${PC_BASE}/perfect-choice-warning.png`, text: "В школе токсичная, небезопасная среда, случаи травли" },
];

function CardBody({ item }: { item: Concern }) {
  const icon = (
    <div className="flex h-[160px] items-center justify-center">
      <img
        src={item.icon}
        alt=""
        aria-hidden="true"
        width={200}
        height={160}
        loading="lazy"
        decoding="async"
        className="h-[160px] w-auto object-contain"
      />
    </div>
  );
  const text = (
    <p className="px-2 text-center text-lg font-semibold leading-snug text-foreground">
      {item.text}
    </p>
  );
  return (
    <>
      {item.textTop ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </>
  );
}

export function ParentConcerns() {
  const [index, setIndex] = useState(0);
  const count = CONCERNS.length;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIndex(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section aria-labelledby="worry-title" className="bg-white py-14">
      <div className="container-page">
        <h2
          id="worry-title"
          className="mb-10 text-center text-2xl font-medium leading-tight sm:text-3xl lg:text-[40px]"
        >
          Мы знаем, что волнует родителей
        </h2>

        {/* Десктоп: ровные карточки 3 + 2 (нижний ряд по центру) */}
        <div className="hidden flex-wrap justify-center gap-4 lg:flex">
          {CONCERNS.map((item) => (
            <article
              key={item.text}
              className="flex basis-[calc((100%-2rem)/3)] flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-card"
            >
              <CardBody item={item} />
            </article>
          ))}
        </div>

        {/* Мобильные: слайдер по одной карточке */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {CONCERNS.map((item) => (
                <div key={item.text} className="w-full shrink-0 px-1">
                  <article className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-card">
                    <CardBody item={item} />
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              aria-label="Назад"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {CONCERNS.map((item, i) => (
                <button
                  key={item.text}
                  type="button"
                  aria-label={`Слайд ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className="h-2 w-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: i === index ? "var(--brand-accent)" : "rgba(0,0,0,.18)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % count)}
              aria-label="Вперёд"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
