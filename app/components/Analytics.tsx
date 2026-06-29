import Script from "next/script";

/**
 * Loads analytics only when configured via env vars — nothing loads by default.
 *  - Plausible (privacy-friendly): set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kenai.in
 *  - Google Analytics 4: set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * You can set either, both, or neither.
 */
export default function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga}');`}
          </Script>
        </>
      )}
    </>
  );
}
