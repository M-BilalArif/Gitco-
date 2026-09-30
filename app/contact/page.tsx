import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import WebflowRuntime from "@/components/webflow/WebflowRuntime";
import { pageMetadata, webflowPages } from "@/lib/site";

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <Header current="/contact" />
      <div className="faixa-contato">
        <div className="container-padrao w-container">
          <div className="simule">
            <div className="conteudo-simule">
              <h1 className="heading-3">Contact Us Today</h1>
              <div className="w-form">
                <form id="wf-form-Message" name="wf-form-Message" data-name="Message" method="get" data-wf-page-id="688c79b60ab12913199268e7" data-wf-element-id="add4b733-928f-3db1-eda8-ca87bd3d631e" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                  <label htmlFor="Name" className="field-label">Fill in the Form Below</label>
                  <input className="campo-form w-input" maxLength={256} name="Name" data-name="Name" placeholder="Name" type="text" id="Name" required />
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
            <img src="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689888f22518f0777b1f892b_gitco-19.JPG" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="/assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689888f22518f0777b1f892b_gitco-19-p-500.jpg 500w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689888f22518f0777b1f892b_gitco-19-p-800.jpg 800w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689888f22518f0777b1f892b_gitco-19-p-1080.jpg 1080w, /assets/cdn.prod.website-files.com/688c79b60ab129131992689c/689888f22518f0777b1f892b_gitco-19.JPG 1280w" alt="Gitco Gas LPG storage tanks at the plant" className="image-4" />
          </div>
        </div>
      </div>
      <div className="faixa-mapa">
        <div className="box-mapa">
          <a href="https://maps.app.goo.gl/c9R9Go67fbN5R32t8" target="_blank" aria-label="Gitco Gas office on Google Maps" className="mapa-contato w-inline-block" />
          <div className="box-endereco">
            <div className="cidade">HEAD OFFICE ADDRESS</div>
            <div className="endereco-linhas">
              <div className="fontawsome">{"\uf3c5"}</div>
              <div>Gitco Gas Private Limited, River View Road, Near City Hospital, Kashrote, Gilgit.</div>
            </div>
            <div className="endereco-linhas">
              <div className="fontawsome-2">{"\uf0e0"}</div>
              <div>info@gitco.com.pk</div>
            </div>
            <div className="endereco-linhas">
              <div className="fontawsome">{"\uf095"}</div>
              <div>
                <a href="tel:+923425276658" className="link-3">+92 342 527 6658</a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-mapa sp">
          <a href="https://maps.app.goo.gl/eF7ehdQEt8evyRMq5" target="_blank" aria-label="Gitco Gas plant on Google Maps" className="mapa-contato sp w-inline-block" />
          <div className="box-endereco sp">
            <div className="cidade">PLANT ADDRESS</div>
            <div className="endereco-linhas">
              <div className="fontawsome">{"\uf3c5"}</div>
              <div>
                GITCO Gas Private Limited, KKH Road Minawar
                <br />
                Gilgit
              </div>
            </div>
            <div className="endereco-linhas">
              <div className="fontawsome-2">{"\uf0e0"}</div>
              <div>
                <a href="mailto:contato@genial.energy" className="link-2">info@gitco.com.pk</a>
              </div>
            </div>
            <div className="endereco-linhas">
              <div className="fontawsome">{"\uf095"}</div>
              <div>
                <a href="tel:+923425276658" className="link">+92 342 527 6658</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer current="/contact" />
      <WebflowRuntime {...webflowPages.contact} />
    </>
  );
}
