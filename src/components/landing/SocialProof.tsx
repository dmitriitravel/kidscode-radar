// Реализация Figma-фрейма «1920» (4 карточки соцдоказательства)
const PROOF = [
  {
    title: "99 000+ детей в России",
    text: "уже перешли на семейное обучение и занимаются онлайн",
  },
  {
    title: "72% родителей",
    text: "замечают, что ребёнок стал спокойнее и меньше нервничает из-за учёбы, когда учится дома",
  },
  {
    title: "Каждый второй ребёнок",
    text: "остаётся с нами после первого года обучения",
  },
  {
    title: "4,9",
    text: "Наш рейтинг по отзывам на УчисьОнлайн.ру и MOOC.ru",
    logos: true,
  },
];

export function SocialProof() {
  return (
    <section aria-label="Нам доверяют" className="relative overflow-hidden bg-white py-16">
      {/* мягкое фирменное свечение, как в макете */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] w-[min(925px,90%)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: "#d570ff", filter: "blur(90px)", opacity: 0.16 }}
      />
      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2 rounded-3xl bg-white p-6 text-center shadow-card"
            >
              <p className="text-2xl font-medium leading-tight text-black">{item.title}</p>
              <p className="text-lg leading-snug text-black/60">{item.text}</p>
              {item.logos && (
                <div className="mt-1 flex flex-wrap justify-center gap-2.5">
                  <img src="/figma/logo-mooc.svg" alt="MOOC.ru" width={86} height={24} loading="lazy" />
                  <img
                    src="/figma/logo-uchis.svg"
                    alt="УчисьОнлайн.ру"
                    width={100}
                    height={24}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
