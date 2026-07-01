import { sagaEras } from "../../content/eras";
import { TitleCard } from "../TitleCard/TitleCard";
import "./EraTimeline.css";

export function EraTimeline() {
  return (
    <section className="tr-timeline" id="tr-timeline" aria-labelledby="tr-tl-h">
      <div className="tr-timeline__heading">
        <span className="tr-timeline__peak" aria-hidden="true">
          ▲
        </span>
        <p className="tr-timeline__kicker">LA SAGA, ERA A ERA</p>
        <h2 id="tr-tl-h">Casi 30 años de expediciones</h2>
      </div>

      <div className="tr-timeline__rail">
        {sagaEras.map((era) => (
          <article className="tr-era" key={era.id}>
            <div className="tr-era__header">
              <span className="tr-era__marker" aria-hidden="true">
                ▲
              </span>
              <div>
                <p className="tr-era__meta">
                  {era.label} · {era.years} · {era.studio}
                </p>
                <h3>{era.title}</h3>
              </div>
            </div>
            <p className="tr-era__intro">{era.intro}</p>
            <div className="tr-era__grid" data-variant={era.cardVariant}>
              {era.games.map((game) => (
                <TitleCard
                  eraName={era.label}
                  game={game}
                  key={game.slug}
                  variant={era.cardVariant}
                />
              ))}
            </div>
          </article>
        ))}

        <article className="tr-era tr-era--future">
          <div className="tr-era__header">
            <span className="tr-era__marker tr-era__marker--future" aria-hidden="true">
              ✦
            </span>
            <div>
              <p className="tr-era__meta tr-era__meta--future">A CONTINUACIÓN</p>
              <h3>El futuro</h3>
            </div>
          </div>
          <p className="tr-era__intro">
            Un nuevo capítulo de Lara Croft está en desarrollo. Sigue bajando para saber
            cómo enterarte primero.
          </p>
          <a className="tr-era__future-link" href="#tr-future">
            Ir al cierre <span aria-hidden="true">↓</span>
          </a>
        </article>
      </div>
    </section>
  );
}
