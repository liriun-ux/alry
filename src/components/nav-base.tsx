import Image from "next/image";
import Link from "next/link";
import Resdescription from "./res-description";
import ButtonVerMas from "./button-ver-mas";
import NavLinks from "./NavLinks";
import Description from "./description";

export default function NavBase() {
  return (
    <section className="nav-base">
      <div className="nav-base--content">

        {/* PARTE IZQUIERDA */}
            <NavLinks/>

        {/* PARTE DERECHA */}
        <div className="nav-base--right">
            <Description
            className="res-base--description"
  text="Un sitio web bien diseñado es la base de todo lo que viste aquí: SEO, IA, redes sociales y más. Descubre cómo LIRIUN-UX puede construir esa base sólida para tu marca."
  highlights={[
    { text: "sitio web",},
    { text: "LIRIUN-UX",},  
  ]}
/>
            <ButtonVerMas title="Visitar LIRIUN-UX" href="https://www.liriun-ux.tecnologia.bo"/>

        </div>
        {/* PARTE Footer */}
        <div className="nav-base--footer">
            <div className="nav-base--reserve display"> © LIRIUN-UX </div>
            <div className="nav-base--create-movil display"> creado por © LIRIUN-UX</div>
            <div className="nav-base--icons">

  <a
    href="https://facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/facebookDark.svg"
      alt="facebook"
      width={30}
      height={30}
    />
  </a>

  <a
    href="https://tiktok/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/tiktok.svg"
      alt="tiktok"
      width={30}
      height={30}
    />
  </a>

  <a
    href="https://www.liriun-ux.tecnologia.bo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/web-icon.svg"
      alt="site-web"
      width={30}
      height={30}
    />
  </a>

</div>
            <div className="nav-base--create display"> creado por LIRIUN-UX</div>
        </div>

      </div>
    </section>
  );
}
