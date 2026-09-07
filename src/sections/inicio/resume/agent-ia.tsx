import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";

export default function ResAgentIa() {
  return (
    <section className="res-agent-ia">
      <div className="res-agent-ia--content">

        {/* PARTE IZQUIERDA */}
        <div className="res-agent-ia--left">

          <h1 className="res-agent-ia--title display">
            Agente IA
          </h1>

          <div className="res-agent-ia--icons">

            <Image
              className="res-agent-ia--icon"
            src="/img/openai.svg"
              alt="IA"
              width={60}
              height={60}
            />

            <Image
              className="res-agent-ia--icon"
            src="/img/claude.svg"
              alt="IA"
              width={60}
              height={60}
            />

            <Image
              className="res-agent-ia--icon"
            src="/img/gemini.svg"
              alt="IA"
              width={60}
              height={60}
            />

          </div>

        </div>


        {/* PARTE DERECHA */}
        <div className="res-agent-ia--right">

            <Resdescription text="Descubre nuestro contenido, proyectos y novedades          en hello.          Descubre nuestro contenido, proyectos y novedades          en Facebook.          Descubre nuestro contenido, proyectos y novedades agentIA"/>
            <ButtonVerMas/>

        </div>

      </div>
    </section>
  );
}
