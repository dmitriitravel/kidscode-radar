// Реализация Figma-фрейма «Title» (3644:8444) — «И строим обучение вокруг потребностей ребёнка»
interface Feature {
  title: string;
  desc: string;
  img: string; // webp для десктопа
  imgMobile: string; // webp mini для мобильных
  w: number;
  h: number;
}

const U = "https://cdn-user84060.skyeng.ru/uploads";

const ROW_1: Feature[] = [
  {
    title: "Аттестат гособразца",
    desc: "Всё как в обычной школе, только с гибким графиком: ребёнок освоит школьную программу по ФГОС и получит российский аттестат для поступления в вуз",
    img: `${U}/image-container-10-6a4d06ada1b9d538714638.webp`,
    imgMobile: `${U}/image-container-10-mini-6a4d0997ba282074518068.webp`,
    w: 1144,
    h: 538,
  },
  {
    title: "Сильные преподаватели",
    desc: "Учителя из ведущих школ России объясняют сложное простым языком и помогают ребёнку не терять внимание на уроке. Только 5 из 100 кандидатов проходят конкурсный отбор в лицей",
    img: `${U}/other-teachers-1-6a4d06da9b998813760506.webp`,
    imgMobile: `${U}/other-teachers-1-mini-6a4d09833f229279256158.webp`,
    w: 998,
    h: 230,
  },
];

const ROW_2: Feature[] = [
  {
    title: "Бережное общение",
    desc: "Помогаем ребёнку адаптироваться и найти друзей: организуем общение между учениками и проводим встречи с нейропсихологом",
    img: `${U}/frame-2131329616-1-6a4d0684ed723841773204.webp`,
    imgMobile: `${U}/frame-2131329616-1-mini-6a4d096fcfd1c312315055.webp`,
    w: 752,
    h: 512,
  },
  {
    title: "Вся учёба под контролем",
    desc: "Расписание, уроки, домашки, конспекты и отчёты о прогрессе — всё в одном месте",
    img: `${U}/image-container-11-1-6a4d06cb4bb9d491534518.webp`,
    imgMobile: `${U}/image-container-11-1-mini-6a4d0960025d8486610049.webp`,
    w: 752,
    h: 538,
  },
  {
    title: "Навык письма сохраняется",
    desc: "Часть заданий ребёнок выполняет письменно для развития мелкой моторики",
    img: `${U}/product-image-contai-6a4d0705d7e52485642887.webp`,
    imgMobile: `${U}/product-image-contai-mini-6a4d0951578e3652270432.webp`,
    w: 752,
    h: 512,
  },
];

function Card({ item }: { item: Feature }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-secondary">
      <div className="px-4 pt-4">
        <p className="text-2xl leading-tight text-black">{item.title}</p>
        <p className="mt-2 text-lg leading-snug text-black/60">{item.desc}</p>
      </div>
      <div className="mt-auto flex items-end justify-center">
        <picture className="block w-full">
          <source type="image/webp" media="(max-width: 768px)" srcSet={item.imgMobile} />
          <source type="image/webp" srcSet={item.img} />
          <img
            src={item.img}
            alt=""
            aria-hidden="true"
            width={item.w}
            height={item.h}
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: `${item.w} / ${item.h}` }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
            className="block h-auto w-full"
          />
        </picture>
      </div>
    </div>
  );
}

export function ProgramFeatures() {
  return (
    <section aria-labelledby="needs-title" className="bg-white py-14">
      <div className="container-page">
        <h2
          id="needs-title"
          className="mx-auto mb-10 max-w-3xl text-center text-2xl font-medium leading-tight sm:text-3xl lg:text-[40px]"
        >
          Как устроено дистанционное обучение для школьников в Skysmart
        </h2>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {ROW_1.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {ROW_2.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
