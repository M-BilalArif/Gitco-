import type { SitePath } from "@/lib/site";
import SiteLink from "./SiteLink";

export default function Header({ current }: { current: SitePath }) {
  return (
    <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="container w-container">
        <SiteLink href="/" className="brand w-nav-brand" current={current}>
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" width="Auto" height="Auto" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" sizes="138px" className="image" />
        </SiteLink>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="menu-esq">
            <div className="nav-link">
              <SiteLink href="/how-lpg-supply-works" className="nav-link-2 w-nav-link" current={current}>How LPG Supply Works</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div className="nav-link">
              <SiteLink href="/about-us" className="nav-link-2 w-nav-link" current={current}>About</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div className="nav-link">
              <SiteLink href="/contact" className="nav-link-2 w-nav-link" current={current}>Contact</SiteLink>
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta" />
            </div>
            <div data-w-id="8209677d-a2cc-ad46-e244-1a5bc11faf34" className="nav-link grupo">
              <div className="menu-grupo">
                <a href="/about-us#team" className="nav-link-2 grupo w-nav-link">Our Team</a>
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab12913199268f5_seta_menu_2x.png" loading="lazy" width="6.5" alt="" className="seta seta-grupo" />
              </div>
              <div className="grupo-submenu">
                <SiteLink href="/" className="grupo-genial-empresa w-inline-block" current={current}>
                  <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" loading="lazy" width="194" height="50" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" sizes="(max-width: 991px) 100vw, 194px" />
                  <p className="branco texto-grupo">At Gitco we Provide safe, efficient, and reliable LPG solutions nationwide.</p>
                </SiteLink>
                <a href="https://www.baiggrp.com/" target="_blank" className="grupo-genial-empresa w-inline-block">
                  <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup.png" loading="lazy" width="100.5" sizes="(max-width: 991px) 100vw, 101px" alt="Baig Group" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup-p-1600.png 1600w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c2d1ea069a6c1ed02359_BaigGroup.png 1679w" />
                  <p className="branco texto-grupo">Driving innovation across industries with expertise, integrity, and a commitment to excellence.</p>
                </a>
              </div>
            </div>
          </div>
          <SiteLink href="/contact" className="botao-fundo-escuro menu w-button" current={current}>Switch to Gitco Gas Today</SiteLink>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="icon w-icon-nav-menu" />
        </div>
      </div>
    </div>
  );
}
