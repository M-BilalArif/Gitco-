import type { Metadata } from "next";
import Script from "next/script";
import { ASSETS, SITE_NAME, SITE_URL, WEBFLOW_DOMAIN, WEBFLOW_SITE_ID } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gitco Gas Pvt Ltd", template: `%s | ${SITE_NAME}` },
  icons: {
    shortcut: { url: ASSETS.favicon, type: "image/x-icon" },
    apple: ASSETS.touchIcon,
  },
};

// Webflow's feature-detection snippet: adds `w-mod-js` / `w-mod-touch` to <html> before first paint.
const WEBFLOW_MOD =
  '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);';

// GA4 property. The old Universal Analytics tag (UA-68878702-34) only forwarded to this one.
const GA_ID = "G-X9PN3H764P";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the snippet above (and webflow.js) add classes to <html>.
    <html data-wf-domain={WEBFLOW_DOMAIN} data-wf-site={WEBFLOW_SITE_ID} lang="en" suppressHydrationWarning>
      <head>
        <link href={ASSETS.css} rel="stylesheet" type="text/css" />
        <link href={ASSETS.fonts} rel="stylesheet" type="text/css" />
        <script dangerouslySetInnerHTML={{ __html: WEBFLOW_MOD }} />
      </head>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script id="gtag-init">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
