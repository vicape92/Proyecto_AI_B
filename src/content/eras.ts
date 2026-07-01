import type { SagaEra } from "../types/landing";
import { steamLinks } from "./externalLinks";

export const sagaEras: SagaEra[] = [
  {
    id: "classic",
    label: "ERA CLÁSICA",
    years: "1996-2003",
    studio: "CORE DESIGN",
    title: "Los orígenes",
    intro:
      "Core Design sienta las bases del género: seis expediciones que definieron la exploración y las trampas 3D de los noventa. Hoy, disponibles como colecciones Remastered.",
    cardVariant: "compact",
    games: [
      {
        slug: "tomb-raider-1996",
        title: "Tomb Raider",
        year: "1996",
        premise:
          "Debut de Lara en Perú, Grecia y Egipto: la primera gran expedición de la saga.",
        imageSrc: "/assets/tomb-raider-1996.png",
        imageAlt: "Arte de portada de Tomb Raider",
        steamNote: "Disponible como parte de Tomb Raider I-III Remastered",
      },
      {
        slug: "tomb-raider-ii",
        title: "Tomb Raider II",
        year: "1997",
        premise: "La búsqueda de la Daga de Xian lleva a Lara hasta el Tíbet y China.",
        imageSrc: "/assets/tomb-raider-ii.jpg",
        imageAlt: "Arte de portada de Tomb Raider II",
        steamNote: "Disponible como parte de Tomb Raider I-III Remastered",
      },
      {
        slug: "tomb-raider-iii",
        title: "Tomb Raider III",
        year: "1998",
        premise:
          "Una odisea global tras un artefacto meteórico repartido por cuatro continentes.",
        imageSrc: "/assets/tomb-raider-iii.jpg",
        imageAlt: "Arte de portada de Tomb Raider III",
        steamNote: "Disponible como parte de Tomb Raider I-III Remastered",
      },
      {
        slug: "tomb-raider-the-last-revelation",
        title: "TR: The Last Revelation",
        year: "1999",
        premise: "Egipto vuelve, ahora con los orígenes de Lara como telón de fondo.",
        imageSrc: "/assets/tomb-raider-the-last-revelation.jpg",
        imageAlt: "Arte de portada de Tomb Raider: The Last Revelation",
        steamNote: "Disponible como parte de Tomb Raider IV-VI Remastered",
      },
      {
        slug: "tomb-raider-chronicles",
        title: "TR: Chronicles",
        year: "2000",
        premise: "Un mosaico de misiones que repasan aventuras pasadas de Lara.",
        imageSrc: "/assets/tomb-raider-chronicles.png",
        imageAlt: "Arte de portada de Tomb Raider: Chronicles",
        steamNote: "Disponible como parte de Tomb Raider IV-VI Remastered",
      },
      {
        slug: "tomb-raider-the-angel-of-darkness",
        title: "TR: The Angel of Darkness",
        year: "2003",
        premise:
          "El giro más oscuro de la era clásica, entre conspiraciones y ocultismo.",
        imageSrc: "/assets/tomb-raider-the-angel-of-darkness.webp",
        imageAlt: "Arte de portada de Tomb Raider: The Angel of Darkness",
        steamNote: "Disponible como parte de Tomb Raider IV-VI Remastered",
      },
    ],
  },
  {
    id: "legend",
    label: "ERA LEGEND/LAU",
    years: "2006-2008",
    studio: "CRYSTAL DYNAMICS",
    title: "El relevo",
    intro:
      "Crystal Dynamics toma las riendas: motor nuevo, acrobacias más fluidas y una Lara más humana que nunca.",
    cardVariant: "full",
    games: [
      {
        slug: "tomb-raider-legend",
        title: "Tomb Raider: Legend",
        year: "2006",
        eraLabel: "REINICIO NARRATIVO · CRYSTAL DYNAMICS",
        premise:
          "Lara investiga la desaparición de su madre y descubre los primeros hilos de Avalon.",
        imageSrc: "/assets/tomb-raider-legend.webp",
        imageAlt: "Arte de portada de Tomb Raider: Legend",
        steamUrl: steamLinks["tomb-raider-legend"],
      },
      {
        slug: "tomb-raider-anniversary",
        title: "Tomb Raider: Anniversary",
        year: "2007",
        eraLabel: "REMAKE · CRYSTAL DYNAMICS",
        premise:
          "La aventura original de 1996, reconstruida con la jugabilidad moderna de Legend.",
        imageSrc: "/assets/tomb-raider-anniversary.webp",
        imageAlt: "Arte de portada de Tomb Raider: Anniversary",
        steamUrl: steamLinks["tomb-raider-anniversary"],
      },
      {
        slug: "tomb-raider-underworld",
        title: "Tomb Raider: Underworld",
        year: "2008",
        eraLabel: "CIERRE DE TRILOGÍA · CRYSTAL DYNAMICS",
        premise: "El cierre de la trilogía, en busca de los secretos perdidos de Avalon.",
        imageSrc: "/assets/tomb-raider-underworld.webp",
        imageAlt: "Arte de portada de Tomb Raider: Underworld",
        steamUrl: steamLinks["tomb-raider-underworld"],
      },
    ],
  },
  {
    id: "survivor",
    label: "ERA SURVIVOR/REBOOT",
    years: "2013-2018",
    studio: "CRYSTAL DYNAMICS",
    title: "El reinicio moderno",
    intro:
      "Una trilogía cinematográfica que humaniza a Lara: del trauma de un naufragio a convertirse en la Superviviente.",
    cardVariant: "full",
    games: [
      {
        slug: "tomb-raider-2013",
        title: "Tomb Raider",
        year: "2013",
        eraLabel: "REINICIO · CRYSTAL DYNAMICS",
        premise:
          "El origen. Una Lara joven naufraga en la isla de Yamatai y aprende a sobrevivir.",
        rating: "PEGI 18",
        imageSrc: "/assets/tomb-raider-2013.webp",
        imageAlt: "Arte de portada de Tomb Raider 2013",
        steamUrl: steamLinks["tomb-raider-2013"],
      },
      {
        slug: "rise-of-the-tomb-raider",
        title: "Rise of the Tomb Raider",
        year: "2015",
        eraLabel: "EXPANSIÓN · CRYSTAL DYNAMICS",
        premise:
          "Lara sigue los pasos de una civilización perdida en Siberia y se enfrenta a una organización paramilitar.",
        rating: "PEGI 16",
        imageSrc: "/assets/rise-of-the-tomb-raider.webp",
        imageAlt: "Arte de portada de Rise of the Tomb Raider",
        steamUrl: steamLinks["rise-of-the-tomb-raider"],
      },
      {
        slug: "shadow-of-the-tomb-raider",
        title: "Shadow of the Tomb Raider",
        year: "2018",
        eraLabel: "CIERRE DE TRILOGÍA · CRYSTAL DYNAMICS",
        premise:
          "El final de la trilogía: Lara se convierte en la Tomb Raider completa entre profecías mayas.",
        rating: "PEGI 16",
        imageSrc: "/assets/shadow-of-the-tomb-raider.webp",
        imageAlt: "Arte de portada de Shadow of the Tomb Raider",
        steamUrl: steamLinks["shadow-of-the-tomb-raider"],
      },
    ],
  },
];
