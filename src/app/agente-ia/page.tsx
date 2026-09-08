



import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

export default function AgenteIAPage() {


const items = [
  {
    titulo: "Los agentes de IA ya recomiendan negocios por ti (o por tu competencia)",
    descripcion: "Cuando alguien le pregunta a ChatGPT, Gemini o Copilot '¿cuál es el mejor [rubro] en mi ciudad?', esa IA responde con nombres específicos de negocios reales. Si tu marca no tiene información clara y confiable en internet, simplemente no aparece en esa respuesta, aunque seas el mejor en lo que haces. La recomendación se la lleva quien sí tiene esa información disponible.",
  },
  {
    titulo: "AEO: el nuevo SEO, pero para inteligencias artificiales",
    descripcion: "Así como el SEO busca aparecer en los resultados de Google, el AEO (Answer Engine Optimization) busca que tu marca sea la respuesta que una IA da cuando alguien pregunta algo relacionado a tu negocio. La diferencia clave es que aquí no compites por un lugar en una lista de diez resultados: compites por ser LA respuesta, una sola, que el usuario recibe y en la que confía de inmediato.",
  },
  {
    titulo: "Los precios y datos que muestras deben estar donde la IA los pueda leer",
    descripcion: "Los agentes de IA no adivinan tus precios ni tus horarios: los toman de información pública, estructurada y actualizada en tu sitio web o fichas de negocio. Si tus precios, servicios o condiciones solo existen en una conversación de WhatsApp o en la memoria de un vendedor, para la IA tu negocio simplemente no tiene esa información y no puede ofrecerla como respuesta a nadie.",
  },
  {
    titulo: "La coherencia de marca en todos lados importa más que nunca",
    descripcion: "Las IAs cruzan información de múltiples fuentes (tu sitio web, redes sociales, directorios, reseñas) para decidir qué tan confiable es un dato. Si tu nombre, dirección o descripción de servicios varía de un lugar a otro, la IA detecta esa inconsistencia y prefiere no arriesgarse a recomendarte, optando por una marca con información más clara y uniforme.",
  },
  {
    titulo: "Las reseñas ahora alimentan directamente a la inteligencia artificial",
    descripcion: "Cuando una IA arma una recomendación, no solo busca datos objetivos: también analiza opiniones y reseñas reales de clientes para evaluar calidad y confianza. Un negocio con buenas reseñas actualizadas tiene muchas más probabilidades de ser mencionado como una opción confiable frente a uno sin reseñas o con comentarios desactualizados.",
  },
  {
    titulo: "Ser la fuente citada, no solo un resultado más",
    descripcion: "Cuando una persona le pregunta algo a una IA, muchas veces la respuesta incluye una fuente o referencia de dónde salió esa información. Que tu sitio web sea esa fuente citada te posiciona automáticamente como una autoridad confiable en tu rubro, generando una credibilidad que es mucho más difícil de lograr por otros medios publicitarios tradicionales.",
  },
  {
    titulo: "Contenido claro y directo, la nueva moneda de confianza",
    descripcion: "Las IAs prefieren extraer información de contenido bien explicado, directo y fácil de entender, en lugar de textos confusos o llenos de rodeos publicitarios. Tener descripciones claras de qué haces, para quién y a qué precio aumenta significativamente las probabilidades de que ese contenido sea el elegido para responder una pregunta real de un usuario.",
  },
  {
    titulo: "Quedar fuera de las respuestas de IA es quedar fuera del futuro de las búsquedas",
    descripcion: "Cada vez más personas, especialmente las generaciones más jóvenes, prefieren preguntarle directamente a una IA en lugar de buscar y comparar en Google. Si tu marca no está preparada para aparecer en esas respuestas, estás perdiendo silenciosamente una porción creciente de clientes potenciales que ni siquiera llegan a ver una lista de resultados tradicional donde podrías competir.",
  },
  {
    titulo: "Una sola respuesta de IA puede valer más que diez anuncios pagados",
    descripcion: "Cuando una IA recomienda tu negocio, esa recomendación llega con un nivel de confianza que ningún anuncio pagado logra igualar, porque el usuario la percibe como un consejo neutral y objetivo, no como publicidad. Invertir en que tu marca sea 'IA-friendly' es apostar a un canal de recomendación con una credibilidad mucho más alta que la publicidad tradicional.",
  },
  {
    titulo: "Los early movers tienen una ventaja temporal enorme",
    descripcion: "La mayoría de los negocios, especialmente los locales, todavía no han optimizado su información para que las IAs los entiendan y recomienden correctamente. Esto significa que quien se adelanta hoy en tener una presencia digital clara y estructurada, tiene muchas más probabilidades de convertirse en 'la respuesta por defecto' de su rubro antes de que la competencia siquiera entienda que esto existe.",
  },
  {
    titulo: "No se trata de estar en todos lados, sino de ser encontrado correctamente",
    descripcion: "No es necesario tener presencia en cada red social o plataforma existente. Lo que realmente marca la diferencia es que la información esencial de tu negocio (qué ofreces, dónde estás, cuánto cuesta, por qué elegirte) esté disponible, actualizada y bien estructurada en los lugares que las IAs consultan, para que puedan usarla con confianza al momento de responder a un cliente potencial.",
  },
];

  return (
      <>
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Agentes de IA."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
