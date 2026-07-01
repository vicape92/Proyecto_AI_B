import type { GameTitle, TitleCardVariant } from "../../types/landing";
import { trackEvent } from "../../integrations/analytics";
import "./TitleCard.css";

type TitleCardProps = {
  eraName: string;
  game: GameTitle;
  variant?: TitleCardVariant;
};

function isConfiguredSteamUrl(url: string | undefined) {
  return Boolean(url && url !== "#");
}

export function TitleCard({ eraName, game, variant = "full" }: TitleCardProps) {
  const isCompact = variant === "compact";
  const hasSteam = isConfiguredSteamUrl(game.steamUrl);
  const titleId = `tr-title-card-${game.slug}`;

  const onSteamClick = () => {
    trackEvent({
      name: "outbound_steam_click",
      payload: {
        title: game.title,
        year: game.year,
        era: eraName,
      },
    });
  };

  return (
    <article className="tr-title-card" data-variant={variant} aria-labelledby={titleId}>
      <div className="tr-title-card__media">
        <img src={game.imageSrc} alt={game.imageAlt} loading="lazy" />
        <span className="tr-title-card__year" aria-label={`Año ${game.year}`}>
          {game.year}
        </span>
        {game.rating ? <span className="tr-title-card__rating">{game.rating}</span> : null}
        {game.mediaLabel ? (
          <span className="tr-title-card__media-label">{game.mediaLabel}</span>
        ) : null}
      </div>

      <div className="tr-title-card__body">
        {!isCompact && game.eraLabel ? (
          <p className="tr-title-card__era">{game.eraLabel}</p>
        ) : null}
        <h4 id={titleId}>{game.title}</h4>
        <p className="tr-title-card__premise">{game.premise}</p>

        {hasSteam ? (
          <a
            className="tr-title-card__steam"
            href={game.steamUrl}
            onClick={onSteamClick}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${game.title} en Steam, se abre en una pestaña nueva`}
          >
            Comprar en Steam <span aria-hidden="true">↗</span>
          </a>
        ) : game.steamNote ? (
          <p className="tr-title-card__note">{game.steamNote}</p>
        ) : null}
      </div>
    </article>
  );
}
