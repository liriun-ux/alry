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
  return (
    <html
      lang="es"
        className={`${displayFont.variable} ${sansFont.variable} ${serifFont.variable}`}
    >
      <body className="">{children}</body>
    </html>
  );
}
