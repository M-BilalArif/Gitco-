import type { SitePath } from "@/lib/site";
import CurrentYear from "./CurrentYear";
import SiteLink from "./SiteLink";

export default function Footer({ current }: { current: SitePath }) {
  return (
    <div className="rodape">
      <div className="container-padrao-rodape">
        <div className="logo-e-redes">
          <SiteLink href="/" className="w-inline-block" current={current}>
            <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" loading="lazy" width="180" sizes="(max-width: 479px) 100vw, 180px" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" />
          </SiteLink>
          <div className="redes">
            <a href="mailto:info@gitco.com.pk" className="link-redes w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926999_icone_email.svg" loading="lazy" width="20" alt="Email Gitco Gas" />
            </a>
            <a href="https://www.instagram.com/gitco2024/" className="link-redes w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab129131992699a_rodape_1.svg" loading="lazy" width="21.5" alt="Gitco Gas on Instagram" />
            </a>
            <a href="https://www.facebook.com/gitcogas99" className="link-redes w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab129131992692a_rodape_2_2x.png" loading="lazy" alt="Gitco Gas on Facebook" width="21" />
            </a>
          </div>
        </div>
        <div className="menus-rodape">
          <div className="nav-rodape">
            <div className="nav-rodape1">
              <SiteLink href="/how-lpg-supply-works" className="link-rodape-nav" current={current}>How LPG Supply works</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div className="nav-rodape1">
              <SiteLink href="/about-us" className="link-rodape-nav" current={current}>About Gitco</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div className="nav-rodape1">
              <SiteLink href="/" className="link-rodape-nav" current={current}>Home</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
          </div>
          <div className="nav-rodape">
            <div className="nav-rodape1">
              <SiteLink href="/contact" className="link-rodape-nav" current={current}>Contact</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div className="nav-rodape1" />
            <div className="nav-rodape1">
              <a href="https://www.baiggrp.com/" className="link-rodape-nav">Baig Group</a>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-block-14">
        {"© "}
        <CurrentYear buildYear={new Date().getFullYear()} />
        {" Gitco Private limited, All Rights Reserved. Powered By "}
        <a href="https://bitsolution.tech/" target="_blank" className="link-4">{" BITS."}</a>
      </div>
    </div>
  );
}
