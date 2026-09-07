import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";
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

            <Resdescription/>

            <ButtonVerMas/>
      </div>
    </section>
  );
}
