import Image from "next/image";

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

          <p className="res-agent-ia--description sans">
          e
            inteligencia artificial capaces de encontrar,
            analizar y mostrar tu contenido.

            Potencia tu presencia digital con agentes de
            inteligencia artificial capaces de encontrar,
            analizar y mostrar tu contenido.
            Potencia tu presencia digital con agentes de
            inteligencia artificial capaces de encontrar,
            analizar y mostrar tu contenido.
          </p>

          <button className="res-agent-ia--button">
            Aprender más
          </button>

        </div>

      </div>
    </section>
  );
}
