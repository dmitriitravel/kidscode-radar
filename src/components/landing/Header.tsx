import { useState } from "react";
import { NAV_LINKS } from "@/data/landing";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://cdn-user84060.skyeng.ru/uploads/logo-skysmart-66b5fff6c9a37571301329.svg";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-page">
        <div className="flex h-[72px] items-center gap-6">
          <a href="#top" className="flex items-center" aria-label="Skysmart — на главную">
            <img src={LOGO_URL} alt="Skysmart" width={132} height={28} loading="lazy" decoding="async" className="h-7 w-auto" />
          </a>

          <nav aria-label="Основная навигация" className="mr-auto hidden lg:block">
            <ul className="flex items-center gap-6 text-[15px] font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="ml-auto hidden rounded-xl px-5 py-2.5 text-sm font-semibold btn-accent lg:inline-flex"
            onClick={() =>
              document.getElementById("tariffs")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Поступить в школу
          </button>

          <button
            type="button"
            className="ml-auto lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav aria-label="Мобильная навигация" className="border-t border-border py-3 lg:hidden">
            <ul className="space-y-2 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-1" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
