


import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

export default function SitioWebPage() {


const items = [
  {
    titulo: "Tu vitrina que nunca cierra",
    descripcion: "Un sitio web funciona como un letrero digital gigante que está encendido las 24 horas, los 365 días del año. Mientras duermes, mientras es feriado, o incluso cuando tu local físico está cerrado, tu sitio sigue mostrando tus productos, precios y contactos a cualquier persona que te busque en ese momento.",
  },
  {
    titulo: "La diferencia entre 'existir' y 'ser encontrado'",
    descripcion: "Tener redes sociales es como tener un puesto en una feria: solo te ven si pasan justo por ahí en ese momento. Tener un sitio web es como tener una dirección fija en el mapa de la ciudad: cualquiera puede encontrarte cuando lo necesite, sin depender de la casualidad de que tu contenido aparezca en su feed ese día.",
  },
  {
    titulo: "Un solo lugar con toda la información, siempre actualizada",
    descripcion: "En lugar de que un cliente tenga que escribirte para preguntar el horario, el precio o si tienes algo disponible, un sitio web responde esas preguntas de forma instantánea. Es como tener un vendedor que jamás se cansa de repetir la misma información, disponible para miles de personas al mismo tiempo, sin hacerlas esperar una respuesta.",
  },
  {
    titulo: "La puerta de entrada que Google necesita para recomendarte",
    descripcion: "Google no puede recomendar lo que no puede leer. Un sitio web es la fuente principal de información que Google usa para decidir a quién mostrar cuando alguien busca tu tipo de negocio. Sin un sitio, le estás pidiendo a Google que te recomiende sin darle ningún material para hacerlo.",
  },
  {
    titulo: "El pasaporte para ser recomendado por la inteligencia artificial",
    descripcion: "De la misma forma en que un currículum bien armado ayuda a un reclutador a decidir a quién contratar, un sitio web bien estructurado le da a las inteligencias artificiales el 'currículum' de tu negocio: qué haces, cuánto cuesta y por qué elegirte. Sin ese documento, simplemente no tienes forma de entrar en esa conversación.",
  },
  {
    titulo: "Un activo que te pertenece, no que alquilas",
    descripcion: "Las redes sociales son como un local alquilado dentro del centro comercial de otra empresa: las reglas las pone el dueño del centro comercial, y puede cambiarlas, cobrarte más visibilidad, o incluso cerrarte el local sin aviso. Un sitio web es tu propio terreno: nadie puede quitártelo, limitarlo ni cambiarte las reglas de un día para otro.",
  },
  {
    titulo: "La primera impresión antes de cualquier contacto humano",
    descripcion: "Antes de llamar, escribir o visitar un negocio, la mayoría de las personas entra primero a internet para 'formarse una idea'. Un sitio web bien presentado es como recibir a ese cliente con un traje impecable antes de siquiera saludarlo: genera una primera impresión de seriedad que ninguna conversación posterior puede corregir del todo si parte de una mala imagen inicial.",
  },
  {
    titulo: "Contacto siempre a la vista, sin depender de que alguien conteste",
    descripcion: "Un sitio web mantiene visible tu teléfono, dirección, correo y redes sociales en todo momento, como un letrero que apunta siempre hacia la puerta correcta. Así, aunque nadie esté disponible para responder mensajes en ese instante, el cliente ya tiene el camino claro para contactarte apenas lo decida, sin frustrarse buscando cómo llegar a ti.",
  },
  {
    titulo: "Mostrar el catálogo completo sin límite de espacio",
    descripcion: "A diferencia de un local físico limitado por el espacio de sus estanterías, o una red social donde las publicaciones viejas se pierden en el tiempo, un sitio web puede mostrar absolutamente todos tus productos o servicios organizados y disponibles para consulta en cualquier momento, sin que ninguno quede 'guardado en la bodega' fuera de la vista del cliente.",
  },
  {
    titulo: "Construir una reputación que se puede mostrar, no solo contar",
    descripcion: "Un sitio web permite reunir en un solo lugar testimonios, casos de éxito, certificaciones o trabajos anteriores, funcionando como una carpeta de presentación siempre disponible. En lugar de simplemente decir 'somos buenos en lo que hacemos', el sitio se lo demuestra al cliente con evidencia concreta, antes de que este tenga que preguntarlo.",
  },
  {
    titulo: "El punto de encuentro entre todos tus canales",
    descripcion: "Ya sea que un cliente te encuentre por Instagram, por una recomendación, por Google o por una IA, el sitio web funciona como el punto central donde todos esos caminos finalmente se encuentran para cerrar la decisión de compra. Sin ese punto de encuentro, cada canal queda aislado, obligando al cliente a armar la información por su cuenta, con más fricción y más posibilidades de que abandone en el camino.",
  },
];

  return (
      <>
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Tu Sitio Web."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
