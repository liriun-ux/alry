

import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Algoritmo de Facebook: cómo aumentar tu alcance',
  description: 'Qué premia hoy el algoritmo de Facebook: interacciones significativas, video nativo, Reels y cómo evitar penalizaciones de alcance.',
}

export default function FacebookPage() {


const items = [
  {
    titulo: "Tiempo de permanencia (dwell time)",
    descripcion: "Diseñamos publicaciones (imágenes, videos o texto) que inviten a detenerse a leer o mirar más de un par de segundos, ya que Facebook mide cuánto tiempo pasa un usuario frente a una publicación específica antes de seguir bajando el feed. Cuanto mayor sea ese tiempo de permanencia, más relevante interpreta el algoritmo que es el contenido para esa persona.",
  },
  {
    titulo: "Interacciones significativas (Meaningful Social Interactions)",
    descripcion: "Priorizamos formatos que generen comentarios reales y conversación (preguntas abiertas, encuestas, publicaciones que inviten a opinar) por encima de simples 'me gusta', ya que desde el cambio de algoritmo de Meta, las interacciones entre personas —comentarios largos, respuestas, discusiones— pesan mucho más que las reacciones pasivas.",
  },
  {
    titulo: "Video nativo y Reels",
    descripcion: "Subimos el video directamente a Facebook (no enlaces externos de YouTube o TikTok con marca de agua) y priorizamos el formato Reels dentro de la estrategia, ya que Meta está impulsando activamente este formato con mayor alcance orgánico frente a publicaciones estáticas o enlaces salientes de la plataforma.",
  },
  {
    titulo: "Evitar el 'engagement bait'",
    descripcion: "Nos alejamos de tácticas como 'etiqueta a 5 amigos' o 'comenta SÍ si estás de acuerdo', ya que Meta identifica y penaliza activamente este tipo de contenido diseñado artificialmente para generar interacción, reduciendo el alcance de la página en lugar de aumentarlo.",
  },
  {
    titulo: "Frecuencia y consistencia de publicación",
    descripcion: "Mantenemos un calendario de publicaciones regular (sin saturar ni desaparecer semanas enteras), porque el algoritmo favorece a las páginas activas con un patrón predecible, y penaliza la inactividad prolongada reduciendo el alcance orgánico cuando se retoma la publicación de forma irregular.",
  },
  {
    titulo: "Contenido que mantiene a los usuarios dentro de la plataforma",
    descripcion: "Reducimos los enlaces externos directos en el cuerpo de la publicación (que llevan al usuario fuera de Facebook) y, cuando es necesario, los colocamos en el primer comentario o usamos formatos nativos, ya que Meta favorece el contenido que retiene a los usuarios navegando dentro de su propio ecosistema.",
  },
  {
    titulo: "Relevancia y personalización por audiencia",
    descripcion: "Segmentamos el tono y la temática del contenido según los intereses reales de la audiencia de la página (analizando qué publicaciones anteriores tuvieron mejor desempeño), ya que el algoritmo prioriza mostrar contenido basado en el historial de interacción de cada usuario con temas similares.",
  },
  {
    titulo: "Velocidad de reacción inicial (primeras interacciones)",
    descripcion: "Buscamos generar reacciones y comentarios en los primeros 30 a 60 minutos tras publicar, respondiendo activamente a cada comentario, ya que Facebook usa ese comportamiento inicial como una muestra representativa para decidir si amplía la distribución de la publicación a un público más grande.",
  },
  {
    titulo: "Uso de grupos de Facebook",
    descripcion: "Complementamos la estrategia de página con presencia en grupos relevantes del nicho (propios o de terceros), ya que el contenido en grupos activos suele tener un alcance orgánico superior al de las páginas tradicionales, además de generar una comunidad más comprometida alrededor de la marca.",
  },
  {
    titulo: "Calidad visual y formato adaptado al feed",
    descripcion: "Optimizamos las dimensiones de imágenes y videos para que se vean correctamente en el feed móvil (la mayoría del tráfico de Facebook), evitando textos cortados, proporciones incorrectas o contenido pensado originalmente para otro formato o plataforma.",
  },
  {
    titulo: "Evitar señales negativas (ocultar publicación, 'no me interesa')",
    descripcion: "Cuidamos la frecuencia y relevancia del contenido para minimizar acciones negativas como 'ocultar publicación' o marcar como spam, ya que estas señales negativas impactan directamente y de forma fuerte en la reducción del alcance futuro de la página completa, no solo de la publicación afectada.",
  },
  {
    titulo: "Análisis en Meta Business Suite",
    descripcion: "Monitoreamos constantemente las métricas de Meta Business Suite (alcance, tasa de interacción, retención de video, procedencia del tráfico) para identificar qué formatos y temáticas generan mejor respuesta real, ajustando la estrategia de contenido con base en datos concretos del comportamiento de la audiencia.",
  },
];

  return (
      <>
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Facebook."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
