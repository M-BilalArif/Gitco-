"use client";

import { useEffect } from "react";
import { preload } from "react-dom";

declare global {
  interface Window {
    __webflowBooted?: boolean;
  }
}

type Props = { pageId: string; scripts: string[] };

/**
 * Boots the exported Webflow runtime (jQuery, webflow.js, IX2 interactions, page scripts).
 *
 * The page markup is fully server-rendered; these scripts only add behaviour. They are
 * injected after hydration so their DOM changes never conflict with React, and with
 * `async = false` so they execute in the same order as in the original HTML.
 */
export default function WebflowRuntime({ pageId, scripts }: Props) {
  for (const src of scripts) preload(src, { as: "script" });

  useEffect(() => {
    if (window.__webflowBooted) return;
    window.__webflowBooted = true;

    // webflow.js reads the page id from <html> to find this page's interactions.
    document.documentElement.setAttribute("data-wf-page", pageId);

    // Background videos need the muted *property* set to be allowed to autoplay.
    document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((video) => {
      video.muted = true;
      video.play().catch(() => {});
    });

    scripts.forEach((src, i) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      // IX2 first checks "scroll into view" interactions on window load. When hydration finishes after
      // load, elements already on screen (the hero heading) stay hidden until the visitor scrolls.
      // A resize makes IX2 re-measure; the page's own resize handler just recomputes the same layout.
      if (i === scripts.length - 1) {
        script.onload = () => requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      }
      document.body.appendChild(script);
    });
  }, [pageId, scripts]);

  return null;
}
