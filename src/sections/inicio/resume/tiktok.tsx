import Image from "next/image";

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

          <p className="res-tiktok--description sans">
            Descubre nuestro contenido, proyectos y novedades
            Descubre nuestro contenido, proyectos y novedades
            Descubre nuestro contenido, proyectos y novedades
            Descubre nuestro contenido, proyectos y novedades
            en TikTok.
          </p>

          <button className="res-tiktok--button">
            Aprender más
          </button>

        </div>

      </div>
    </section>
  );
}
