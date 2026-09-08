import Header from "@/components/header";
import Section from "@/components/Section";
import Hero from "./hero";
import ResYoutube from "./resume/youtube";
import ResTiktok from "./resume/tiktok";
import ResFacebook from "./resume/facebook";
import ResGoogle from "./resume/google";
import ResAgentIa from "./resume/agent-ia";
import ResSiteWeb from "./resume/site-web";
import NavBase from "@/components/nav-base";

export default function Home() {

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'ALRY | Mejora tu presencia en YouTube, TikTok, Google e IA',
  description: 'Descubre cómo funcionan los algoritmos de YouTube, TikTok, Facebook, Google y las IAs, y por qué un sitio web bien construido es la base de todo.',
  url: 'https://alry.vercel.app',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ALRY',
    url: 'https://alry.vercel.app',
  },
  about: {
    '@type': 'Organization',
    name: 'LIRIUN-UX',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Algoritmo de YouTube', url: 'https://alry.vercel.app/youtube' },
      { '@type': 'ListItem', position: 2, name: 'Algoritmo de TikTok', url: 'https://alry.vercel.app/tiktok' },
      { '@type': 'ListItem', position: 3, name: 'Algoritmo de Facebook', url: 'https://alry.vercel.app/facebook' },
      { '@type': 'ListItem', position: 4, name: 'Por qué aparecer en Google', url: 'https://alry.vercel.app/google' },
      { '@type': 'ListItem', position: 5, name: 'AEO y agentes de IA', url: 'https://alry.vercel.app/agente-ia' },
      { '@type': 'ListItem', position: 6, name: 'Por qué necesitas un sitio web', url: 'https://alry.vercel.app/sitio-web' },
    ],
  },
}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Header/>
      <main className="PageIncio">
        <Section id="hero">
          <Hero/>
        </Section>

        <Section id="resumen-youtube">
          <ResYoutube/>
        </Section>

        <Section id="resume-tiktok">
            <ResTiktok/>
        </Section>

        <Section id="resumen-facebook">
          <ResFacebook/>
        </Section>

        <Section id="resumen-google">
          <ResGoogle/>
        </Section>

        <Section id="resumen-agente-ia">
          <ResAgentIa/>
        </Section>

        <Section id="resumen-site-web">
          <ResSiteWeb/>
        </Section>

        <Section id="navegacion">
          <NavBase/>
        </Section>
      </main>

    </>
  );
}
