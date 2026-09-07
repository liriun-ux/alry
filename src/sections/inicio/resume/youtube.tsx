import Image from "next/image";

export default function ResYoutube() {
  return (
    <section className="res-youtube">
      <div className="res-youtube--content">

        <h1 className="res-youtube--title display">
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
        </h1>

        <p className="res-youtube--description sans">
          Descubre nuestro contenido, proyectos y novedades en YouTube.
          Descubre nuestro contenido, proyectos y novedades en YouTube.
        </p>

        <button className="res-youtube--button">
          
            Aprender más
        </button>

      </div>
    </section>
  );
}
