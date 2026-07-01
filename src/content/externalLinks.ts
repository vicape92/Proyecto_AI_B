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
export const steamLinks: Partial<Record<SteamLinkKey, string>> = {
  "tomb-raider-legend":
    "https://store.steampowered.com/app/7000/Tomb_Raider_Legend/",
  "tomb-raider-anniversary":
    "https://store.steampowered.com/app/8000/Tomb_Raider_Anniversary/",
  "tomb-raider-underworld":
    "https://store.steampowered.com/app/8140/Tomb_Raider_Underworld/",
  "tomb-raider-2013": "https://store.steampowered.com/app/203160/Tomb_Raider/",
  "rise-of-the-tomb-raider":
    "https://store.steampowered.com/app/391220/Rise_of_the_Tomb_Raider/",
  "shadow-of-the-tomb-raider":
    "https://store.steampowered.com/app/750920/Shadow_of_the_Tomb_Raider_Definitive_Edition/",
  "lara-croft-and-the-guardian-of-light":
    "https://store.steampowered.com/app/35130/Lara_Croft_and_the_Guardian_of_Light/",
  "lara-croft-and-the-temple-of-osiris":
    "https://store.steampowered.com/app/289690",
  "lara-croft-go": "https://store.steampowered.com/app/540840/Lara_Croft_GO/",
};

type BeyondLinkKey = "filmClassic" | "filmReboot" | "officialStore";

// TODO(content): completar cuando PO/legal confirme URLs oficiales e imagenes de cine.
export const beyondLinks: Partial<Record<BeyondLinkKey, string>> = {
  filmClassic: "https://www.filmaffinity.com/es/film388868.html",
  filmReboot: "https://www.filmaffinity.com/es/film213699.html",
};
