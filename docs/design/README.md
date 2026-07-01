# Handoff: Landing "Descubre Tomb Raider"

## Overview
Landing de **descubrimiento** de la saga Tomb Raider para alguien que no la conoce. El objetivo es que la persona recorra la historia y todos los títulos de forma amena y editorial. **No es una tienda**: la compra en PC es un enlace secundario a Steam por título. Incluye captación de newsletter (Mailchimp, doble opt-in). Idioma: español (ES) únicamente en esta entrega, preparado para i18n futuro. Enfoque mobile-first, responsive.

## Sobre los archivos de diseño
Los archivos `.dc.html` de esta carpeta son **prototipos de diseño en HTML** construidos con un framework de autoría propio (plantillas + una clase de lógica en JS, todo con estilos inline). **No son código de producción para copiar tal cual.** La tarea es **recrear este diseño en el entorno/stack real del equipo** (React, Vue, o el framework que ya use el codebase de destino — o el que el equipo elija si no hay uno todavía), replicando fielmente look & feel, estructura, estados y comportamiento descritos aquí.

Para leer la estructura: cada `.dc.html` tiene un bloque de plantilla (HTML con `{{ }}` para valores dinámicos) y una clase `Component` en `<script>` con el estado y los manejadores de eventos — es el equivalente a JSX + hook de estado de un componente React, solo que en otra sintaxis.

## Fidelidad
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciados y estados están definidos y listos para reproducirse con precisión. Los assets de imagen/vídeo son placeholders temáticos originales (no material oficial con licencia) — ver sección Assets.

## Pantallas / Secciones
La landing es de una sola página (scroll continuo) con navegación por anclas. Contenida en `Tomb Raider.dc.html`.

### 1. Hero cinemático
- **Propósito:** enganchar con tono cinematográfico, presentar el wordmark de la saga.
- **Layout:** `<header>` a pantalla completa (`min-height:100svh`), `display:flex; flex-direction:column`. Contenido centrado vertical y horizontalmente.
- **Fondo:** capas apiladas con `position:absolute; inset:0` dentro de un contenedor `overflow:hidden`:
  1. `<video autoplay muted loop playsinline>` a pantalla completa (`object-fit:cover`), con `poster` de respaldo.
  2. Capa `#tr-hero-mobile-bg` con imagen estática de fondo — oculta en desktop, mostrada por CSS media query en **`max-width:680px`** y también cuando `prefers-reduced-motion: reduce`.
  3. Capa de partículas de polvo animada (`@keyframes trDust`, 26s, `mix-blend-mode:screen`, opacidad .6).
  4. **Scrim**: `linear-gradient(180deg, rgba(12,9,5,.55) 0%, rgba(12,9,5,.15) 34%, rgba(12,9,5,.55) 72%, rgba(12,9,5,.94) 100%)` — degradado oscuro→claro→oscuro para dar contraste al texto arriba/abajo.
- **Nav:** logo "TR" a la izquierda, 3 links a la derecha (La saga / Otros juegos / El futuro), con scroll suave por ancla y subrayado dorado al hover/focus.
- **Wordmark:** `TOMB RAIDER` en dos líneas, Archivo 900, `letter-spacing:.08em`, `line-height:.9`, tamaño `clamp(52px, 11vw, 150px)`, `text-shadow:0 6px 40px rgba(0,0,0,.6)`.
- **Claim:** "DESCUBRE LA SAGA" (kicker, 13px, `letter-spacing:.42em`, color `#e6bd73`) + párrafo de 1 frase (`clamp(17px,2vw,21px)`, color `#e4d8bf`, max-width 560px) + CTA "EMPEZAR EL RECORRIDO" (botón sólido dorado, ancla a `#tr-hook`).
- **Control de reproducción (accesibilidad):** botón flotante abajo-derecha, `aria-label` dinámico ("Pausar/Reproducir la animación de fondo del hero"), controla el `<video>` real (`play()`/`pause()`) y pausa las animaciones CSS del polvo.
- **Fallback:** si el `<video>` dispara `error`, se oculta y se muestra la imagen estática automáticamente.

### 2. Hook de personaje (`#tr-hook`)
- **Propósito:** responder "¿Quién es Lara Croft? / ¿Qué es Tomb Raider?" en tono editorial.
- **Layout:** grid de 2 columnas (`repeat(auto-fit, minmax(320px,1fr))`, gap 56px) — colapsa a 1 columna en mobile.
- Cada columna: kicker (12px, `letter-spacing:.2em`, color `#a85a32`) + H2 (Archivo 900, `clamp(28px,4vw,42px)`) + párrafo (17px, `line-height:1.65`, color `#d9cbae`) + imagen (slot 220px alto, `border-radius:4px`).

### 3. Timeline de la saga (`#tr-timeline`)
- **Propósito:** columna vertebral — recorrido cronológico por 3 eras + "El futuro".
- **Estructura visual:** una línea vertical continua (`::before` con gradiente dorado→transparente, `left:19px`) conecta marcadores circulares (40×40px, borde dorado, icono ▲) de cada era. **Este patrón ya es "vertical" de forma nativa — funciona igual en desktop y mobile**, cumpliendo el requisito de timeline vertical en mobile.
- Cada era: marcador + kicker (label + rango de años + estudio) + H3 + párrafo de intro (1-2 frases) + grid de `TitleCard` (ver componente abajo).
  - **Era Clásica (1996–2003):** grid denso `repeat(auto-fit,minmax(170px,1fr))`, 6 cards **compactas**, todas sin botón Steam (nota "Disponible como parte de Tomb Raider I–III / IV–VI Remastered").
  - **Era Legend/LAU (2006–2008):** grid `repeat(auto-fit,minmax(260px,1fr))`, 3 cards **completas**, con botón Steam.
  - **Era Survivor/Reboot (2013–2018):** igual layout, 3 cards completas con botón Steam + badge de rating (PEGI 16/18).
  - **El futuro:** marcador con icono animado (`✦`, pulso `@keyframes trChevron`), texto breve + link "Ir al cierre ↓" que ancla a `#tr-future`.

### 4. Otros juegos (`#tr-other`) — bloque colapsable
- **Propósito:** spin-offs fuera del hilo narrativo (Guardian of Light, Temple of Osiris, Lara Croft GO).
- **Comportamiento:** `<button>` de cabecera con `aria-expanded` + `aria-controls` apuntando al panel; el contenido se **monta/desmonta del DOM** al abrir/cerrar (no solo se oculta visualmente) para que no quede focuseable cuando está cerrado. Icono ▲ que rota 180° según estado.
- Contenido: grid de 3 `TitleCard` compactas, todas con botón Steam.

### 5. Más allá de los juegos (`#tr-beyond`)
- **Propósito:** cine y merchandising, sin fichas detalladas, solo enlaces externos.
- **Layout:** 2 columnas (`repeat(auto-fit,minmax(320px,1fr))`).
  - **Cine:** 2 filas con cartel (64×88px) + título + años + link "Más información ↗" (`target="_blank"`).
  - **Merchandising:** tarjeta con texto + botón outline "Ver tienda oficial ↗".

### 6. Cierre "El futuro" + Newsletter (`#tr-future`)
- **Propósito:** CTA principal de newsletter, teaser del nuevo título.
- **Layout:** sección centrada, max-width 720px, fondo con gradiente + resplandor radial sutil. H2 + párrafo + `NewsletterForm` (variante completa).

### 7. Footer
- **Layout:** grid de 3 columnas (marca+disclaimer / Explorar / Legal) + línea de copyright. **Sin formulario de newsletter** (se retiró a petición explícita: la CTA principal ya vive en "El futuro", evitar duplicar el formulario).

## Componentes reutilizables

### `TitleCard` (`TitleCard.dc.html`)
Ficha de título repetible. Props: `title`, `year`, `era`, `premise`, `rating` (opcional), `hasSteam` (bool), `steamUrl`, `steamNote`, `imageLabel`, `imageSrc`, `compact` (bool), `slotId`.
- **Variante compacta** (era clásica): imagen 96px alto, título 16px, premisa 12.5px, botón Steam pequeño o nota.
- **Variante completa** (legend/lau, reboot): imagen min-height 190px con año superpuesto (32px) y badge de rating opcional, título 24px, premisa 14.5px, botón Steam grande.
- **Estados de la imagen/botón:**
  - Con botón Steam → botón sólido dorado "Comprar en Steam ↗", abre en pestaña nueva (`target="_blank" rel="noopener noreferrer"`), dispara `console.log('[track] outbound_steam_click', {title, year, era})` — **sustituir por el evento real de analítica** (ver Naming de eventos pendiente).
  - Sin botón Steam → texto de nota (ej. "Disponible como parte de Tomb Raider I–III Remastered").
- Hover: `border-color` se aclara + `translateY(-3px)`.
- La imagen es un slot de arrastrar-soltar (`<image-slot>`) con una ilustración placeholder de fondo (`imageSrc`) hasta que se sustituya por key art oficial.

### `NewsletterForm` (`NewsletterForm.dc.html`)
Formulario de newsletter, un solo campo email + checkbox RGPD (no premarcado) + link a política de privacidad. Prop `compact` (bool) ajusta ancho y oculta el texto de ayuda de modo demo.
- **Estados:**
  1. **Idle / validación:** si el email no cumple el regex `^[^\s@]+@[^\s@]+\.[^\s@]+$` o el checkbox no está marcado, se muestra un mensaje inline (`role="alert"`) sin enviar.
  2. **Enviando:** botón deshabilitado, texto "Enviando…".
  3. **Éxito:** reemplaza el formulario por un panel "Revisa tu correo" (simula el email de confirmación del doble opt-in).
  4. **Ya suscrito:** panel "Ya formas parte de la aventura".
  5. **Error:** panel de error con botón "Reintentar" que vuelve a idle.
- **Simulación actual (solo prototipo):** tras `setTimeout(650ms)`, si el email contiene `ya@` o `existente` → estado "already"; si contiene `error@` → estado "error"; en cualquier otro caso → "success". **Esto debe sustituirse por la integración real con Mailchimp** (API/audience) en el submit.
- Evento a instrumentar en integración real: alta a newsletter (envío) y confirmación (doble opt-in completado) — ver dependencias pendientes.

### Bloque colapsable (inline en la sección "Otros juegos")
Patrón simple: botón con `aria-expanded`/`aria-controls` + contenido condicional. Reutilizar este mismo patrón si se necesitan más acordeones.

## Interacciones y comportamiento
- **Scroll-reveal:** todos los bloques de contenido llevan la clase `tr-reveal` (opacity 0 + translateY 26px) y un `IntersectionObserver` (threshold 0.12) añade la clase `tr-in` la primera vez que entran en viewport (`unobserve` tras dispararse una vez).
- **Parallax ligero:** al hacer scroll, el `<video>` del hero se desplaza (`translateY(scrollY*0.08) scale(1.06)`) — desactivado si `prefers-reduced-motion: reduce`.
- **`prefers-reduced-motion: reduce`:** desactiva `scroll-behavior:smooth`, las animaciones CSS (`[data-tr-anim]`), el parallax, y fuerza la imagen estática del hero en vez del vídeo.
- **Navegación:** todos los links de nav/footer son anclas (`#tr-hook`, `#tr-timeline`, `#tr-other`, `#tr-beyond`, `#tr-future`) con `scroll-behavior:smooth` en `<html>`.
- **Foco visible:** todo elemento interactivo (links, botones, checkbox, input) tiene un estado `:focus` con `outline` dorado de al menos 2-3px y offset — necesario para navegación por teclado.
- **Skip link:** enlace "Saltar al contenido principal" oculto hasta recibir foco (primer tab), salta a `<main id="tr-main">`.
- **Breakpoint hero video/imagen:** `@media (max-width:680px)` oculta el `<video>` y muestra `#tr-hero-mobile-bg` (imagen). Ajustar el breakpoint si el equipo de desarrollo usa otro estándar (ej. 768px).

## Gestión de estado
Estado vive en la clase de lógica de cada componente (equivalente a `useState` en React):
- **`Tomb Raider` (raíz):** `tokensOpen` (panel de tokens, solo referencia de diseño — **no debe pasar a producción**), `heroPlaying` (bool, controla vídeo + animaciones), `otherOpen` (bool, acordeón "Otros juegos").
- **`NewsletterForm`:** `email` (string), `consent` (bool), `status` (`idle | invalid | submitting | success | already | error`), `message` (string, texto de validación).
- **`TitleCard`:** sin estado propio, puramente controlado por props.

## Design tokens
**Color** (paleta "tierra/oro cálido, tumba iluminada por sol"):
- `--bg`: `#13100b` (fondo general)
- `--surface`: `#1c1710` (tarjetas)
- `--surface-2`: `#0e0b07` / `#0a0805` (franjas oscuras, footer)
- `--gold`: `#c8963e` (acento primario, botones)
- `--gold-light`: `#e6bd73` (hover, kickers)
- `--rust`: `#a85a32` (acento secundario)
- `--text`: `#f3ebdc` (texto principal)
- `--text-muted`: `#d9cbae` / `#b7a889` (cuerpo secundario)
- `--text-faint`: `#7d7261` / `#5f574a` (metadatos, copyright)
- Bordes/divisores: `rgba(200,150,62,.16–.22)`

**Tipografía:**
- Display/wordmark/títulos: **Archivo**, pesos 700/900 (`https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900`)
- Cuerpo: **Barlow**, pesos 400/500/600/700
- Escala: 12 · 13 · 14 · 15 · 16 · 17 · 18 · 24 · 28 · 32 · 34 · 40 · 44 · 52 · clamp(52–150px) para el wordmark del hero.

**Espaciado:** 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 56 · 64 · 96 px.

**Radio:** 2px (botones, chips) / 4-6px (tarjetas). Estética deliberadamente angular ("piedra tallada"), no se usan radios grandes.

**Motivo gráfico:** triángulo/cumbre ▲ como viñeta recurrente (separadores, marcadores de timeline, bullets).

## Assets
- **`assets/hero-video.mp4`** — vídeo de fondo del hero (autoplay/loop/muted) proporcionado por el usuario. **Sustituir por el vídeo recopilatorio oficial final** cuando esté disponible/licenciado.
- **`assets/temple-sunset.svg`, `jungle-ruins.svg`, `cave-torch.svg`, `desert-dunes.svg`, `cliff-tomb.svg`, `poster-frame.svg`** — ilustraciones **originales generadas para este prototipo** (SVG, paleta del sistema), usadas como placeholders temáticos en las fichas de título, el hook y los carteles de cine. **No son material oficial de Tomb Raider** — deben sustituirse por key art / carteles oficiales una vez licenciados (ver dependencias del documento de requerimientos).
- **`image-slot.js`** — web component de terceros (parte del entorno de autoría) que implementa el "hueco" de arrastrar-y-soltar de imagen con persistencia. **En la recreación en el codebase real, esto se sustituye por un simple `<img>`/componente de imagen del stack de destino** — no es necesario reproducir el mecanismo de drag-and-drop del prototipo.

## Dependencias pendientes antes de producción (heredadas del documento de requerimientos)
1. URLs oficiales de Steam por título (hoy son `#` de marcador).
2. Confirmación legal/licencia de imágenes de cine para "Más allá de los juegos".
3. Material promocional oficial (key art/trailers) por título y por franquicia cine/merch.
4. Vídeo recopilatorio oficial del hero + imagen estática de fallback definitivos.
5. Naming de eventos de tracking y herramienta de analítica (GA4 u otra) — hoy los clics de Steam solo hacen `console.log`.
6. Acceso/API de Mailchimp para integrar el submit real del formulario (hoy es una simulación local con `setTimeout`).
7. Plantilla de email de doble opt-in.

## Archivos
- `Tomb Raider.dc.html` — página completa (Hero, Hook, Timeline, Otros juegos, Más allá, Cierre+Newsletter, Footer).
- `TitleCard.dc.html` — componente de ficha de título (usado ~15 veces).
- `NewsletterForm.dc.html` — componente de formulario de newsletter (usado 1 vez, en "El futuro").
- `image-slot.js` — utilidad de placeholders de imagen del entorno de prototipado (no portar tal cual, ver Assets).
- `assets/` — vídeo e ilustraciones placeholder.
- `requerimientos-landing-tomb-raider.md`, `brief-diseno-claude-design-tomb-raider.md` — documentos funcionales de origen, para contexto completo de producto.
