import Cursor from "./Cursor";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

/**
 * Standard wrapper for all sub-pages: atmospheric FX, custom cursor,
 * cross-page nav and the deep-linking footer. Content is server-rendered
 * for SEO; only the cursor/nav are client islands.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fx-noise" />
      <div className="fx-scan" />
      <div className="fx-vignette" />
      <Cursor />
      <SiteNav />
      <main style={{ position: "relative", zIndex: 2, paddingTop: 80 }}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
