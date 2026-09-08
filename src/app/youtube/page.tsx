
import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algoritmo de YouTube: cómo conseguir más vistas',
  description: 'Guía completa del algoritmo de YouTube: investigación de keywords, títulos, miniaturas y retención de audiencia para lograr que tus videos sean recomendados.',
}

export default function YoutubePage() {
const jsonLd = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://alry.vercel.app/youtube#article',

      headline: 'Consigue más vistas en YouTube.',

      description:
        'Guía para mejorar la visibilidad de tus videos en YouTube mediante palabras clave, títulos, miniaturas, retención de audiencia, estructura y análisis de métricas.',

      url: 'https://alry.vercel.app/youtube',

      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://alry.vercel.app/youtube#webpage',
      },

      author: {
        '@id': 'https://www.liriun-ux.tecnologia.bo/#organization',
      },

      publisher: {
        '@id': 'https://www.liriun-ux.tecnologia.bo/#organization',
      },

      inLanguage: 'es-BO',

      articleSection: 'YouTube',

      keywords: [
        'YouTube',
        'más vistas en YouTube',
        'SEO para YouTube',
        'algoritmo de YouTube',
        'visibilidad en YouTube',
        'optimización de YouTube',
      ],
    },

    {
      '@type': 'WebPage',
      '@id': 'https://alry.vercel.app/youtube#webpage',

      url: 'https://alry.vercel.app/youtube',

      name: 'Consigue más vistas en YouTube | ALRY',

      description:
        'Guía para mejorar la visibilidad y conseguir más vistas en YouTube.',

      isPartOf: {
        '@id': 'https://alry.vercel.app/#website',
      },

      about: {
        '@type': 'Thing',
        name: 'YouTube',
      },

      inLanguage: 'es-BO',

      publisher: {
        '@id': 'https://www.liriun-ux.tecnologia.bo/#organization',
      },
    },

    {
      '@type': 'BreadcrumbList',
      '@id': 'https://alry.vercel.app/youtube#breadcrumb',

      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://alry.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'YouTube',
          item: 'https://alry.vercel.app/youtube',
        },
      ],
    },
  ],
}



const items = [
  {
    titulo: "Investigación de palabras clave",
    descripcion: "Antes de subir cualquier video, identificamos los términos que tu audiencia realmente busca usando herramientas como TubeBuddy, VidIQ o el propio buscador de YouTube. Analizamos el volumen de búsqueda, la competencia y la intención del usuario para elegir palabras clave con verdadero potencial de posicionamiento, evitando términos saturados donde competir sería casi imposible para un canal nuevo.",
  },
  {
    titulo: "Optimización del título",
    descripcion: "Redactamos títulos que combinan la palabra clave principal con un gancho emocional o curioso, manteniéndonos dentro de los primeros 60 caracteres para que no se corten en los resultados de búsqueda. Un buen título no solo posiciona: convence al usuario de hacer clic en los primeros dos segundos de lectura.",
  },
  {
    titulo: "Descripción estratégica",
    descripcion: "Escribimos descripciones completas de 200 a 300 palabras mínimo, ubicando la palabra clave principal en las primeras líneas (las que se ven sin hacer clic en 'mostrar más'). Incluimos palabras clave secundarias de forma natural, enlaces a redes sociales, marcas de tiempo (timestamps) y llamados a la acción claros.",
  },
  {
    titulo: "Miniaturas (thumbnails) de alto impacto",
    descripcion: "Diseñamos miniaturas con alto contraste visual, tipografía legible incluso en pantallas pequeñas y rostros con expresiones claras cuando aplica. La miniatura es el segundo factor más importante después del título para lograr un buen CTR (click-through rate), una métrica que YouTube pondera fuertemente al decidir a quién recomendar tu video.",
  },
  {
    titulo: "Retención de audiencia",
    descripcion: "Estructuramos el guion del video con un gancho fuerte en los primeros 15 segundos, eliminando introducciones largas o música de presentación innecesaria. YouTube prioriza videos con alto porcentaje de retención promedio y tiempo total de visualización, por lo que cada segundo del contenido debe justificar que el espectador se quede.",
  },
  {
    titulo: "Etiquetas (tags) relevantes",
    descripcion: "Aunque su peso en el algoritmo es menor que antes, seguimos utilizando de 5 a 8 etiquetas relevantes que ayudan a YouTube a entender el contexto y la categoría del video, combinando términos amplios con variaciones más específicas (long-tail) relacionadas al nicho.",
  },
  {
    titulo: "Playlists y estructura del canal",
    descripcion: "Organizamos los videos en listas de reproducción temáticas para aumentar el tiempo de visualización por sesión, ya que YouTube favorece a los canales que logran que los usuarios permanezcan más tiempo consumiendo contenido relacionado en una sola visita.",
  },
  {
    titulo: "Consistencia de publicación",
    descripcion: "Definimos un calendario de subida constante (semanal, quincenal, etc.) porque el algoritmo tiende a favorecer canales activos y predecibles, generando confianza tanto en la audiencia como en el sistema de recomendaciones.",
  },
  {
    titulo: "Interacción y señales sociales",
    descripcion: "Fomentamos comentarios, likes y compartidos mediante preguntas directas al espectador y respuestas activas en la sección de comentarios durante la primera hora tras la publicación, ya que YouTube interpreta esta interacción temprana como una señal de calidad y relevancia del contenido.",
  },
  {
    titulo: "Análisis de métricas (YouTube Studio)",
    descripcion: "Revisamos constantemente los datos de YouTube Studio: CTR, retención promedio, fuentes de tráfico y audiencia, para identificar qué formatos funcionan mejor y ajustar la estrategia de contenido de forma basada en datos reales y no en suposiciones.",
  },
];

  return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Youtube."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
