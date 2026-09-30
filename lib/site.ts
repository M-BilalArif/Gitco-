import type { Metadata } from "next";

/** Every public route; also the list the sitemap is built from. */
export const SITE_PATHS = ["/", "/about-us", "/contact", "/how-lpg-supply-works"] as const;
export type SitePath = (typeof SITE_PATHS)[number];

/** Webflow project ids — kept so webflow.js (forms, IX2 interactions) behaves exactly like the original site. */
export const WEBFLOW_SITE_ID = "688c79b60ab129131992689c";
export const WEBFLOW_DOMAIN = "www.gitco.net";

/** Production origin, used for canonical URLs, Open Graph URLs, robots.txt and the sitemap. */
export const SITE_URL = `https://${WEBFLOW_DOMAIN}`;
export const SITE_NAME = "Gitco Gas";

const CDN = `/assets/cdn.prod.website-files.com/${WEBFLOW_SITE_ID}`;
const JQUERY = "/assets/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js";
const PAGE_TRANSITION = "/js/page-transition.js";
const HORIZONTAL_SCROLL = "/js/horizontal-scroll.js";

export const ASSETS = {
  css: `${CDN}/css/gitco-gas.webflow.shared.9f856b4d9.css`,
  fonts: "/assets/fonts/fonts.css",
  favicon: `${CDN}/68a8861eb91eddfe73cca65a_logo.png`,
  touchIcon: `${CDN}/68a88689d41fc99f6147fa58_logo-4.png`,
};

type WebflowPage = { pageId: string; scripts: string[] };

/** Per-page Webflow ids and scripts, in the same order the exported HTML loaded them. */
export const webflowPages = {
  home: {
    pageId: "688c79b60ab12913199268e4",
    scripts: [
      JQUERY,
      `${CDN}/js/webflow.schunk.e0c428ff9737f919.js`,
      `${CDN}/js/webflow.schunk.e23f6d79a5b1b843.js`,
      `${CDN}/js/webflow.schunk.b2d4fa44d0f47718.js`,
      `${CDN}/js/webflow.schunk.9dfb96661114d3db.js`,
      `${CDN}/js/webflow.0b5e9c22.e0ccc17df44cf7ae.js`,
      PAGE_TRANSITION,
      HORIZONTAL_SCROLL,
    ],
  },
  aboutUs: {
    pageId: "688c79b60ab12913199268ec",
    scripts: [
      JQUERY,
      `${CDN}/js/webflow.schunk.e0c428ff9737f919.js`,
      `${CDN}/js/webflow.schunk.e23f6d79a5b1b843.js`,
      `${CDN}/js/webflow.schunk.9dfb96661114d3db.js`,
      `${CDN}/js/webflow.635ec23f.99d2cf1e5b5625d8.js`,
      PAGE_TRANSITION,
      HORIZONTAL_SCROLL,
    ],
  },
  contact: {
    pageId: "688c79b60ab12913199268e7",
    scripts: [
      JQUERY,
      `${CDN}/js/webflow.schunk.e0c428ff9737f919.js`,
      `${CDN}/js/webflow.schunk.e23f6d79a5b1b843.js`,
      `${CDN}/js/webflow.schunk.b2d4fa44d0f47718.js`,
      `${CDN}/js/webflow.d490b2e6.48c7b66ea6d68a8e.js`,
      PAGE_TRANSITION,
    ],
  },
  howLpgSupplyWorks: {
    pageId: "688c79b60ab12913199268ea",
    scripts: [
      JQUERY,
      `${CDN}/js/webflow.schunk.e0c428ff9737f919.js`,
      `${CDN}/js/webflow.schunk.e23f6d79a5b1b843.js`,
      `${CDN}/js/webflow.schunk.9dfb96661114d3db.js`,
      `${CDN}/js/webflow.635ec23f.99d2cf1e5b5625d8.js`,
      PAGE_TRANSITION,
      HORIZONTAL_SCROLL,
    ],
  },
} satisfies Record<string, WebflowPage>;

/**
 * Full per-page metadata. `openGraph` and `twitter` are replaced (not merged) when a page sets them,
 * so each page carries the whole object. Their titles are spelled out because the layout's
 * `title.template` only applies to `title` itself.
 */
function pageMeta(path: SitePath, title: string, description: string): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: SITE_NAME, type: "website", locale: "en_PK" },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export const pageMetadata = {
  home: pageMeta(
    "/",
    "Gitco Gas | Safe & Reliable LPG Supply in Pakistan",
    "Gitco Gas delivers safe, certified LPG to homes and businesses across Pakistan: bulk supply, manifold systems and sealed cylinders with on-time delivery.",
  ),
  aboutUs: pageMeta(
    "/about-us",
    "About Us",
    "Meet Gitco Gas: our mission, values and leadership team, and the certified safety standards behind reliable LPG supply for homes and businesses in Pakistan.",
  ),
  contact: pageMeta(
    "/contact",
    "Contact Us",
    "Contact Gitco Gas for LPG quotes, bulk and cylinder delivery or installation support anywhere in Pakistan. Email info@gitco.com.pk or send us a message.",
  ),
  howLpgSupplyWorks: pageMeta(
    "/how-lpg-supply-works",
    "How LPG Supply Works",
    "How Gitco Gas supplies LPG across Pakistan, from storage at our Gilgit plant to bulk, manifold and sealed-cylinder delivery with certified safety checks.",
  ),
} satisfies Record<keyof typeof webflowPages, Metadata>;
