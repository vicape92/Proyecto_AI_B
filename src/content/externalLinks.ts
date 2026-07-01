type SteamLinkKey =
  | "tomb-raider-legend"
  | "tomb-raider-anniversary"
  | "tomb-raider-underworld"
  | "tomb-raider-2013"
  | "rise-of-the-tomb-raider"
  | "shadow-of-the-tomb-raider"
  | "lara-croft-and-the-guardian-of-light"
  | "lara-croft-and-the-temple-of-osiris"
  | "lara-croft-go";

// TODO(content): completar solo con URLs oficiales confirmadas por PO.
export const steamLinks: Partial<Record<SteamLinkKey, string>> = {};

type BeyondLinkKey = "filmClassic" | "filmReboot" | "officialStore";

// TODO(content): completar cuando PO/legal confirme URLs oficiales e imagenes de cine.
export const beyondLinks: Partial<Record<BeyondLinkKey, string>> = {};
