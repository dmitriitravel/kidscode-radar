import { useEffect, useState } from "react";
import { AUDIENCE } from "@/data/landing";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Десктоп — 5 карточек в одну строку; мобильные — слайдер по одной карточке.
export function AudienceSlider() {
  const [index, setIndex] = useState(0);
  const count = AUDIENCE.length;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIndex(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section aria-labelledby="aud-title" className="bg-white py-14 sm:py-16">
      <div className="container-page">
        <h2 id="aud-title" className="text-3xl font-bold leading-tight sm:text-4xl">
          Домашний лицей — идеальный выбор для тех, кто:
        </h2>

        {/* Десктоп: одна строка из 5 карточек */}
        <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-5">
          {AUDIENCE.map((item) => (
            <AudienceCard key={item.title} item={item} />
          ))}
        </div>

        {/* Мобильные/планшеты: слайдер */}
        <div className="mt-8 lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {AUDIENCE.map((item) => (
                <div key={item.title} className="w-full shrink-0 px-1">
                  <AudienceCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Назад"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {AUDIENCE.map((item, i) => (
                <button
                  key={item.title}
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
              onClick={next}
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

function AudienceCard({
  item,
}: {
  item: { icon: string; title: string; text: string };
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-secondary p-6">
      <div className="mb-3 flex h-[88px] items-center">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          width={148}
          height={108}
          loading="lazy"
          decoding="async"
          className="h-[88px] w-auto object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold leading-snug text-foreground">
        {item.title}
      </h3>
      <p className="mt-2 text-[15px] text-muted-foreground">{item.text}</p>
    </article>
  );
}
