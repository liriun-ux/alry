import ButtonVerMas from "@/components/button-ver-mas";
import Resdescription from "@/components/res-description";

export default function ResSiteWeb() {
  return (
    <section className="res-siteweb">
      <div className="res-siteweb--content">

        {/* PARTE IZQUIERDA */}
        <div className="res-siteweb--left">

          <h1 className="res-siteweb--title display">
            SITIO-WEB
          </h1>

          <div className="res-siteweb--concepts">

            <span className="res-siteweb--concept res-siteweb--google">
              GOOGLE
            </span>

            <span className="res-siteweb--concept res-siteweb--agents">
              AGENTES IA
            </span>

            <span className="res-siteweb--concept res-siteweb--browsers">
              NAVEGADORES
            </span>

          </div>

        </div>


        {/* PARTE DERECHA */}
        <div className="res-siteweb--right">


            <Resdescription/>
            <ButtonVerMas/>
        </div>

      </div>
    </section>
  );
}
