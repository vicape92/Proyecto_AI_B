export type LandingAnchor =
  | "#tr-hook"
  | "#tr-timeline"
  | "#tr-other"
  | "#tr-beyond"
  | "#tr-future";

export type TitleCardVariant = "compact" | "full";

export type GameTitle = {
  slug: string;
  title: string;
  year: string;
  eraLabel?: string;
  premise: string;
  rating?: string;
  imageSrc: string;
  imageAlt: string;
  mediaLabel?: string;
  steamUrl?: string;
  steamNote?: string;
};

export type SagaEra = {
  id: string;
  label: string;
  years: string;
  studio: string;
  title: string;
  intro: string;
  cardVariant: TitleCardVariant;
  games: GameTitle[];
};
