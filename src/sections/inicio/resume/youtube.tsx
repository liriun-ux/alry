import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Description from "@/components/description";
export default function ResYoutube() {
  return (
    <section className="res-youtube">
      <div className="res-youtube--content">

        <h2 className="res-youtube--title display">
          <Image
            className="res-youtube--icon "
            src="/img/youtube.svg"
            alt="YouTube"
            width={80}
            height={80}
          />

          <span className="res-youtube--name">
            YouTube
          </span>
        </h2>

            <Description className="res-base--description" text="Hay un algoritmo decidiendo en segundos si tu video merece ser visto por miles o quedar enterrado. Descubre qué mira realmente YouTube antes de recomendar un video, y cómo estar del lado correcto de esa decisión."/>

            <ButtonVerMas href="/youtube"/>
      </div>
    </section>
  );
}
