import { useState } from "react";
import { steamLinks } from "../../content/externalLinks";
import type { GameTitle } from "../../types/landing";
import { TitleCard } from "../TitleCard/TitleCard";
import "./CollapsibleBlock.css";

const otherGames: GameTitle[] = [
  {
    slug: "lara-croft-and-the-guardian-of-light",
    title: "Guardian of Light",
    year: "2010",
    premise:
      "Acción cooperativa vista desde arriba: Lara se une a un guerrero maya para detener un mal ancestral.",
    imageSrc: "/assets/lara-croft-and-the-guardian-of-light.webp",
    imageAlt: "Arte de portada de Lara Croft and the Guardian of Light",
    steamUrl: steamLinks["lara-croft-and-the-guardian-of-light"],
    steamNote: "Enlace de Steam pendiente de validación por PO.",
  },
  {
    slug: "lara-croft-and-the-temple-of-osiris",
    title: "Temple of Osiris",
    year: "2014",
    premise: "Hasta 4 jugadores compiten y cooperan para reunir las piezas de Osiris.",
    imageSrc: "/assets/lara-croft-and-the-temple-of-osiris.avif",
    imageAlt: "Arte de portada de Lara Croft and the Temple of Osiris",
    steamUrl: steamLinks["lara-croft-and-the-temple-of-osiris"],
    steamNote: "Enlace de Steam pendiente de validación por PO.",
  },
  {
    slug: "lara-croft-go",
    title: "Lara Croft GO",
    year: "2015",
    premise:
      "Puzles por turnos en tablero: la esencia de Tomb Raider reducida a su mínima expresión.",
    imageSrc: "/assets/lara-croft-go.webp",
    imageAlt: "Arte de portada de Lara Croft GO",
    steamUrl: steamLinks["lara-croft-go"],
    steamNote: "Enlace de Steam pendiente de validación por PO.",
  },
];

export function CollapsibleBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = "tr-other-panel";

  return (
    <section className="tr-other" id="tr-other" aria-labelledby="tr-other-h">
      <div className="tr-other__inner">
        <h2 className="tr-other__heading" id="tr-other-h">
          <button
            className="tr-other__toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="tr-other__icon" aria-hidden="true">
              ▲
            </span>
            <span className="tr-other__copy">
              <span className="tr-other__kicker">FUERA DEL HILO PRINCIPAL</span>
              <span className="tr-other__title">Otros juegos de la saga</span>
            </span>
            <span className="tr-other__state">{isOpen ? "Ocultar" : "Ver juegos"}</span>
          </button>
        </h2>

        {isOpen ? (
          <div className="tr-other__panel" id={panelId}>
            <p className="tr-other__intro">
              Spin-offs que exploran otros géneros dentro del universo Tomb Raider,
              fuera de la línea narrativa principal.
            </p>
            <div className="tr-other__grid">
              {otherGames.map((game) => (
                <TitleCard
                  eraName="OTROS JUEGOS"
                  game={game}
                  key={game.slug}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
