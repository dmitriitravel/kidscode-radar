import { useState } from "react";
import { ChevronDown } from "lucide-react";

// «Выберите город» — раскрывающийся список городов (по умолчанию скрыт).
const S = "https://"; // префикс домена
const GROUPS: { letter: string; cities: { name: string; href: string }[] }[] = [
  { letter: "Б", cities: [{ name: "Барнаул", href: `${S}brn.skysmart.ru/` }] },
  {
    letter: "В",
    cities: [
      { name: "Великий Новгород", href: `${S}vng.skysmart.ru/` },
      { name: "Владивосток", href: `${S}vld.skysmart.ru/` },
      { name: "Волгоград", href: `${S}vgg.skysmart.ru/` },
      { name: "Вологда", href: `${S}vlg.skysmart.ru/` },
      { name: "Воронеж", href: `${S}vrn.skysmart.ru/` },
    ],
  },
  { letter: "Е", cities: [{ name: "Екатеринбург", href: `${S}ekb.skysmart.ru/` }] },
  {
    letter: "И",
    cities: [
      { name: "Ижевск", href: `${S}izh.skysmart.ru/` },
      { name: "Иркутск", href: `${S}irk.skysmart.ru/` },
    ],
  },
  {
    letter: "К",
    cities: [
      { name: "Казань", href: `${S}kzn.skysmart.ru/` },
      { name: "Калуга", href: `${S}kal.skysmart.ru/` },
      { name: "Кемерово", href: `${S}kem.skysmart.ru/` },
      { name: "Киров", href: `${S}kir.skysmart.ru/` },
      { name: "Краснодар", href: `${S}krd.skysmart.ru/` },
      { name: "Красноярск", href: `${S}kry.skysmart.ru/` },
      { name: "Курган", href: `${S}krg.skysmart.ru/` },
    ],
  },
  {
    letter: "М",
    cities: [
      { name: "Москва", href: `${S}msk.skysmart.ru/` },
      { name: "Мытищи", href: `${S}myt.skysmart.ru/` },
    ],
  },
  {
    letter: "Н",
    cities: [
      { name: "Нижний Новгород", href: `${S}nnv.skysmart.ru/` },
      { name: "Новороссийск", href: `${S}nvr.skysmart.ru/` },
      { name: "Новосибирск", href: `${S}nsk.skysmart.ru/` },
    ],
  },
  {
    letter: "О",
    cities: [
      { name: "Одинцово", href: `${S}odc.skysmart.ru/` },
      { name: "Омск", href: `${S}oms.skysmart.ru/` },
      { name: "Оренбург", href: `${S}orb.skysmart.ru/` },
    ],
  },
  {
    letter: "П",
    cities: [
      { name: "Пермь", href: `${S}prm.skysmart.ru/` },
      { name: "Подольск", href: `${S}pod.skysmart.ru/` },
    ],
  },
  { letter: "Р", cities: [{ name: "Ростов-на-Дону", href: `${S}rnd.skysmart.ru/` }] },
  {
    letter: "С",
    cities: [
      { name: "Самара", href: `${S}sam.skysmart.ru/` },
      { name: "Санкт-Петербург", href: `${S}spb.skysmart.ru/` },
      { name: "Саратов", href: `${S}sar.skysmart.ru/` },
      { name: "Севастополь", href: `${S}svs.skysmart.ru/` },
    ],
  },
  {
    letter: "Т",
    cities: [
      { name: "Тольятти", href: `${S}tol.skysmart.ru/` },
      { name: "Томск", href: `${S}tom.skysmart.ru/` },
      { name: "Тюмень", href: `${S}tym.skysmart.ru/` },
    ],
  },
  {
    letter: "У",
    cities: [
      { name: "Ульяновск", href: `${S}uly.skysmart.ru/` },
      { name: "Уфа", href: `${S}ufa.skysmart.ru/` },
    ],
  },
  {
    letter: "Ч",
    cities: [
      { name: "Челябинск", href: `${S}chl.skysmart.ru/` },
      { name: "Чита", href: `${S}chi.skysmart.ru/` },
    ],
  },
];

export function CitiesPicker() {
  const [open, setOpen] = useState(false);

  return (
    <section aria-label="Выбор города" className="bg-white py-12">
      <div className="container-page text-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-5 py-2.5 text-base font-medium"
        >
          Выберите город
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 text-left sm:grid-cols-3 lg:grid-cols-7">
            {GROUPS.map((g) => (
              <div key={g.letter}>
                <p className="font-bold">{g.letter}</p>
                <ul className="mt-2 space-y-1.5">
                  {g.cities.map((c) => (
                    <li key={c.href}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 transition-colors hover:text-foreground"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
