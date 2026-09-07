import Image from "next/image";
import Link from "next/link";
import Resdescription from "./res-description";
import ButtonVerMas from "./button-ver-mas";
import NavLinks from "./NavLinks";

export default function NavBase() {
  return (
    <section className="nav-base">
      <div className="nav-base--content">

        {/* PARTE IZQUIERDA */}
            <NavLinks/>

        {/* PARTE DERECHA */}
        <div className="nav-base--right">
            <Resdescription/>
            <ButtonVerMas/>
        </div>
        {/* PARTE Footer */}
        <div className="nav-base--footer">
            <div className="nav-base--reserve display"> © LIRIUN-UX </div>
            <div className="nav-base--create-movil display"> creado por © LIRIUN-UX</div>
            <div className="nav-base--icons">

  <a
    href="https://chatgpt.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/openai.svg"
      alt="OpenAI"
      width={30}
      height={30}
    />
  </a>

  <a
    href="https://claude.ai/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/claude.svg"
      alt="Claude"
      width={30}
      height={30}
    />
  </a>

  <a
    href="https://gemini.google.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="nav-base--icon"
      src="/img/gemini.svg"
      alt="Gemini"
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
