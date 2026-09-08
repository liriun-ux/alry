"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="nav-base--left">
      <Link href="/">
        <div className={`res-base--button nav-base-section-button ${pathname === "/" ? "active" : ""}`}>
          inicio
        </div>
      </Link>

      <Link href="/youtube">
        <div className={`res-base--button nav-base-section-button ${pathname === "/youtube" ? "active" : ""}`}>
          youtube
        </div>
      </Link>

      <Link href="/tiktok">
        <div className={`res-base--button nav-base-section-button ${pathname === "/tiktok" ? "active" : ""}`}>
          tiktok
        </div>
      </Link>

      <Link href="/facebook">
        <div className={`res-base--button nav-base-section-button ${pathname === "/facebook" ? "active" : ""}`}>
          facebook
        </div>
      </Link>

      <Link href="/google">
        <div className={`res-base--button nav-base-section-button ${pathname === "/google" ? "active" : ""}`}>
          google
        </div>
      </Link>

      <Link href="/agente-ia">
        <div className={`res-base--button nav-base-section-button ${pathname === "/agente-ia" ? "active" : ""}`}>
          agente ia
        </div>
      </Link>

      <Link href="/sitio-web">
        <div className={`res-base--button nav-base-section-button ${pathname === "/sitio-web" ? "active" : ""}`}>
          sitio web
        </div>
      </Link>
    </div>
  );
}
