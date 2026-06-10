// Реализация Figma-фрейма «Title» (3644:8444) — «И строим обучение вокруг потребностей ребёнка»
interface Feature {
  title: string;
  desc: string;
  img: string;
  w: number;
  h: number;
}

const ROW_1: Feature[] = [
  {
    title: "Аттестат гособразца",
    desc: "Всё как в обычной школе, только с гибким графиком: ребёнок освоит школьную программу по ФГОС и получит российский аттестат для поступления в вуз",
    img: "https://static.tildacdn.com/tild6639-3661-4234-b162-636137643836/Image_Container_10.png",
    w: 1144,
    h: 538,
  },
  {
    title: "Сильные преподаватели",
    desc: "Учителя из ведущих школ России объясняют сложное простым языком и помогают ребёнку не терять внимание на уроке. Только 5 из 100 кандидатов проходят конкурсный отбор в лицей",
    img: "https://static.tildacdn.com/tild3332-3233-4162-b834-376633663761/Other_teachers_1.png",
    w: 998,
    h: 230,
  },
];

const ROW_2: Feature[] = [
  {
    title: "Бережное общение",
    desc: "Помогаем ребёнку адаптироваться и найти друзей: организуем общение между учениками и проводим встречи с нейропсихологом",
    img: "https://static.tildacdn.com/tild6637-3464-4433-b137-333635393534/Frame_2131329616_1.png",
    w: 752,
    h: 512,
  },
  {
    title: "Вся учёба под контролем",
    desc: "Расписание, уроки, домашки, конспекты и отчёты о прогрессе — всё в одном месте",
    img: "https://static.tildacdn.com/tild3636-3738-4133-a464-313662636363/Image_Container_11_1.png",
    w: 752,
    h: 538,
  },
  {
    title: "Навык письма сохраняется",
    desc: "Часть заданий ребёнок выполняет письменно для развития мелкой моторики",
    img: "https://static.tildacdn.com/tild3166-6234-4437-b863-653234343938/Product_Image_Contai.png",
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
        <img
          src={item.img}
          alt=""
          aria-hidden="true"
          width={item.w}
          height={item.h}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
          className="block h-auto w-full"
        />
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
          И строим обучение вокруг потребностей ребёнка
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
