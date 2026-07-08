# Домашний лицей Skysmart — лендинг

Копия лендинга [homeschooling.skysmart.ru](https://homeschooling.skysmart.ru/):
онлайн-школа с аттестатом государственного образца для 5–11 классов.

## Особенности

- **Лёгкая загрузка / Core Web Vitals.** Контент отдаётся статическим HTML
  (предрендер на этапе сборки), фирменные шрифты `woff2` с `preload` и
  `font-display: swap`, нет тяжёлых изображений — декор сделан на CSS.
- **SEO.** Полный текст всех разделов присутствует в исходном HTML и доступен
  поисковым роботам: семантическая разметка (`header`/`main`/`section`/`footer`,
  один `h1`), мета-теги, Open Graph и микроразметка JSON-LD
  (`EducationalOrganization` + `FAQPage`).
- **Фирменный стиль.** Единственный шрифт — `StratosSkyeng`. Акцентный цвет
  `#00c1ff` (hover `#6fe4ff`, active `#009ff4`) вынесен в CSS-переменные
  (`--brand-accent`, `--brand-accent-hover`, `--brand-accent-active`).

## Технологии

Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Команды

```sh
npm install        # установка зависимостей
npm run dev        # дев-сервер
npm run build      # сборка + SSR-предрендер статического HTML (dist/)
npm run preview    # предпросмотр продакшен-сборки
npm run lint       # проверка ESLint
```

## Как устроен предрендер

1. `vite build` — клиентский бандл и `dist/index.html`.
2. `vite build --ssr src/entry-server.tsx` — серверный бандл (`renderToString`).
3. `scripts/prerender.js` — рендерит страницу в строку и встраивает её вместе с
   `<head>` (из `react-helmet-async`) в `dist/index.html`.

На клиенте приложение гидрируется поверх готовой разметки (`hydrateRoot`).
