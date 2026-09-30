import type { ComponentProps } from "react";
import type { SitePath } from "@/lib/site";

type Props = ComponentProps<"a"> & { href: SitePath; current: SitePath };

/**
 * Internal link with Webflow's current-page markers (`w--current`, `aria-current`).
 * A plain <a> on purpose: the page-transition script and webflow.js expect a full
 * page load per route, exactly like the original site.
 */
export default function SiteLink({ href, current, className, ...rest }: Props) {
  const active = href === current;
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={active ? `${className} w--current` : className}
      {...rest}
    />
  );
}
