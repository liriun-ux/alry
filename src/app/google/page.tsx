


import Header from "@/components/header";
import ManualTitle from "@/components/manual/title"
import ResListaNumerada from "@/components/manual/lista";
import NavBase from "@/components/nav-base";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Por qué tu negocio necesita aparecer en Google',
  description: 'Descubre por qué estar en Google Business Profile y posicionado en búsquedas es clave para que tus clientes te encuentren antes que a la competencia.',
}

export default function GooglePage() {
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Por qué tu negocio necesita aparecer en Google',
  description: 'Razones por las que la presencia en Google Business Profile y el SEO son clave para captar clientes.',
  publisher: { '@type': 'Organization', name: 'LIRIUN-UX' },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Tu cliente ya te está buscando' },
      { '@type': 'ListItem', position: 2, name: 'La confianza se construye antes del contacto' },
      { '@type': 'ListItem', position: 3, name: 'Ficha de Google Business gratuita' },
      { '@type': 'ListItem', position: 4, name: 'Perder frente a la competencia sin competir' },
      { '@type': 'ListItem', position: 5, name: 'El SEO como inversión a largo plazo' },


      { '@type': 'ListItem', position: 6, name: 'Credibilidad frente a negocios informales o sin regularizar' },
      { '@type': 'ListItem', position: 7, name: 'Reseñas: el boca a boca digital que trabaja 24/7' },
      { '@type': 'ListItem', position: 8, name: 'Alcanzar clientes fuera del círculo de contactos conocidos' },
      { '@type': 'ListItem', position: 9, name: 'Un sitio web propio, un activo que no depende de terceros' },
      { '@type': 'ListItem', position: 10, name: 'Mi negocio funciona por recomendación no es una razón para no crecer' },
      { '@type': 'ListItem', position: 11, name: 'El costo real no es invertir en SEO, es la oportunidad perdida' },
    ],
  },
}

const items = [
  {
    titulo: "Tu cliente ya te está buscando (aunque no lo sepas)",
    descripcion: "Cada día, personas cerca de tu negocio escriben en Google frases como 'restaurante cerca de mí' o el nombre de tu rubro en tu ciudad. Si tu negocio no aparece, esa búsqueda no desaparece: simplemente termina en la competencia que sí tiene presencia digital. No estar en Google no significa que no te busquen, significa que no te encuentran.",
  },
  {
    titulo: "La confianza se construye antes del primer contacto",
    descripcion: "Antes de llamar o visitar un negocio, la mayoría de las personas lo busca en internet para verificar que existe, leer reseñas y ver fotos. Un negocio sin ninguna huella digital genera dudas inconscientes ('¿seguirá funcionando?', '¿será confiable?'), mientras que aparecer en Google transmite seriedad y respaldo incluso antes de la primera conversación.",
  },
  {
    titulo: "Ficha de Google Business: la vitrina gratuita más subestimada",
    descripcion: "Muchos negocios no saben que pueden aparecer en el mapa de Google, mostrar horarios, teléfono, fotos y reseñas totalmente gratis a través de Google Business Profile. Es la forma más rápida de pasar de ser invisible a aparecer justo cuando alguien busca lo que ofreces en tu zona, sin necesidad de pagar publicidad.",
  },
  {
    titulo: "Perder frente a la competencia sin siquiera competir",
    descripcion: "Si dos negocios ofrecen lo mismo y uno aparece en Google mientras el otro no, la decisión ya está tomada de antemano: el cliente elige al que puede encontrar, comparar y verificar fácilmente. No se trata de tener mejor producto, sino de estar presente en el momento exacto en que se toma la decisión de compra.",
  },
  {
    titulo: "El SEO no es un gasto, es capitalizar un activo a largo plazo",
    descripcion: "A diferencia de la publicidad pagada, que deja de generar resultados en el momento en que se detiene la inversión, un sitio bien posicionado en Google sigue atrayendo clientes de forma constante mes tras mes. El SEO es una inversión que construye un canal de clientes propio, cada vez más fuerte con el tiempo, en lugar de un gasto que se agota al instante.",
  },
  {
    titulo: "Credibilidad frente a negocios informales o sin regularizar",
    descripcion: "En sectores donde existe mucha oferta informal o poco profesional, tener presencia sólida en Google (sitio web, reseñas, información clara) es una de las formas más efectivas de diferenciarse y transmitir que el negocio es serio, establecido y confiable, generando una ventaja competitiva inmediata frente a quienes no invierten en esto.",
  },
  {
    titulo: "Reseñas: el 'boca a boca' digital que trabaja 24/7",
    descripcion: "Las reseñas en Google funcionan como recomendaciones públicas permanentes que un nuevo cliente puede leer en cualquier momento del día, incluso cuando el negocio está cerrado. Un negocio sin ficha en Google pierde por completo esta fuente de confianza social, que muchas veces pesa más que cualquier anuncio pagado.",
  },
  {
    titulo: "Alcanzar clientes fuera del círculo de contactos conocidos",
    descripcion: "Depender solo de recomendaciones de boca en boca limita el crecimiento al círculo social existente. Aparecer en Google permite llegar a personas completamente nuevas que no conocen el negocio por ninguna otra vía, ampliando el alcance a un público que de otra forma nunca hubiera sabido que el negocio existe.",
  },
  {
    titulo: "Un sitio web propio, un activo que no depende de terceros",
    descripcion: "A diferencia de depender únicamente de redes sociales (donde un cambio de algoritmo o una suspensión de cuenta puede afectar todo el alcance de golpe), un sitio web posicionado en Google es un canal propio: nadie puede quitarlo, cerrarlo ni limitarlo de forma arbitraria, lo que lo convierte en la base más estable de la presencia digital de un negocio.",
  },
  {
    titulo: "'Mi negocio funciona por recomendación' no es una razón para no crecer",
    descripcion: "Muchos negocios que ya funcionan bien asumen que no necesitan Google porque 'siempre les fue así'. Pero esto no significa que no exista una demanda adicional sin capturar: cada cliente potencial que busca en Google y no encuentra el negocio es una oportunidad de crecimiento que se está dejando sobre la mesa sin siquiera notarlo.",
  },
  {
    titulo: "El costo real no es invertir en SEO, es la oportunidad perdida",
    descripcion: "El verdadero costo de no aparecer en Google no se ve en una factura, sino en los clientes que nunca llegaron a saber que el negocio existía. Mientras un competidor capta esas búsquedas mes tras mes, el negocio sin presencia digital sigue creyendo que 'todo va bien', sin poder medir cuánto está dejando de crecer por no ser encontrado.",
  },
];

  return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header/>
        <main>
            <section className="manual-section" id="manual-algoritmo-youtube">
                <div className="manual">
                    <ManualTitle wordAcent="Google."/>
                    <ResListaNumerada items={items} />
                </div>
            </section>
                <NavBase/>
        </main>
      </>
  );
}
