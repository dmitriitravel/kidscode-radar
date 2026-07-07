import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// «Помогаем ребёнку социализироваться и гармонично развиваться» — 4 карточки (2×2 на ПК, слайдер на мобильных).
const ASSET = "https://static.tildacdn.com";
const CHECK = `${ASSET}/tild6535-3734-4832-a431-643833336638/Check-Label.svg`;

type Card = { img: string; title: string; text: string; tags: string[]; note: string };

const CARDS: Card[] = [
  {
    img: `${ASSET}/tild6364-6136-4636-a136-396238353864/Frame_2131329636_1.png`,
    title: "Проектории — практикумы по новым навыкам",
    text: "Это мастер-классы с ведущими профессионалами в своей сфере. На практикуме ученики примеряют на себя разные профессии. Например, учатся работать в графическом редакторе Figma и создают дизайн-проекты",
    tags: ["60–90 минут", "1–4 встречи в месяц"],
    note: "Проектории проходят вне расписания школьных уроков, чтобы не перегружать учеников",
  },
  {
    img: `${ASSET}/tild3332-6539-4666-a634-663038646534/Frame_2131329635_1.png`,
    title: "Неограниченный доступ к кружкам по школьным предметам",
    text: "Кроме обычных уроков, ученик может посещать кружки — групповые занятия в сферах науки, творчества и программирования",
    tags: ["физические лаборатории", "ИТ", "разговорные клубы", "творчество"],
    note: "Кружки развивают навыки для успешного будущего: критическое мышление, логику и работу в команде",
  },
  {
    img: `${ASSET}/tild3864-6239-4837-a534-363431643131/Frame_2131329631_1.png`,
    title: "Встречи с экспертами",
    text: "Приглашаем проводить вебинары людей, которые достигли вершин в профессии. Они рассказывают ребятам, как устроена их работа изнутри, отвечают на вопросы и дают советы",
    tags: ["1–2 встречи в месяц", "менеджер", "шеф-повар", "программист"],
    note: "Такие встречи помогают понять, какая сфера интересна ребёнку и что нужно, чтобы добиться успеха",
  },
  {
    img: `${ASSET}/tild3733-3263-4365-b465-643438303863/Frame_2131329633_1.png`,
    title: "Сообщество и общение",
    text: "В чатах школьники общаются с одноклассниками и ребятами из других классов, находят друзей и единомышленников. Здесь можно играть, обмениваться опытом и просто приятно проводить время",
    tags: ["помощь с домашкой", "юмор", "путешествия", "книги и фильмы"],
    note: "В сообществе проходят викторины и другие мероприятия. Обсуждения в чатах разбиты по темам. За порядком и вежливостью следят модераторы",
  },
];

export function SocialDevelopment() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-soc-card]");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.85;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="social-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <h2 id="social-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Помогаем ребёнку социализироваться и гармонично развиваться
        </h2>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:overflow-visible"
        >
          {CARDS.map((card) => (
            <article
              key={card.title}
              data-soc-card
              className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white lg:w-auto"
            >
              <img
                src={card.img}
                alt=""
                aria-hidden="true"
                width={1144}
                height={300}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-tight sm:text-2xl">{card.title}</h3>
                <p className="mt-3 text-base leading-snug text-foreground/60">{card.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-[#f4f4f4] px-2.5 py-1.5 text-sm text-foreground/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-start gap-2 pt-5">
                  <img src={CHECK} alt="" aria-hidden="true" width={24} height={24} loading="lazy" className="mt-0.5 h-6 w-6 shrink-0" />
                  <span className="text-base leading-snug text-foreground/60">{card.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Предыдущая карточка"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
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
