# Brief de diseño — Prototipo landing "Descubre Tomb Raider"

Adjunto el documento de requerimientos funcionales como fuente de verdad. Quiero que diseñes un **prototipo de alta fidelidad** de esta landing, en **desktop y mobile**, listo para iterar y para pasar después a Claude Code para su implementación.

## Qué es
Landing de **descubrimiento** de la saga Tomb Raider para alguien que no la conoce. El objetivo es que descubra el universo y recorra todos los títulos de forma amena. **No es una tienda ni un funnel de compra**: la compra son solo links secundarios a Steam. Idioma: **español**. Enfoque **mobile-first, responsive**.

## Dirección de arte
- Tono **cinematográfico, atmosférico y de aventura/exploración** (arqueología, tumbas, misterio). Que "descubrir Tomb Raider" se sienta épico, no un catálogo.
- **Patrón de Hero tipo Elden Ring** (landing oficial de Bandai Namco): wordmark/título grande en tipografía de marca superpuesto sobre **fondo en vídeo animado**, con degradado oscuro (scrim) para legibilidad. En mobile, imagen estática con el mismo tratamiento.
- Paleta sugerida: base oscura/nocturna, con acentos cálidos (ámbar/dorado/tierra) que evoquen antorchas, oro y ruinas. Contraste alto para el texto sobre imagen.
- Tipografía: un display con carácter para titulares/wordmarks + una sans legible para cuerpo.
- **Assets:** usa placeholders neutros (key art y vídeo son material oficial pendiente de licencia). No uses gameplay gráfico/violento; deja huecos claros marcados como "asset oficial pendiente".

## Secciones a diseñar (en este orden)
1. **Hero cinemático** — vídeo de fondo (autoplay, loop, muted) + wordmark grande + claim corto + scrim. Control mínimo play/pause. Mobile = imagen estática.
2. **Hook de personaje** — intro corta "¿Quién es Lara Croft? / ¿Qué es Tomb Raider?".
3. **Timeline de la saga** (columna vertebral) — agrupada en **3 eras** + cierre "El futuro":
   - Era Clásica (1996–2003) · Era Legend/LAU (2006–2008) · Era Survivor/Reboot (2013–2018) · El futuro.
   - Cada era con intro de 1-2 frases. **En mobile, timeline vertical.**
4. **Ficha de título** (componente repetible) — año, premisa corta, media, y botón "Comprar en Steam" **solo si aplica** (diseña el estado con botón y sin botón; para clásicos, nota "Disponible como parte de Remastered").
5. **"Otros juegos"** — bloque colapsable (spin-offs), fuera del hilo principal.
6. **"Más allá de los juegos"** — bloque secundario: cine y merchandising con links externos. Sin fichas detalladas.
7. **Cierre "El futuro" + Newsletter** — teaser del nuevo título como gancho + formulario.
8. **Footer** — CTA secundario de newsletter + legal/privacidad.

## Componentes clave con TODOS sus estados
- **Card de título**: con botón Steam / sin botón / con nota "Remastered".
- **Timeline**: versión desktop y versión vertical mobile.
- **Formulario newsletter** (solo campo email + casilla de consentimiento RGPD no premarcada + link a política). Diseña los 4 estados: (1) validación de email, (2) éxito, (3) error, (4) email ya suscrito.
- **Bloque colapsable** (abierto/cerrado).
- **Estados de hover/focus** para links y botones (accesibilidad).

## Requisitos para el handoff a Claude Code
- Estructura **modular y por componentes** (Hero, EraSection, TitleCard, NewsletterForm, etc.), no un lienzo monolítico.
- Define **design tokens**: paleta, tipografía (tamaños/escala), espaciados, radios. Que sean reutilizables.
- Deja claros los **breakpoints** desktop/mobile y cómo se reordena cada sección.
- Copys en español dentro del diseño (aunque sean provisionales).

Empieza proponiéndome la **dirección visual del Hero + un título de la timeline** para validar el estilo antes de desplegar todas las secciones.
