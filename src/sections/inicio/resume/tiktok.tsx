import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";
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

            <Resdescription/>
            <ButtonVerMas/>

        </div>

      </div>
    </section>
  );
}
