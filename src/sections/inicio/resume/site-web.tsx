import ButtonVerMas from "@/components/button-ver-mas";
import Description from "@/components/description";
import Resdescription from "@/components/res-description";

export default function ResSiteWeb() {
  return (
    <section className="res-siteweb">
      <div className="res-siteweb--content">

        {/* PARTE IZQUIERDA */}
        <div className="res-siteweb--left">

          <h2 className="res-siteweb--title display">
            SITIO-WEB
          </h2>

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


            <Description
            className="res-base--description"
  text="Imagina un letrero que muestra tus productos, precios y contacto las 24 horas, incluso mientras duermes. Eso es exactamente lo que puede hacer por tu marca un sitio web bien construido. Descubre todo lo que puede hacer por ti."
  highlights={[
    {
      text: "sitio web",
    },
    {
      text: "24 horas",
    },
    {
      text: "letrero",
    },
  ]}
/>

            <ButtonVerMas href="sitio-web"/>
        </div>

      </div>
    </section>
  );
}
