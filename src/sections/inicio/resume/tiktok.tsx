import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Description from "@/components/description";
export default function ResTiktok() {
  return (
    <section className="res-tiktok">
      <div className="res-tiktok--content">

        {/* PARTE IZQUIERDA */}
        <div className="res-tiktok--left">

          <Image
            className="res-tiktok--icon"
            src="/img/tiktok.svg"
            alt="TikTok"
            width={80}
            height={80}
          />

          <h1 className="res-tiktok--title display">
            TikTok
          </h1>

        </div>

        {/* PARTE DERECHA */}
        <div className="res-tiktok--right">

            <Description className="res-base--description" text="En TikTok, tus primeros 3 segundos valen más que todo el resto del video junto. Conoce las señales exactas que el algoritmo evalúa para decidir si tu contenido explota o desaparece en silencio."/>
            <ButtonVerMas href="/tiktok"/>

        </div>

      </div>
    </section>
  );
}
