import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// «Мы поможем сэкономить семейный бюджет» — 3 карточки, на ПК в ряд, на мобильных слайдер (по умолчанию 2-я).
const ASSET = "https://static.tildacdn.com";

const CARDS = [
  {
    title: "Материнский капитал",
    text: "Можно использовать частично или полностью. Поможем с оформлением документов",
    img: `${ASSET}/tild3334-3731-4061-a330-323330633465/Frame_2087327664.png`,
  },
  {
    title: "Верните 13% от стоимости любого курса",
    text: "Поможем оформить документы, чтобы получить налоговый вычет за обучение",
    img: `${ASSET}/tild6637-3233-4137-b234-303533393061/Frame_2087327664.png`,
  },
  {
    title: "Учитесь сейчас, платите потом",
    text: "Разделим стоимость курса на платежи от 10 333 ₽ / месяц",
    img: `${ASSET}/tild3239-3437-4261-a263-306262663534/Frame_2087327664.png`,
  },
];

export function FamilyBudget() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const scrollToIndex = (i: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  };

  // На мобильных по умолчанию показываем вторую карточку (по центру).
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width:1023px)").matches) {
      scrollToIndex(1, false);
    }
  }, []);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const c = el as HTMLElement;
      const mid = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(mid - center);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  return (
    <section aria-labelledby="budget-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <h2 id="budget-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Мы поможем сэкономить семейный бюджет
        </h2>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white px-6 pt-7 text-center lg:w-auto"
            >
              <h3 className="text-xl font-bold leading-tight sm:text-2xl">{c.title}</h3>
              <p className="mx-auto mt-3 max-w-[300px] text-sm text-muted-foreground sm:text-base">{c.text}</p>
              <img
                src={c.img}
                alt=""
                aria-hidden="true"
                width={752}
                height={208}
                loading="lazy"
                decoding="async"
                className="mt-auto h-auto w-full"
              />
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            aria-label="Предыдущая карточка"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full transition-colors"
                style={{ backgroundColor: i === active ? "#1b2330" : "rgba(0,0,0,.2)" }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(CARDS.length - 1, active + 1))}
            aria-label="Следующая карточка"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
