"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-base--left" aria-label="Navegación principal">
      <Link href="/" className={`res-base--button nav-base-section-button ${pathname === "/" ? "active" : ""}`}>
          inicio
      </Link>

      <Link href="/youtube" className={`res-base--button nav-base-section-button ${pathname === "/youtube" ? "active" : ""}`}>
          youtube
      </Link>

      <Link href="/tiktok" className={`res-base--button nav-base-section-button ${pathname === "/tiktok" ? "active" : ""}`}>
          tiktok
      </Link>

      <Link href="/facebook" className={`res-base--button nav-base-section-button ${pathname === "/facebook" ? "active" : ""}`}>
          facebook
      </Link>

      <Link href="/google" className={`res-base--button nav-base-section-button ${pathname === "/google" ? "active" : ""}`}>
          google
      </Link>

      <Link href="/agente-ia" className={`res-base--button nav-base-section-button ${pathname === "/agente-ia" ? "active" : ""}`}>
          agente ia
      </Link>

      <Link href="/sitio-web" className={`res-base--button nav-base-section-button ${pathname === "/sitio-web" ? "active" : ""}`}>
          sitio web
      </Link>
    </nav>
  );
}
