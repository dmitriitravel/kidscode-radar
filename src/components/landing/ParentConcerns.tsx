// Реализация Figma-фрейма «Title» (4135:10102) — «Мы знаем, что волнует родителей»
interface Concern {
  icon: string;
  alt: string;
  text: string;
  textTop?: boolean;
}

const ROW_1: Concern[] = [
  {
    icon: "/figma/worry-backpack.webp",
    alt: "",
    text: "Ребёнок теряет интерес к учёбе, школа не даёт результата",
  },
  {
    icon: "/figma/worry-trophy.webp",
    alt: "",
    text: "Нет времени учиться из-за соревнований или концертов",
    textTop: true,
  },
  {
    icon: "/figma/worry-house.webp",
    alt: "",
    text: "Ребёнок часто болеет, пропускает занятия, легко устаёт",
  },
];

const ROW_2: Concern[] = [
  {
    icon: "/figma/worry-globe.webp",
    alt: "",
    text: "Семья много переезжает или живёт за границей",
    textTop: true,
  },
  {
    icon: "/figma/worry-warning.webp",
    alt: "",
    text: "В школе токсичная, небезопасная среда, случаи травли",
  },
];

function Card({ item }: { item: Concern }) {
  const icon = (
    <div className="flex h-[180px] items-center justify-center">
      <img
        src={item.icon}
        alt={item.alt}
        aria-hidden="true"
        width={210}
        height={210}
        loading="lazy"
        decoding="async"
        className="h-auto max-h-[180px] w-auto"
      />
    </div>
  );
  const text = (
    <p className="px-6 text-center text-2xl leading-tight">{item.text}</p>
  );
  return (
    <div className="flex w-full max-w-[376px] flex-col items-center gap-2">
      {item.textTop ? (
        <>
          <div className="hidden md:block">{text}</div>
          {icon}
          <div className="md:hidden">{text}</div>
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </div>
  );
}

export function ParentConcerns() {
  return (
    <section aria-labelledby="worry-title" className="bg-white py-14">
      <div className="container-page">
        <h2
          id="worry-title"
          className="mb-11 text-center text-2xl font-medium leading-tight sm:text-3xl lg:text-[40px]"
        >
          Мы знаем, что волнует родителей
        </h2>
        <div className="flex flex-col gap-6 md:gap-4">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
            {ROW_1.map((item) => (
              <Card key={item.text} item={item} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
            {ROW_2.map((item) => (
              <Card key={item.text} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
