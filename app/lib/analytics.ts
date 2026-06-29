/**
 * Tiny analytics shim. Fires an event to whichever provider is configured
 * (Plausible and/or GA4). No-ops safely if neither is present — so it never
 * errors and nothing loads unless you set the env vars (see Analytics.tsx).
 */
type Props = Record<string, string | number | boolean>;

export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as {
      plausible?: (e: string, opts?: { props: Props }) => void;
      gtag?: (...args: unknown[]) => void;
    };
    if (typeof w.plausible === "function") {
      w.plausible(event, props ? { props } : undefined);
    }
    if (typeof w.gtag === "function") {
      w.gtag("event", event, props ?? {});
    }
  } catch {
    /* analytics must never break the app */
  }
}
