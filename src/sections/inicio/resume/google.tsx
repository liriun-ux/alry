
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
        <Resdescription/>
        <ButtonVerMas/>
      </div>
    </section>
  );
}
