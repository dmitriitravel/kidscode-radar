import { useState } from "react";

// «Тысячи учеников уже создают своё будущее с нами» — отзывы + рейтинги площадок.
const ASSET = "https://static.tildacdn.com";
const SPARKLE = `${ASSET}/tild3239-3138-4137-a363-313839646134/Effects_1.svg`;

type Review = { name: string; since: string; avatar: string; paragraphs: string[] };

const NATALIA: Review = {
  name: "Наталья, мама Владимира",
  since: "Занимаются с 2023 года",
  avatar: `${ASSET}/tild6339-3038-4361-b134-653963333139/image_896.png`,
  paragraphs: [
    "Заметила, что сын стал отказываться от помощи с домашней работой по математике. Раньше мы каждый вечер с ним сидели, либо я, либо папа. Теперь только сам. Самое интересное, что оценки при этом не подкачали. Дневник проверяю без страха!",
  ],
};

const DMITRY: Review = {
  name: "Дмитрий, папа Мирона",
  since: "Занимаются с 2022 года",
  avatar: `${ASSET}/tild6632-6364-4837-b536-656237383031/Frame_2087331462.png`,
  paragraphs: [
    "Сначала, если честно, не доверял онлайн-школам. Хотелось, чтобы сын учился «как положено». Но сейчас рад, что выбрал Skysmart. Работаю за границей, и сын живёт со мной. Благодаря Skysmart он учится, как и все, — с расписанием, классными преподавателями, домашкой.",
    "И главное — мы вместе. Это самое ценное.",
  ],
};

const MAYA: Review = {
  name: "Майя, мама Елисея",
  since: "Занимаются с 2024 года",
  avatar: `${ASSET}/tild3334-3330-4364-b563-393766653435/Ellipse_58.png`,
  paragraphs: [
    "Преподаватели в Домашнем лицее невероятные. Пока сын занимается, сама слушаю, настолько интересно всё объясняют. Наконец-то учёба перестала быть обязанностью и стала по-настоящему увлекательной. Сын учится с удовольствием и без стресса.",
  ],
};

const SERGEY: Review = {
  name: "Сергей, ученик",
  since: "Занимается с 2024 года",
  avatar: `${ASSET}/tild3633-3362-4432-b966-663634386136/image_894.png`,
  paragraphs: [
    "Моя мечта — стать профессиональным баскетболистом. В обычной школе это было сложно, тренировки часто совпадают с уроками. А здесь я сам планирую день, и всегда успеваю и потренироваться, и поучиться.",
  ],
};

const LOGOS = [
  { alt: "Сравни — рейтинг 4,8", src: `${ASSET}/tild6161-6431-4330-b032-353930613831/Frame_2131329075.png` },
  { alt: "Яндекс — рейтинг 4,7", src: `${ASSET}/tild6365-3731-4030-a232-626463396136/Frame_2131329070.png` },
  { alt: "2ГИС — рейтинг 4,8", src: `${ASSET}/tild3534-3834-4764-a164-363438303434/Frame_2131329074.png` },
  { alt: "Отзовик — рейтинг 4,7", src: `${ASSET}/tild3535-6534-4139-b739-346335626430/Frame_2131329073.png` },
];

function ReviewCard({ review, className = "" }: { review: Review; className?: string }) {
  return (
    <article className={`rounded-2xl bg-white p-6 ${className}`}>
      <header className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          loading="lazy"
          decoding="async"
          className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-[17px] font-semibold leading-tight">{review.name}</p>
          <p className="mt-1 text-[15px] text-foreground/50">{review.since}</p>
        </div>
      </header>
      <div className="mt-4 space-y-3 text-[15px] leading-snug text-foreground/60">
        {review.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export function StudentsFuture() {
  const [expanded, setExpanded] = useState(false);
  const extra = expanded ? "" : "hidden ";

  return (
    <section aria-labelledby="future-title" style={{ backgroundColor: "#f4f5f6" }} className="py-14 sm:py-16">
      <div className="container-page">
        <h2 id="future-title" className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Тысячи учеников уже создают своё будущее с нами
        </h2>

        <div className="mt-10 flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_376px]">
          <div className="flex flex-col gap-4 lg:grid lg:grid-rows-[minmax(264px,auto)_minmax(288px,auto)]">
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[278px_minmax(0,1fr)]">
              <article
                className="relative flex h-full flex-col justify-start overflow-hidden rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(15deg, #ff8400 0%, #ff9e00 100%)" }}
              >
                <img src={SPARKLE} alt="" aria-hidden="true" width={24} height={24} loading="lazy" className="absolute right-5 top-5 h-6 w-6" />
                <p className="text-[32px] font-semibold leading-none">80%</p>
                <p className="mt-4 max-w-[220px] text-[17px] leading-snug text-white/80">
                  учеников и родителей готовы рекомендовать нас друзьям и близким
                </p>
              </article>
              <ReviewCard review={NATALIA} className="h-full" />
            </div>
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              <ReviewCard review={MAYA} className={`${extra}h-full lg:block`} />
              <ReviewCard review={SERGEY} className={`${extra}h-full lg:block`} />
            </div>
          </div>
          <div className={`${extra}lg:block`}>
            <ReviewCard review={DMITRY} className="h-full" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={`${expanded ? "hidden" : "flex"} mx-auto mt-6 w-full max-w-sm items-center justify-center rounded-full border border-foreground/15 bg-white px-6 py-3 text-base font-medium lg:hidden`}
        >
          Показать все отзывы
        </button>

        <div className="mt-4 rounded-3xl bg-white px-6 py-7 sm:rounded-2xl lg:mt-4 lg:px-10 lg:py-6">
          <ul className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-4">
            {LOGOS.map((logo) => (
              <li key={logo.alt}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={165}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-[150px] lg:w-[165px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
