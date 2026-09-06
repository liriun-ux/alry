"use client";

import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menuButton" aria-label="Abrir menú" onClick={() => setIsOpen(true)}>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
      </button>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className="modal">
          
          <div className="modal-content">
            <h2>Mi contenido</h2>
            <p>
              Este contenido aparece después del efecto de entrada.
            </p>

          </div>

        </div>
      </div>
      <span className={`closeIcon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
      <span></span>
      <span></span>
    </span>

    </>
  );
}
