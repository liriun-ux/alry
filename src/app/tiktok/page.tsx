


import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

export default function FacebookPage() {


const items = [
  {
    titulo: "Los primeros 3 segundos",
    descripcion: "Estructuramos cada video para captar la atención en los primeros 1 a 3 segundos, ya que TikTok mide cuántos usuarios abandonan el video en ese instante inicial. Evitamos introducciones lentas, logos animados largos o textos de bienvenida: el gancho (una pregunta, una afirmación fuerte o una imagen impactante) debe aparecer de inmediato para evitar el 'swipe' temprano.",
  },
  {
    titulo: "Tasa de finalización (completion rate)",
    descripcion: "Diseñamos videos cortos y ágiles (idealmente entre 15 y 34 segundos para la mayoría de nichos) porque TikTok prioriza fuertemente el porcentaje de personas que ven el video completo o lo repiten (loop). Un video que se ve entero, o varias veces seguidas, envía una señal muy potente al algoritmo de que el contenido merece más distribución.",
  },
  {
    titulo: "Uso estratégico de sonidos y música",
    descripcion: "Seleccionamos audios que estén en tendencia o que tengan buen desempeño reciente en el nicho, ya que TikTok indexa el contenido también por el sonido usado y puede impulsar videos que usan pistas populares dentro de las páginas 'For You' relacionadas a esa canción o efecto de sonido.",
  },
  {
    titulo: "Hashtags relevantes y de nicho",
    descripcion: "Combinamos 3 a 5 hashtags: uno o dos amplios relacionados a la categoría general, y el resto específicos del nicho o la temática puntual del video. Evitamos saturar con hashtags genéricos como #fyp o #viral de forma aislada, ya que su peso real en el algoritmo es limitado si no van acompañados de contenido relevante y bien etiquetado.",
  },
  {
    titulo: "Interacción temprana (primeras horas)",
    descripcion: "Publicamos en los horarios donde la audiencia objetivo está más activa y fomentamos comentarios, respuestas y shares desde el primer momento, porque TikTok evalúa el desempeño de un video en una 'ventana de prueba' inicial (generalmente la primera hora) antes de decidir si lo distribuye a un círculo más amplio de usuarios.",
  },
  {
    titulo: "Formato vertical y calidad nativa",
    descripcion: "Producimos el contenido en formato vertical 9:16, sin bordes negros ni marcas de agua de otras plataformas (como el logo de Instagram Reels o YouTube Shorts), ya que TikTok penaliza visualmente y en distribución el contenido reciclado que se nota reexportado de otra red social.",
  },
  {
    titulo: "Consistencia y frecuencia de publicación",
    descripcion: "Establecemos un ritmo de publicación constante (mínimo 3 a 5 videos por semana en cuentas en crecimiento) porque el algoritmo favorece a las cuentas activas y predecibles, dándoles más oportunidades de 'testeo' en distintos públicos con cada nueva publicación.",
  },
  {
    titulo: "Texto en pantalla y subtítulos",
    descripcion: "Incorporamos texto superpuesto y subtítulos automáticos en cada video, ya que TikTok también analiza el contenido textual visible para entender mejor el tema del video y mostrarlo a usuarios interesados en esa temática, además de mejorar la retención de quienes ven el contenido sin sonido.",
  },
  {
    titulo: "Señales de 'valor agregado' (guardados y compartidos)",
    descripcion: "Creamos contenido con utilidad práctica (tips, tutoriales, datos curiosos) que motive a guardar el video para verlo después o compartirlo por mensaje directo, dos de las señales que TikTok pondera con más peso que un simple 'me gusta', porque indican una intención de consumo más profunda.",
  },
  {
    titulo: "Coherencia temática de la cuenta",
    descripcion: "Mantenemos una línea temática clara y reconocible en el perfil, evitando mezclar nichos completamente distintos en la misma cuenta, ya que TikTok construye un 'perfil de interés' del canal basado en el historial de videos para decidir a qué públicos mostrar el contenido nuevo.",
  },
  {
    titulo: "Aprovechamiento de tendencias (trends)",
    descripcion: "Monitoreamos diariamente la pestaña de tendencias y sonidos en ascenso para adaptar formatos, retos o estructuras virales al nicho del negocio, ya que subirse a una tendencia en su fase temprana de crecimiento aumenta significativamente las probabilidades de alcance orgánico.",
  },
  {
    titulo: "Análisis en TikTok Studio/Analytics",
    descripcion: "Revisamos de forma constante las métricas de TikTok Studio (tiempo de reproducción promedio, alcance por 'For You' vs. seguidores, tráfico por hashtag y sonido) para ajustar la estrategia de contenido según lo que realmente funciona con la audiencia real del negocio.",
  },
];

  return (
      <>
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Tiktok."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
