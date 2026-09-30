"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The visitor's current year. Pages are prerendered at build time, so the HTML carries `buildYear`;
 * after hydration React switches to the browser's year, so the footer stays right without a rebuild.
 */
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  return useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => buildYear);
}
