
import Image from "next/image";

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

        {/* DESCRIPCIÓN */}
        <p className="res-google--description sans">
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
        </p>


        {/* BOTÓN */}
        <button className="res-google--button">
          Aprender más
        </button>

      </div>
    </section>
  );
}
