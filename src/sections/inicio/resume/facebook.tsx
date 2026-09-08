import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Description from "@/components/description";
export default function ResFacebook() {
  return (
    <section className="res-facebook">
      <div className="res-facebook--content">

            <Description className="res-base--description" text="No todos los 'me gusta' valen lo mismo para Facebook, y muchas marcas cometen errores que reducen su alcance sin saberlo. Descubre qué está premiando (y qué está castigando) el algoritmo hoy."/>

        {/* ICONO + TÍTULO */}
        <h1 className="res-facebook--title display">

          <Image
            className="res-facebook--icon"
            src="/img/facebook.svg"
            alt="Facebook"
            width={80}
            height={80}
          />

          <span className="res-facebook--name">
            Facebook
          </span>

        </h1>

            <ButtonVerMas href="/facebook"/>

      </div>
    </section>
  );
}
