import Image from "next/image";
import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";
export default function ResFacebook() {
  return (
    <section className="res-facebook">
      <div className="res-facebook--content">

            <Resdescription/>

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

            <ButtonVerMas/>

      </div>
    </section>
  );
}
