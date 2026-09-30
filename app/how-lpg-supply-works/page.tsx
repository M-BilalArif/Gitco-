import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import WebflowRuntime from "@/components/webflow/WebflowRuntime";
import { pageMetadata, webflowPages } from "@/lib/site";

export const metadata = pageMetadata.howLpgSupplyWorks;

export default function HowLpgSupplyWorksPage() {
  return (
    <>
      <Header current="/how-lpg-supply-works" />
      <div className="hero hero-mercado">
        <div data-poster-url="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-poster-00001.jpg" data-video-urls="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-transcode.mp4,/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
          <video id="97e07ae5-edf6-f08b-d682-b6ab8843eb5d-video" autoPlay loop style={{ backgroundImage: "url(/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-poster-00001.jpg)" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-transcode.mp4" data-wf-ignore="true" />
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a88c891d56ce66ccb3bbc0_11290-229221024-transcode.webm" data-wf-ignore="true" />
          </video>
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png 600w" className="seta-outline-grande" />
          <h1>How LPG Works</h1>
        </div>
      </div>
      <div className="miolo">
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png 600w" className="seta-outline-grande-3" />
        <div className="container-grafico">
          <div className="texto-grafico w-richtext">
            <h2 className="h1-style">Efficiency and Reliability in LPG Supply</h2>
            <h4>With a robust supply network and extensive distribution capabilities, Gitco Gas ensures safe, efficient, and cost-effective LPG delivery across Pakistan. Our clients benefit from consistent access to certified gas cylinders, flexible delivery options, and operational transparency. We support both residential and commercial users by providing tailored solutions, whether through bulk supply, manifold systems, or sealed household cylinders, all handled with the highest safety standards.</h4>
          </div>
          <div className="box-grafico">
            <div className="box-cativo">
              <div className="grafico-cativo">
                <div>
                  Gitco Standardized Service
                  <br />
                  (Certified Filling, Sealed Cylinders, Timely Delivery)
                </div>
              </div>
              <div className="legenda-grafico">Gitco Gas Service</div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="horizontal-trigger" />
        <div className="sticky">
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6da8b6be83b0d007045_7f371217-73b4-4a7a-a10e-2a28dd79dfe2.png" loading="lazy" alt="" className="seta-azul-peq-5" />
          <div className="sticky-container">
            <h2 className="titulo-vantagens h1-style">Where We Stand</h2>
            <div className="wraper">
              <div className="list">
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <div className="cenario-destaque">33%</div>
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926991_cenario1.svg" loading="lazy" alt="" width="38" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">LPG remains a vital energy source for cooking, heating, and backup in areas without piped gas access.</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <div className="cenario-destaque">85%</div>
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926995_cenario2.svg" loading="lazy" alt="" width="36" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Over 60% of small industries use LPG for thermal processes</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <div className="cenario-destaque bilhoes">
                      200
                      <span className="destaque-menor">bi</span>
                    </div>
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/699b6b4cbbde13f9a4ddb498_icons8-money-60.png" loading="lazy" alt="" width="43.5" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Many commercial users have switched to LPG for its cleaner burn, lower emissions, and cost benefits.</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <div className="cenario-destaque">47%</div>
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab129131992698e_vantagens_4.svg" loading="lazy" alt="" width="22.5" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Gitco Gas reaches remote towns and urban centers alike through a growing network of authorized distributors across Pakistan.</h4>
                  </div>
                </div>
                <div className="horizontal-item">
                  <div className="conteudo-vantagens-2">
                    <div className="cenario-destaque">22%</div>
                    <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926996_cenario5.svg" loading="lazy" alt="" width="32" className="vantagem-imagem-2" />
                    <h4 className="vanx-2">Our plant operations, transport, and cylinder filling all follow strict national safety regulations to protect customers and staff.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="imagem-slider-2">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689824c6fbc90a1bc93eac00_WhatsApp_Image_2025-08-10_at_6.55.04_AM-2.jpeg" loading="lazy" sizes="100vw" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689824c6fbc90a1bc93eac00_WhatsApp_Image_2025-08-10_at_6.55.04_AM-2-p-500.jpeg 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689824c6fbc90a1bc93eac00_WhatsApp_Image_2025-08-10_at_6.55.04_AM-2-p-800.jpeg 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689824c6fbc90a1bc93eac00_WhatsApp_Image_2025-08-10_at_6.55.04_AM-2-p-1080.jpeg 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689824c6fbc90a1bc93eac00_WhatsApp_Image_2025-08-10_at_6.55.04_AM-2.jpeg 1280w" alt="Gitco Gas LPG plant with storage tanks and mountains in the background" className="imagem-vantagens" />
            </div>
          </div>
        </div>
      </div>
      <div className="faixa-largura-total-centralizado">
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png 600w" className="seta-outline-grande-5" />
        <div className="texto-se-voce" />
        <div className="w-layout-blockcontainer container-2 w-container">
          <h2 className="titulo-vantagens h1-style">OUR DISTRIBUTORS</h2>
          <div className="div-block-2">
            <div className="table-grid-6">
              <div className="col-1">
                <div id="w-node-a1259ca4-9ec8-3af6-4878-03cbc355490a-199268ea" className="text-block-3">S.No</div>
              </div>
              <div className="col-2">
                <div>Agency Code</div>
              </div>
              <div className="col-3">
                <div className="text-block-4">Name of Distributor</div>
              </div>
              <div className="col-4">
                <div className="text-block-5">Address</div>
              </div>
              <div className="col-5">
                <div className="text-block-12">Shop Name</div>
              </div>
              <div className="col-6">
                <div className="text-block-13">Contact Number</div>
              </div>
            </div>
            <div className="collection-list-wrapper w-dyn-list">
              <div role="list" className="collection-list w-dyn-items">
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">1</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">101</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Abdul Aleem</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">River View Road Near Press Club - Gilgit</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">River view Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03554226045</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">2</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">102</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Shabbir Ahmad</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Zulfiquar Abad Road Near Civil supply Jutail - Gilgit</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Jutail Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03554199001</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">3</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">103</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Dilnawaz</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Main Bazar Ghakouch Ghizer</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Ghakouch Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">0355109451</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">4</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">104</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Mir Shahid Iqbal</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Mir Gas Co Konodas near old bridge - Gilgit</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Mir Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03441153148</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">5</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">105</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Rizwan Ali</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Baig Market Danyore - Gilgit</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Danyore Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03448840782</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">6</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">106</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Jamil</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Main Bazar khaplu - Skardu</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Khaplu Gas Company</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03555201818</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">7</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">107</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Rizwan Ali</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Main Bazar Yadgar - Skardu</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Skardu Gas Co</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03469556756</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">8</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">108</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Abuzar</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">College Road - Skardu</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Abuzar Gas Co</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03469673571</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">9</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">109</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Saifullah</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Main Market Shiger - Skardu</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Shiger Gas Co</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">03498885165</div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="collection-item-2 w-dyn-item">
                  <div className="table-row table-grid-6">
                    <div className="col-1">
                      <div className="text-block-6">10</div>
                    </div>
                    <div className="col-2">
                      <div className="text-block-7">110</div>
                    </div>
                    <div className="col-3">
                      <div className="text-block-8">Sajid Hussain</div>
                    </div>
                    <div className="col-4">
                      <div className="text-block-9">Main Pershan Chowk Skardu</div>
                    </div>
                    <div className="col-5">
                      <div className="text-block-10">Sajid Gas Co</div>
                    </div>
                    <div className="col-6">
                      <div className="text-block-11">N/A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faixa-largura-total">
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6da8b6be83b0d007045_7f371217-73b4-4a7a-a10e-2a28dd79dfe2.png" loading="lazy" alt="" className="seta-azul-peq-6" />
        <h2 className="titulo-etapas h1-style">Gitco Gas takes care of your transition to a more efficient LPG supply</h2>
        <div className="etapa-imagem-box im1" />
        <div className="bloco-etapa e1">
          <div className="numero-etapa">1</div>
          <div className="texto-etapa">
            <div className="w-richtext">
              <h3>Assessment of your current LPG consumption</h3>
              <p>We analyze your gas usage and delivery patterns to determine eligibility for a more cost-effective and efficient LPG supply through Gitco. If viable, we compare the current vs. Gitco’s standardized offering.</p>
            </div>
          </div>
        </div>
        <div className="etapa-imagem-box im2" />
        <div className="bloco-etapa e2">
          <div className="numero-etapa">2</div>
          <div className="texto-etapa">
            <div className="w-richtext">
              <h3>Analysis of existing contracts with suppliers</h3>
              <p>We review your current supply terms, delivery reliability, safety measures, and pricing to identify opportunities for better service with Gitco Gas.</p>
            </div>
          </div>
        </div>
        <div className="bloco-etapa e3">
          <div className="numero-etapa">3</div>
          <div className="texto-etapa">
            <div className="w-richtext">
              <h3>Switching to LPG with Gitco</h3>
              <p>{"We handle the full transition to LPG energy for your business or home, including installation, safety checks, and documentation. With Gitco’s experienced team, you'll enjoy a seamless setup, from initial assessment to final delivery, backed by certified metering and industry-compliant safety protocols."}</p>
            </div>
          </div>
        </div>
        <div className="bloco-etapa e4">
          <div className="numero-etapa">4</div>
          <div className="texto-etapa">
            <div className="w-richtext">
              <h3>{"Reliable Supply & Delivery"}</h3>
              <p>Once your system is set up, Gitco Gas ensures a steady, on-time LPG supply through our nationwide network of authorized distributors and dedicated fleet of bowzers. We coordinate schedules to suit your needs, whether for households, commercial kitchens, or industrial plants.</p>
            </div>
          </div>
        </div>
        <div className="bloco-etapa e5">
          <div className="numero-etapa">5</div>
          <div className="texto-etapa">
            <div className="w-richtext">
              <h3>{"Ongoing Support & Safety Assurance"}</h3>
              <p>Our commitment doesn’t stop at delivery. We provide continuous customer support, regular safety inspections, and maintenance checks to guarantee your LPG system operates efficiently and securely</p>
            </div>
          </div>
        </div>
      </div>
      <div className="faixa-faq">
        <div className="texto-faq">
          <h2 className="titulo-faq h1-style">Frequently Asked Questions</h2>
          <div className="bloco-faq w-clearfix">
            <h4 className="titulo-faq2">What types of LPG cylinders does Gitco Gas offer?</h4>
            <a data-w-id="5181b9ce-fe8f-d783-7d7c-6c7216a04092" href="#" aria-label="Show answer" className="mais-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926989_mais_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <a data-w-id="da581460-05e4-ab60-79fa-82cb5ab19e96" style={{ display: "none" }} href="#" aria-label="Hide answer" className="menos-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926985_menos_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <div style={{ height: "0px" }} className="texto-bloco-faq">
              <div className="w-richtext">
                <p>We provide 11.8 kg and 15 kg cylinders for household use, and 45.4 kg cylinders for commercial applications. All cylinders come sealed and certified, ensuring quality and safety.</p>
              </div>
            </div>
          </div>
          <div className="separador" />
          <div className="bloco-faq w-clearfix">
            <h4 className="titulo-faq2">Do you deliver LPG to all areas in Pakistan?</h4>
            <a data-w-id="b2f9e81c-aca5-0a42-7431-be5dd0db7fd0" href="#" aria-label="Show answer" className="mais-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926989_mais_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <a data-w-id="b2f9e81c-aca5-0a42-7431-be5dd0db7fd2" style={{ display: "none" }} href="#" aria-label="Hide answer" className="menos-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926985_menos_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <div style={{ height: "0px" }} className="texto-bloco-faq">
              <div className="w-richtext">
                <p>Yes. Through our nationwide network of authorized distributors, we supply LPG to urban, rural, and remote areas across Pakistan.</p>
              </div>
            </div>
          </div>
          <div className="separador" />
          <div className="bloco-faq w-clearfix">
            <h4 className="titulo-faq2">How does Gitco ensure the safety of its LPG supply?</h4>
            <a data-w-id="33c57482-ce78-2d81-bafe-d5fba6ba5fe9" href="#" aria-label="Show answer" className="mais-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926989_mais_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <a data-w-id="33c57482-ce78-2d81-bafe-d5fba6ba5feb" style={{ display: "none" }} href="#" aria-label="Hide answer" className="menos-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926985_menos_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <div style={{ height: "0px" }} className="texto-bloco-faq">
              <div className="w-richtext">
                <p>{"We strictly follow the LPG (Production & Distribution) Rules 2001. All cylinders are filled at our certified plant in Gilgit, sealed before dispatch, and transported in compliance with national safety standards."}</p>
              </div>
            </div>
          </div>
          <div className="separador" />
          <div className="bloco-faq w-clearfix">
            <h4 className="titulo-faq2">Can Gitco Gas supply LPG for industrial use?</h4>
            <a data-w-id="b95bfae5-9698-62cc-8912-990eda1957a0" href="#" aria-label="Show answer" className="mais-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926989_mais_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <a data-w-id="b95bfae5-9698-62cc-8912-990eda1957a2" style={{ display: "none" }} href="#" aria-label="Hide answer" className="menos-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926985_menos_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <div style={{ height: "0px" }} className="texto-bloco-faq">
              <div className="w-richtext">
                <p>Absolutely. With a 122 MT storage capacity, 20 MT daily filling capacity, and 270 MT bowzer fleet, we handle bulk supply for industrial plants, manufacturing units, and large commercial kitchens.</p>
              </div>
            </div>
          </div>
          <div className="separador" />
          <div className="bloco-faq w-clearfix">
            <h4 className="titulo-faq2">How can I become an authorized Gitco Gas distributor?</h4>
            <a data-w-id="d9c9a6aa-f5a5-5d94-ba84-7f925f2241ac" href="#" aria-label="Show answer" className="mais-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926989_mais_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <a data-w-id="d9c9a6aa-f5a5-5d94-ba84-7f925f2241ae" style={{ display: "none" }} href="#" aria-label="Hide answer" className="menos-faq w-inline-block">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/688c79b60ab1291319926985_menos_2x.png" loading="lazy" width="22.5" alt="" />
            </a>
            <div style={{ height: "0px" }} className="texto-bloco-faq">
              <div className="w-richtext">
                <p>
                  <a href="/about-us">You can contact our sales team via the Contact Us page. We’ll review your application, discuss requirements, and guide you through the onboarding process.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-imagem-box" />
      </div>
      <Footer current="/how-lpg-supply-works" />
      <WebflowRuntime {...webflowPages.howLpgSupplyWorks} />
    </>
  );
}
