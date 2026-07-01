import type { ReactNode } from "react";
import { beyondLinks } from "../../content/externalLinks";
import "./BeyondGamesBlock.css";

type FilmReference = {
  title: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
  url?: string;
};

const filmReferences: FilmReference[] = [
  {
    title: "Lara Croft: Tomb Raider",
    meta: "2001 · La cuna de la vida (2003)",
    imageSrc: "/assets/poster-frame.svg",
    imageAlt: "Placeholder de cartel para las películas clásicas de Tomb Raider",
    url: beyondLinks.filmClassic,
  },
  {
    title: "Tomb Raider",
    meta: "2018 · reinicio cinematográfico",
    imageSrc: "/assets/poster-frame.svg",
    imageAlt: "Placeholder de cartel para Tomb Raider 2018",
    url: beyondLinks.filmReboot,
  },
];

function ExternalLink({
  children,
  className = "tr-beyond__link",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  if (!href) {
    return (
      <span className="tr-beyond__pending">
        Enlace oficial pendiente de validación.
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function BeyondGamesBlock() {
  return (
    <section className="tr-beyond" id="tr-beyond" aria-labelledby="tr-beyond-h">
      <div className="tr-beyond__heading tr-reveal">
        <p className="tr-beyond__kicker">MÁS ALLÁ DE LOS JUEGOS</p>
        <h2 id="tr-beyond-h">Lara también conquistó la pantalla</h2>
      </div>

      <div className="tr-beyond__grid">
        <div className="tr-beyond__column tr-reveal">
          <p className="tr-beyond__label">CINE</p>
          <div className="tr-beyond__film-list">
            {filmReferences.map((film) => (
              <article className="tr-beyond__film" key={film.title}>
                <img
                  className="tr-beyond__poster"
                  src={film.imageSrc}
                  alt={film.imageAlt}
                  loading="lazy"
                />
                <div>
                  <h3 className="tr-beyond__film-title">{film.title}</h3>
                  <p className="tr-beyond__film-meta">{film.meta}</p>
                  <ExternalLink href={film.url}>Más información</ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tr-beyond__column tr-reveal">
          <p className="tr-beyond__label">MERCHANDISING</p>
          <div className="tr-beyond__merch">
            <p>
              Figuras de colección, réplicas del arco y el equipo de Lara, ropa y
              artículos oficiales de la saga.
            </p>
            <ExternalLink
              className="tr-beyond__button"
              href={beyondLinks.officialStore}
            >
              Ver tienda oficial
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
