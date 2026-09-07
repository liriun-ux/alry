import Image from "next/image";

export default function ResFacebook() {
  return (
    <section className="res-facebook">
      <div className="res-facebook--content">

        {/* DESCRIPCIÓN */}
        <p className="res-facebook--description sans">
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
          Descubre nuestro contenido, proyectos y novedades
          en Facebook.
        </p>

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

        {/* BOTÓN */}
        <button className="res-facebook--button">
          Aprender más
        </button>

      </div>
    </section>
  );
}
