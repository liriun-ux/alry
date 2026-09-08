
import Image from "next/image";

import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";
export default function ResGoogle() {
  return (
    <section className="res-google">
      <div className="res-google--content">


        {/* ICONO + TÍTULO */}
        <h1 className="res-google--title display">

          <Image
            className="res-google--icon"
            src="/img/icon-google.svg"
            alt="Facebook"
            width={80}
            height={80}
          />

          <span className="res-google--name">
            Google
          </span>

        </h1>
        <Resdescription text="Ahora mismo, alguien está buscando exactamente lo que tú ofreces. La pregunta es si tu negocio aparece o si esa búsqueda termina en la competencia. Descubre cuánto puede cambiar tu negocio con solo ser encontrado."/>
        <ButtonVerMas href="/google"/>
      </div>
    </section>
  );
}
