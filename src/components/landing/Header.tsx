import { useState } from "react";
import { NAV_LINKS, GRADE_TABS } from "@/data/landing";
import { LeadDialog } from "./LeadDialog";
import { Menu, X } from "lucide-react";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Skysmart — на главную">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{ backgroundColor: "var(--brand-accent)" }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 2l10 6-10 6V2z" fill="#fff" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-tight">skysmart</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium">
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

          <div className="hidden items-center lg:flex">
            <LeadDialog
              triggerLabel="Попробовать бесплатно"
              triggerClassName="btn-accent inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold"
            />
          </div>

          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Лента классов */}
        <nav aria-label="Классы" className="border-t border-border">
          <ul className="flex gap-5 overflow-x-auto py-2 text-sm text-foreground/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {GRADE_TABS.map((grade) => (
              <li key={grade} className="whitespace-nowrap">
                <a href="#tariffs" className="transition-colors hover:text-foreground">
                  {grade}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {open && (
          <nav aria-label="Мобильная навигация" className="border-t border-border py-3 lg:hidden">
            <ul className="space-y-2 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1"
                    onClick={() => setOpen(false)}
                  >
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
