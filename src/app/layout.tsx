import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  displayFont,
  sansFont,
  serifFont,
} from "../components/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://alry.vercel.app'),
  title: {
    default: 'ALRY | Mejora tu presencia en YouTube, TikTok, Google e IA',
    template: '%s | ALRY',
  },
  description: 'Descubre cómo funcionan los algoritmos de redes sociales, Google y las IAs, y por qué un sitio web bien construido es la base de todo. Por LIRIUN-UX.',
  openGraph: {
    siteName: 'ALRY',
    locale: 'es_BO',
    type: 'website',
    images: [
      {
        url: '/img/og-alry-default.png', // imagen genérica de respaldo
        width: 1200,
        height: 630,
        alt: 'ALRY - Mejora tu presencia digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
export default function RootLayout({ children }: LayoutProps<"/">) {


const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.liriun-ux.tecnologia.bo/#organization',
  url: 'https://www.liriun-ux.tecnologia.bo',
  name: 'LIRIUN-UX',
  logo: 'https://www.liriun-ux.tecnologia.bo/images/LOGOFAVICON.png',
  description: 'Agencia de diseño y desarrollo web en La Paz/El Alto, Bolivia.',
  email: 'liriun.ux@gmail.com',
  subOrganization: { "@id": "https://alry.vercel.app/#organization" }
}
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://alry.vercel.app/#website',
  name: 'ALRY',
  url: 'https://alry.vercel.app',
  description: 'Instrucciones para mejorar visivilidad en YouTube, TikTok, facebook, google, agentes-ia . Como un sitio web bien hecho ayuda a mejorar la visualizacion',
  email: 'liriun.ux@gmail.com',
  logo: 'https://alry.vercel.app/img/icon.png',
  inLanguage: 'es',
  publisher: { '@id': 'https://www.liriun-ux.tecnologia.bo/#organization' },
 parentOrganization: { "@id": "https://www.liriun-ux.tecnologia.bo/#organization" }
}
  return (

    <html
      lang="es"
        className={`${displayFont.variable} ${sansFont.variable} ${serifFont.variable}`}
    >
        <head>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        </head>
      <body className="">{children}</body>
    </html>
  );
}
