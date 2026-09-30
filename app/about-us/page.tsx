import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import WebflowRuntime from "@/components/webflow/WebflowRuntime";
import { pageMetadata, webflowPages } from "@/lib/site";

export const metadata = pageMetadata.aboutUs;

export default function AboutUsPage() {
  return (
    <>
      <Header current="/about-us" />
      <div className="hero hero-mercado">
        <div data-poster-url="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-poster-00001.jpg" data-video-urls="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-transcode.mp4,/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
          <video id="97e07ae5-edf6-f08b-d682-b6ab8843eb5d-video" autoPlay loop style={{ backgroundImage: "url(/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-poster-00001.jpg)" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-transcode.mp4" data-wf-ignore="true" />
            <source src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68a887fdd43324d3b94b754c_WhatsApp_Video_2025-08-09_at_93753_AM-transcode.webm" data-wf-ignore="true" />
          </video>
          <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png" loading="lazy" width="300" sizes="(max-width: 479px) 100vw, 300px" alt="" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c5b4d5849c5ab5f71b05_688c79b60ab12913199268f9_seta_grande_hero_2x_-_Edited.png 600w" className="seta-outline-grande" />
          <h1>ABOUT GITCO</h1>
        </div>
      </div>
      <div className="faixa-somos-genial">
        <div className="colunas-grid">
          <div className="coluna-1">
            <h2 className="h1-style">Brand Overview</h2>
            <p>Gitco Gas is a brand committed to providing safe, reliable, and accessible LPG solutions across Pakistan. We believe in innovation, inclusion, and delivering energy services with simplicity and efficiency. Our modern infrastructure, certified safety standards, and strong distribution network allow us to serve both residential and commercial customers with the highest quality and care.</p>
            <div className="interacao-somos">
              <a data-w-id="d1fc2853-bedf-19eb-eeda-73dcbe255d6b" style={{ backgroundColor: "rgb(0,154,222)" }} href="#" className="empresas-genial">Driven by Values</a>
              <a data-w-id="22c8bbf4-7288-3d7a-e3f3-2dd06caad1a0" href="#" className="empresas-genial">mission statement</a>
              <a data-w-id="e3273786-487d-e8b1-b55a-878e2fef1675" href="#" className="empresas-genial">vision statement</a>
            </div>
          </div>
          <div className="miolos-somos">
            <div className="miolo-somos miolo-banco">
              <div className="coluna-70">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" loading="lazy" width="180" sizes="(max-width: 479px) 100vw, 180px" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" />
                <p>We aim to be the leading LPG provider across Pakistan, recognized for setting benchmarks in safety, reliability, and service excellence. Our goal is to inspire global standards of leadership in the energy sector. From project inception to fully operational units, Gitco Gas delivers end-to-end LPG solutions with a commitment to continuous improvement and innovation.</p>
              </div>
              <div className="box-imagem-somos">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d7239547da4d4be7ad5_mountain.png" loading="lazy" alt="" className="imagem-banco" />
              </div>
            </div>
            <div className="miolo-somos miolo-investimentos">
              <div className="coluna-70">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" loading="lazy" width="180" sizes="(max-width: 479px) 100vw, 180px" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" />
                <p>At Gitco Gas, our mission is to deliver the highest quality LPG and LPG services directly to our customers’ doorsteps. We are committed to providing personalized solutions with convenience, speed, and reliability. Leveraging our expertise and strong partnerships with service-conscious vendors, we ensure rapid response to customer needs, minimize downtime, and consistently meet even the most specialized requests.</p>
              </div>
              <div className="box-imagem-somos">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d614892c1d59c1d6aef_dart_17638035.png" loading="lazy" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d614892c1d59c1d6aef_dart_17638035-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d614892c1d59c1d6aef_dart_17638035.png 512w" alt="" className="imagem-banco-2" />
              </div>
            </div>
            <div className="miolo-somos miolo-energia">
              <div className="coluna-70">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png" loading="lazy" width="180" sizes="(max-width: 479px) 100vw, 180px" alt="Gitco Gas" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689205185f8f425e2f1362ec_logo.png 1698w" />
                <p>
                  {"As the LPG division of Gitco, we specialize in storage, bottling, and nationwide distribution. Our facilities include a "}
                  <strong>122 MT storage capacity</strong>
                  {", "}
                  <strong>20 MT daily filling plant</strong>
                  {", and a "}
                  <strong>270 MT bowzer fleet</strong>
                  {" ensuring continuous and timely supply. Backed by years of expertise and strict compliance with "}
                  <strong>{"LPG (Production & Distribution) Rules 2001"}</strong>
                  , we guarantee the safe, efficient, and cost-effective delivery of LPG to every customer, every time.
                  <br />
                </p>
              </div>
              <div className="box-imagem-somos">
                <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d32db59261747162a93_fire-danger_18632555.png" loading="lazy" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d32db59261747162a93_fire-danger_18632555-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988d32db59261747162a93_fire-danger_18632555.png 512w" alt="" className="imagem-banco-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-padrao" />
      </div>
      <div className="faixa-numeros-nova">
        <h2 className="h1-style">Gitco Gas in Numbers</h2>
        <div className="bloco-numeros-novo">
          <div className="bloco-numeros n1">
            <div className="numero-novo-destaque">+ 500</div>
            <div className="texto-numeros">
              <p>Satisfied customers served across residential, commercial, and industrial sectors nationwide.</p>
            </div>
          </div>
          <div className="bloco-numeros n1">
            <div className="numero-novo-destaque">20 +</div>
            <div className="texto-numeros">
              <p>Combined team experience in LPG supply, safety standards, and customer service.</p>
            </div>
          </div>
          <div className="bloco-numeros n1">
            <div className="numero-novo-destaque">98%</div>
            <div className="texto-numeros">
              <p>On-time delivery rate, reflecting our commitment to reliability and customer satisfaction.</p>
            </div>
          </div>
          <div className="bloco-numeros n1">
            <div className="numero-novo-destaque">
              {"50,000 "}
              <span className="destaque-novo-menor">Cylinders</span>
              {" "}
            </div>
            <div className="texto-numeros">
              <p>Delivered annually, ensuring safety, efficiency, and timely supply.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="miolo">
        <h2 className="centralizado tit-socios h1-style">A Word from the Executives</h2>
        <div className="socios justificado">
          <div className="socio">
            <div className="box-foto-socio">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr.png" loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 767px) 65vw, (max-width: 991px) 28vw, 233px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr-p-1600.png 1600w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb790a90a55a41648cc_drrr.png 2125w" alt="Mr. Abdul Aleem" className="foto-socio" />
            </div>
            <h3 className="centralizado exec h1-style">Mr. Abdul Aleem</h3>
            <div className="cargo">diretor regulatório</div>
            <p className="justificado">As Chief Executive Officer, Mr. Abdul Aleem leads the company’s strategic direction and oversees daily operations, ensuring efficiency and optimal resource use. Serving as the public face of Gitco Gas, he is dedicated to delivering high-quality LPG services while driving innovation and empowering customers with effective, tailored solutions. His commitment to performance improvement and the company’s values ensures consistent excellence across all operations.</p>
          </div>
          <div className="socio">
            <div className="box-foto-socio">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fe777f05af9fb1f53fd_Muhammad_Amin_Jan_Baig.png" loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 767px) 65vw, (max-width: 991px) 28vw, 233px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fe777f05af9fb1f53fd_Muhammad_Amin_Jan_Baig-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fe777f05af9fb1f53fd_Muhammad_Amin_Jan_Baig-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fe777f05af9fb1f53fd_Muhammad_Amin_Jan_Baig.png 1080w" alt="Mr. Amin Baig" className="foto-socio" />
            </div>
            <h3 className="centralizado exec h1-style">Mr. Amin Baig</h3>
            <div className="cargo">DIRETOR DE TRADING</div>
            <p className="justificado">Mr. Muhammad Amin is actively involved in shaping the company’s long-term vision and strategic growth. He works closely with the executive team to ensure operational efficiency, financial stability, and alignment with Gitco Gas’s core values. His strong business insight and commitment to excellence help guide the company’s expansion while maintaining the highest standards of safety, compliance, and customer service.</p>
          </div>
          <div className="socio">
            <div className="box-foto-socio">
              <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD.png" loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 767px) 65vw, (max-width: 991px) 28vw, 233px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD-p-500.png 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD-p-800.png 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD-p-1080.png 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD-p-1600.png 1600w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD-p-2000.png 2000w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/68988fb7668b882377c200fa_DD.png 2125w" alt="Mr. Shabbir" className="foto-socio" />
            </div>
            <h3 className="centralizado exec h1-style">Mr. Shabbir</h3>
            <div className="cargo">diretor comercial</div>
            <p>Mr. Shabbir brings extensive expertise in business development and market expansion to Gitco Gas. He is instrumental in forging strong relationships with clients, partners, and distributors, ensuring the company’s services reach communities across Pakistan. Passionate about customer satisfaction, he champions initiatives that enhance service accessibility, operational reliability, and long-term value for customers and stakeholders alike.</p>
          </div>
        </div>
        <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/6898c6c1c6b0687b4b4cdbba_c75a9d30-651a-47f9-928b-7faacd62a797.png" loading="lazy" alt="" className="g-outline-2" />
      </div>
      <Footer current="/about-us" />
      <WebflowRuntime {...webflowPages.aboutUs} />
    </>
  );
}
