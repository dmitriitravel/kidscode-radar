import { useEffect, useRef } from "react";

// Контрактные события формы заявки в dataLayer (_orders_form_*).
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    skyengTrackHits?: { get_current_hit_id?: () => string };
  }
}

export function pushFormEvent(
  event: string,
  formId: string,
  stk: string,
  extra?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, formId, stk, ...extra });
}

// hitId из хитовалки Skysmart (может отсутствовать до инициализации).
export function getHitId(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.skyengTrackHits?.get_current_hit_id?.() || "";
  } catch {
    return "";
  }
}

// Отправляет _orders_form_in_viewport (один раз) и _orders_form_start_interaction (при первом вводе).
export function useFormAnalytics(formId: string, stk: string) {
  const ref = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !seen.current) {
          seen.current = true;
          pushFormEvent("_orders_form_in_viewport", formId, stk);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [formId, stk]);

  const onInteract = () => {
    if (started.current) return;
    started.current = true;
    pushFormEvent("_orders_form_start_interaction", formId, stk);
  };

  return { ref, onInteract };
}
