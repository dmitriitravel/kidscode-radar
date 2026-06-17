import { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

// «Семьи по всему миру доверяют нам образование детей» — карточки с видео-отзывами + страны.
const MEDIA = "https://cdn-user84632.skyeng.ru/shared/large-media/skysmart/product-pages/homeschooling/children-education";

const VIDEOS = [
  {
    name: "Оксана:",
    quote: "«На уроке я почувствовала себя уверенно и комфортно»",
    color: "#A93EDC",
    src: `${MEDIA}/videos/video-1.mp4`,
    poster: `${MEDIA}/images/video-preview-1@2x.png`,
  },
  {
    name: "Мама Евы:",
    quote: "«Дочь увлеклась учёбой, исправила оценки»",
    color: "#FF6D00",
    src: `${MEDIA}/videos/video-2-c.mp4`,
    poster: `${MEDIA}/images/video-preview-2@2x.png`,
  },
  {
    name: "Даша:",
    quote: "«Я полюбила русский, биологию и физику»",
    color: "#FF64B0",
    src: `${MEDIA}/videos/video-3.mp4`,
    poster: `${MEDIA}/images/video-preview-3@2x.png`,
  },
];

function VideoCard({ item }: { item: (typeof VIDEOS)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.controls = true;
    void v.play();
    setPlaying(true);
  };

  return (
    <figure className="flex flex-col-reverse md:flex-col">
      <figcaption className="mt-0 text-base leading-snug md:mt-4">
        <span className="font-semibold" style={{ color: item.color }}>
          {item.name}
        </span>{" "}
        {item.quote}
      </figcaption>
      <div className="relative mb-3 overflow-hidden rounded-2xl bg-black md:mb-0">
        <video
          ref={ref}
          className="aspect-[3/4] w-full object-cover"
          src={item.src}
          poster={item.poster}
          preload="none"
          playsInline
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            aria-label={`Смотреть видео — ${item.name.replace(":", "")}`}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/60"
          >
            <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </button>
        )}
      </div>
    </figure>
  );
}

export function FamiliesTrust() {
  return (
    <section aria-labelledby="families-title" className="bg-white py-14 sm:py-16">
      <div className="container-page">
        <h2
          id="families-title"
          className="text-center text-3xl font-bold leading-tight sm:text-4xl"
        >
          Истории успеха при онлайн-обучении в школе Skysmart
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((item) => (
            <VideoCard key={item.name} item={item} />
          ))}

          <div className="flex flex-col justify-between rounded-2xl bg-secondary p-6 sm:p-7">
            <picture>
              <source
                type="image/webp"
                srcSet={`${MEDIA}/images/image.webp 1x, ${MEDIA}/images/image@2x.webp 2x`}
              />
              <img
                src={`${MEDIA}/images/image.png`}
                srcSet={`${MEDIA}/images/image.png 1x, ${MEDIA}/images/image@2x.png 2x`}
                width={264}
                height={240}
                alt="Флаги стран, в которых учатся в Домашнем лицее"
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[240px]"
              />
            </picture>
            <p className="mt-5 text-base text-muted-foreground">
              Домашний лицей выбирают родители из 30+ стран.
            </p>
            <a
              href="#tariffs"
              className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold"
              style={{ color: "#FF6D00" }}
            >
              Поступить в школу
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
