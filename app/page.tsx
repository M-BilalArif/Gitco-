import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import WebflowRuntime from "@/components/webflow/WebflowRuntime";
import { pageMetadata, webflowPages } from "@/lib/site";

export const metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <>
      <Header current="/" />
      <div className="hero">
        <div data-poster-url="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-poster-00001.jpg" data-video-urls="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-transcode.mp4,/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
          <video id="97e07ae5-edf6-f08b-d682-b6ab8843eb5d-video" autoPlay loop style={{ backgroundImage: "url(/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-poster-00001.jpg)" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-transcode.mp4" data-wf-ignore="true" />
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a888529c3c498fb204b533_WhatsApp_Video_2025-08-09_at_93754_AM-transcode.webm" data-wf-ignore="true" />
          </video>
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926974_g_2x.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926974_g_402x-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926974_g_2x.png 512w" className="seta-outline-grande" />
          <div className="texto-hero">
            <div className="div-block">
              <h1 data-w-id="3ad1d409-cf96-05f8-e0dd-5053bad20ddd" style={{ opacity: 0 }} className="heading-2">Delivering safe, efficient LPG solutions to homes and businesses across Pakistan.</h1>
              <a href="/contact" className="botao-fundo-escuro w-button">Get a Quote</a>
            </div>
            <div>
              <div className="numeros-hero">
                95
                <span className="numeros-hero-2">%</span>
              </div>
              <div className="numeros-hero-3">On-time delivery record</div>
              <div className="numeros-hero">122 MT</div>
              <div className="numeros-hero-3">LPG Storage Capacity</div>
            </div>
          </div>
        </div>
      </div>
      <div className="miolo">
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6da8b6be83b0d007045_7f371217-73b4-4a7a-a10e-2a28dd79dfe2.png" loading="lazy" alt="" className="seta-azul-peq-1" />
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png 600w" className="seta-outline-grande-2" />
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6da8b6be83b0d007045_7f371217-73b4-4a7a-a10e-2a28dd79dfe2.png" loading="lazy" alt="" className="seta-azul-peq-2" />
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6c1c6b0687b4b4cdbba_c75a9d30-651a-47f9-928b-7faacd62a797.png" loading="lazy" alt="" className="g-outline-1" />
        <div className="container-padrao w-container">
          <div className="simule">
            <div className="conteudo-simule">
              <h2 className="heading-3 h1-style">Request a Quote</h2>
              <div className="w-form">
                <form id="wf-form-Message" name="wf-form-Message" data-name="Message" method="get" data-wf-page-id="688c79b60ab12913199268e4" data-wf-element-id="91643574-d2cf-6617-d5fc-4709296b566f" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                  <label htmlFor="Name" className="field-label">Fill in the Form Below</label>
                  <input className="campo-form w-input" maxLength={256} name="Name" data-name="Name" placeholder="Name" type="text" id="Name" required />
                  <input className="campo-form w-input" maxLength={256} name="Company" data-name="Company" placeholder="Company" type="text" id="Company" required />
                  <input className="campo-form w-input" maxLength={256} name="Email" data-name="Email" placeholder="E-mail" type="email" id="Email-2" required />
                  <input className="campo-form w-input" maxLength={256} name="Phone" data-name="Phone" placeholder="Phone" type="text" id="Phone" required />
                  <input className="campo-form w-input" maxLength={256} name="Message" data-name="Message" placeholder="Message" type="text" id="Message" required />
                  <input type="submit" data-wait="Aguarde" className="botao-fundo-claro w-button" value="Submit" />
                </form>
                <div className="success-message-3 w-form-done">
                  <div>Obrigado por seu interesse, retornaremos o mais breve possível</div>
                </div>
                <div className="w-form-fail">
                  <div>Opa! Tem alguma coisa errada</div>
                </div>
              </div>
            </div>
            <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c83285fe593b6ba3795d_gitcogasint-2.webp" loading="lazy" alt="Gitco Gas LPG tanker trucks on a mountain road" className="image-4" />
          </div>
        </div>
      </div>
      <div className="pilares-novo-layout">
        <h2 className="branco-copy h1-style">Areas of Operation</h2>
        <div className="w-layout-grid grid-pilares">
          <div data-w-id="1218a927-7575-dd9e-1a47-52181be3b468" className="pilar-novo-layout">
            <div className="icone-pilares-novo">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926998_Asset_47.svg" loading="lazy" width="36" alt="" className="image-3" />
            </div>
            <div className="texto-pilar pilar-1">
              <div className="titulo-pilar">LPG Consulting and Supply Management</div>
              <div className="w-richtext">
                <ul role="list">
                  <li>Strategic planning for bulk LPG supply and storage</li>
                  <li>Tailored gas solutions for commercial and industrial clients</li>
                  <li>Safety-focused plant and cylinder filling operations</li>
                  <li>Regulatory compliance support (LPG Rules 2001)</li>
                  <li>Fleet management of LPG bowzers (270 MT capacity)</li>
                </ul>
              </div>
              <div className="linha-vertical" />
            </div>
          </div>
          <div className="pilar-novo-layout">
            <div className="icone-pilares-novo">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926990_Asset_49.svg" loading="lazy" alt="" width="43" className="image-3" />
            </div>
            <div className="texto-pilar pilar-2">
              <div className="titulo-pilar">Commercial and Domestic LPG Services</div>
              <div className="w-richtext">
                <ul role="list">
                  <li>Supply of 11.8 kg and 15 kg cylinders for household use</li>
                  <li>45.4 kg cylinder solutions for restaurants, bakeries, and commercial kitchens</li>
                  <li>Manifold system setup for multi-cylinder usage</li>
                  <li>Fast and reliable doorstep delivery service</li>
                </ul>
              </div>
              <div className="linha-vertical" />
            </div>
          </div>
          <div className="pilar-novo-layout">
            <div className="icone-pilares-novo">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926997_Asset_48.svg" loading="lazy" width="30" alt="" className="image-3" />
            </div>
            <div className="texto-pilar pilar-3">
              <div className="titulo-pilar">
                {"Market "}
                <br />
                intelligence
              </div>
              <div className="w-richtext">
                <ul role="list">
                  <li>Monitoring national LPG consumption trends</li>
                  <li>Pricing strategy based on seasonal and regional data</li>
                  <li>Data-driven planning for resource allocation</li>
                  <li>Tracking regulatory and policy updates in the LPG industry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="o-que-e">
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6891f630ac545145271db6f1_Gitco_Gas_International.png" loading="lazy" width="373.5" id="w-node-_46741327-ae7b-0aaa-2695-3d251f816a9c-199268e4" alt="Gitco Gas LPG supply chain: storage, transport and plant, through distribution to customers" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6891f630ac545145271db6f1_Gitco_Gas_International-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6891f630ac545145271db6f1_Gitco_Gas_International-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6891f630ac545145271db6f1_Gitco_Gas_International.png 1024w" sizes="(max-width: 479px) 100vw, 374px" />
        <div id="w-node-_7a92d6df-96d7-540f-c910-c0750acaa85c-199268e4" className="texto-o-que-e">
          <h2 className="h1-style">How LPG Supply Works</h2>
          <p>
            Gitco Gas manages the entire LPG supply process — from secure storage and cylinder filling to nationwide distribution. Our plant in Gilgit holds 122 MT of storage capacity and fills up to 20 MT of gas per day. LPG is delivered in sealed, quality-tested cylinders for both domestic and commercial use.
            <br />
            <br />
            {" We operate a dedicated fleet with a transport capacity of 270 MT, ensuring timely and safe delivery. Through our wide distributor network and expert management team, we guarantee a smooth, compliant, and efficient supply chain tailored to meet your energy needs."}
          </p>
          <a href="/how-lpg-supply-works" className="botao-fundo-claro w-button">How LPG Supply Works</a>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="horizontal-trigger" />
        <div className="sticky">
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab129131992696f_genial-webclip.png" loading="lazy" alt="" className="seta-azul-peq-3" />
          <div className="sticky-container">
            <h2 className="titulo-vantagens h1-style">Our Advantages</h2>
            <div className="wraper">
              <div className="list">
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/699b6b4cbbde13f9a4ddb498_icons8-money-60.png" loading="lazy" width="59" alt="" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Cost-Effective Solutions for Every Need</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926992_vantagens_2.svg" loading="lazy" width="24" alt="" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Strict Safety Compliance Standards</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926993_vantagens_3.svg" loading="lazy" alt="" width="65" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">{"Fast & Reliable Delivery Network"}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="imagem-slider-2">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a89e83b281b4264438322b_WhatsApp_Image_2025-08-09_at_9.37.58_AM-2.jpeg" loading="lazy" alt="Gitco Gas LPG storage plant in the snow with mountains behind" className="imagem-vantagens" />
            </div>
          </div>
        </div>
      </div>
      <Footer current="/" />
      <WebflowRuntime {...webflowPages.home} />
    </>
  );
}
