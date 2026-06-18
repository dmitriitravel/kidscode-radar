import { useEffect, useState } from "react";

// Плашка о cookies, прижатая к левому нижнему краю экрана. Состояние сохраняется в localStorage.
const STORAGE_KEY = "skysmart:cookies-accepted";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[60] max-w-[716px]">
      <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
        <p className="text-base leading-tight text-black">
          Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем{" "}
          <a
            href="https://legal.skyeng.ru/doc/view/privacypolicyanorus"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black text-black"
          >
            cookies
          </a>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-md px-5 py-2.5 text-base font-normal text-white transition-colors"
          style={{ backgroundColor: "#ff9e00" }}
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
