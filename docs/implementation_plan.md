# Plan de implementación — Landing "Descubre Tomb Raider"

Organización de las 21 historias (KAN-25 a KAN-45) en fases de desarrollo secuenciales, pensadas para arrancar directamente en Claude Code. Al final tienes un prompt de kickoff listo para pegar.

**Stack:** sigue sin estar decidido. El export de Claude Design **no es código de producción**: son prototipos `.dc.html` (plantillas con `{{ }}` + una clase de lógica JS con estilos inline, hechos en un framework de autoría propio). La tarea de dev es **recrear el diseño en el stack real del equipo** (React, Vue o el que se elija), replicando look & feel, estructura, estados y comportamiento. La secuencia de fases de este plan es válida para cualquier stack.

**Qué trae el export (design_handoff_tomb_raider_landing/):**
- `Tomb Raider.dc.html` — página completa (todas las secciones).
- `TitleCard.dc.html` — componente de ficha (se usa ~15 veces).
- `NewsletterForm.dc.html` — formulario de newsletter.
- `README.md` — **handoff detallado**: design tokens, comportamiento de cada sección, estados, accesibilidad. Es la fuente de verdad visual.
- `assets/` — `hero-video.mp4` (vídeo placeholder ya provisto) + 6 SVG ilustrativos placeholder.
- `image-slot.js` — utilidad de prototipado, **no se porta**: se sustituye por un `<img>`/componente de imagen del stack real.

---

## Fase 0 — Fundación (no son historias de Jira, pero bloquean todo lo demás)

Antes de tocar la primera historia, dev necesita:

1. **Design tokens del handoff** integrados como variables del stack (ya vienen definidos en el README del export):
   - Color: `--bg #13100b`, `--surface #1c1710`, `--gold #c8963e`, `--gold-light #e6bd73`, `--rust #a85a32`, `--text #f3ebdc`, y variantes muted/faint.
   - Tipografía: **Archivo** (700/900, display/títulos) + **Barlow** (400-700, cuerpo), vía Google Fonts.
   - Espaciado: escala 4·8·12·16·24·32·40·48·56·64·96. Radios pequeños (2-6px, estética angular). Motivo gráfico: triángulo ▲.
2. **Scaffolding por componente**, con los nombres reales del export: `Hero`, `HookSection`, `EraTimeline` (con `TitleCard` dentro), `CollapsibleBlock` (Otros juegos), `BeyondGamesBlock`, `NewsletterForm`, `Footer`. Página de una sola ruta con **navegación por anclas** (`#tr-hook`, `#tr-timeline`, `#tr-other`, `#tr-beyond`, `#tr-future`) y `scroll-behavior:smooth`.
3. **Copiar los assets** del export (`hero-video.mp4` + los 6 SVG) como placeholders iniciales, marcados para sustitución posterior.
4. **NO portar `image-slot.js`**: sustituir cada slot de imagen por un `<img>`/componente de imagen normal del stack.
5. **Retirar del código lo que es solo de prototipo:** el panel de tokens (`tokensOpen`) no pasa a producción.

**Salida de esta fase:** repo con estructura base + tokens integrados + componentes esqueleto + assets placeholder copiados.

---

## Fase 1 — Esqueleto de página (layout y navegación básica)

Objetivo: tener la página completa navegable de arriba a abajo, aunque el contenido sea provisional.

| Historia | Issue | Nota (según export) |
|---|---|---|
| Hero con vídeo ambiental (desktop) | KAN-25 | Vídeo `hero-video.mp4` ya provisto. Incluye parallax ligero al scroll + capa de partículas de polvo animada |
| Hero con imagen estática (mobile) | KAN-26 | El export usa breakpoint **`max-width:680px`** para conmutar vídeo→imagen (validar si el equipo usa 768px u otro estándar) |
| Control play/pausa del Hero | KAN-27 | Botón flotante abajo-derecha, `aria-label` dinámico, controla vídeo real + animaciones de polvo |
| Fallback de imagen si el vídeo no carga | KAN-28 | El `<video>` con evento `error` se oculta y muestra la imagen estática. También fuerza imagen si `prefers-reduced-motion: reduce` |
| Introducción a Lara Croft / Tomb Raider | KAN-29 | Sección `#tr-hook`, grid 2 columnas que colapsa a 1 en mobile |
| Footer con legal y CTA secundario | KAN-42 | ⚠️ **DISCREPANCIA**: el diseño **retiró el formulario de newsletter del footer** (ver nota abajo) |

**⚠️ Discrepancia a resolver en KAN-42 (Footer):** el requerimiento original definía un CTA secundario de newsletter en el footer, pero el diseño lo retiró deliberadamente para no duplicar el formulario (la CTA principal ya vive en "El futuro"). El footer del export tiene solo marca+disclaimer / Explorar / Legal + copyright, **sin formulario**. Esto es una mejora de UX razonable, pero **contradice el criterio de aceptación de KAN-42 tal como está escrito en Jira**. Antes de desarrollar hay que decidir: (a) aceptar la decisión de diseño y actualizar KAN-42 para quitar el CTA de newsletter del footer, o (b) mantener el requisito y pedir a Design que lo reincorpore. Recomiendo (a).

**Por qué primero:** son las secciones de entrada y salida de la página, no dependen de la lógica de datos de los títulos ni de integraciones externas. Fijan el layout general y el patrón visual del Hero cuanto antes.

---

## Fase 2 — Núcleo de contenido: Timeline y Ficha de título

Objetivo: el corazón funcional de la landing — la parte más compleja y con más lógica condicional.

| Historia | Issue | Nota (según export) |
|---|---|---|
| Timeline agrupada en 3 eras + "El futuro" | KAN-30 | Línea vertical con marcadores circulares (▲) por era. Cada era con kicker (label+años+estudio) + intro + grid de TitleCards |
| Timeline vertical en mobile | KAN-31 | ✅ **Ya resuelto por diseño**: el patrón de timeline es vertical de forma nativa, mismo layout en desktop y mobile. No requiere una variante aparte |
| Ficha de título (año, premisa, media) | KAN-32 | `TitleCard` con **2 variantes**: `compact` (era clásica, 6 cards densas) y completa (Legend/Survivor). Controlado 100% por props |
| Link a Steam por título disponible | KAN-33 | Botón "Comprar en Steam ↗", `target="_blank" rel="noopener noreferrer"`. Hoy dispara `console.log('[track] outbound_steam_click')` → sustituir por evento real |
| Ficha sin botón de compra si no hay Steam | KAN-34 | Controlado por prop `hasSteam`; si es false, muestra `steamNote` (ej. "Disponible como parte de … Remastered") |

**Confirmado por el diseño (refuerza mi recomendación previa):** `TitleCard` está construido como componente único controlado por props (`hasSteam`, `steamUrl`, `steamNote`, `compact`, `rating`…). KAN-32/33/34 son **un solo desarrollo con variantes de prop**, no tres componentes distintos.

**Detalle adicional del export:** la era Survivor/Reboot incluye un **badge de rating (PEGI 16/18)** en las cards. Esto conecta con KAN-45 (contenido/edad) — el diseño muestra el rating como badge informativo, sin age gate, coherente con lo acordado.

---

## Fase 3 — Bloques secundarios

Objetivo: contenido complementario que no bloquea el recorrido principal. Puede ir en paralelo a la Fase 2 si hay más de una persona desarrollando.

| Historia | Issue | Nota (según export) |
|---|---|---|
| Bloque colapsable de spin-offs | KAN-35 | El export **monta/desmonta el contenido del DOM** al abrir/cerrar (no solo `display:none`), para que no quede focuseable cuando está cerrado. `aria-expanded` + `aria-controls`. 3 TitleCards compactas con Steam |
| Bloque de cine y merchandising | KAN-36 | ⚠️ Requiere visto bueno de legal. 2 columnas: cine (carteles + "Más información ↗") y merch (botón "Ver tienda oficial ↗"), todo `target="_blank"` |

---

## Fase 4 — Newsletter (formulario + integración)

Objetivo: la única pieza con lógica de backend/integración real. Conviene aislarla porque depende de credenciales externas.

| Historia | Issue | Nota (según export) |
|---|---|---|
| Alta con doble opt-in | KAN-37 | Estado `success` → panel "Revisa tu correo" (simula el email de confirmación). ⚠️ Requiere API Mailchimp |
| Consentimiento RGPD obligatorio | KAN-38 | Checkbox no premarcado + link a política; sin marcar → mensaje inline `role="alert"`, no envía. Sin dependencia externa |
| Validación de formato de email | KAN-39 | Regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`, mensaje inline. Sin dependencia externa |
| Feedback de email ya suscrito | KAN-40 | Estado `already` → panel "Ya formas parte de la aventura". ⚠️ Requiere respuesta real de Mailchimp |
| Gestión de errores de integración | KAN-41 | Estado `error` → panel con botón "Reintentar" que vuelve a idle. ⚠️ Requiere integración |

**El diseño ya define la máquina de estados completa** del formulario: `idle | invalid | submitting | success | already | error`, con `email`, `consent`, `status` y `message` como estado del componente. Esto es exactamente lo que dev necesita para implementar los 5 estados sin ambigüedad.

**Simulación actual a sustituir:** el prototipo simula la respuesta con un `setTimeout(650ms)` (si el email contiene `ya@`/`existente` → "already", si contiene `error@` → "error", resto → "success"). Dev debe **reemplazar esa simulación por la integración real con Mailchimp** en el submit, manteniendo la misma máquina de estados. Recomendación intacta: KAN-38 y KAN-39 primero (frontend puro), el resto contra mock de Mailchimp hasta tener credenciales.

---

## Fase 5 — No funcionales y cierre

Objetivo: pulido transversal, una vez todo el contenido y los componentes existen.

| Historia | Issue | Nota (según export) |
|---|---|---|
| Responsive mobile-first en todas las secciones | KAN-43 | El diseño ya nace responsive por sección. Revisar el breakpoint del hero (680px) como estándar de equipo |
| Tracking de eventos (Steam + newsletter) | KAN-44 | Hoy son `console.log('[track] ...')`. ⚠️ Requiere naming de eventos + herramienta (GA4 u otra) para sustituir los stubs |
| Contenido sin age gate, material oficial | KAN-45 | ✅ Sin age gate confirmado en diseño; rating PEGI mostrado como **badge informativo** en cards Survivor. Checklist de contenido junto a PO/UX |

**Bonus que el diseño ya trae resuelto (no estaban como historias, pero conviene verificarlos en QA):** scroll-reveal con `IntersectionObserver`, foco visible dorado en todos los interactivos, skip link "Saltar al contenido principal", y soporte completo de `prefers-reduced-motion` (desactiva parallax, animaciones y fuerza imagen en el hero). Merece la pena que dev los conserve al recrear, no son opcionales de accesibilidad.

**Nota:** aunque está en "Fase 5", el enfoque **mobile-first no se aplica al final** — cada componente de las fases 1-4 debe nacer responsive. Esta fase es la pasada final de QA/ajuste, no el primer momento en que se piensa el mobile.

---

## Bloqueos / dependencias externas (transversales a todas las fases)

| Bloqueo | Afecta a | Mitigación mientras no está listo |
|---|---|---|
| URLs oficiales de Steam por título | KAN-33 | El export usa `#` de marcador; sustituir por URLs reales (prop `steamUrl`) |
| Visto bueno legal para imágenes de cine | KAN-36 | Bloque ya montado con placeholders; no publicar imagen real hasta aprobación |
| API/audiencia de Mailchimp | KAN-37, 40, 41 | La máquina de estados ya existe; hoy simulada con `setTimeout`. Conectar a Mailchimp real al final |
| Naming de eventos + herramienta de analítica | KAN-44 | Hoy son `console.log('[track] ...')`; sustituir por el evento real cuando esté el naming |
| Vídeo recopilatorio oficial del Hero | KAN-25 | ✅ **Ya no bloquea**: el export incluye `hero-video.mp4` como placeholder funcional. Sustituir por el oficial cuando esté licenciado |
| Assets oficiales (key art) por título | KAN-32 | ✅ **Ya no bloquea**: 6 SVG placeholder incluidos en `assets/`. Sustituir por key art oficial cuando esté |
| Plantilla email de doble opt-in | KAN-37 | Depende de Mailchimp/Marketing; el flujo de UI ya está |

---

## Orden recomendado para el equipo (resumen)

```
Fase 0 → Fase 1 → Fase 2 → (Fase 3 en paralelo si hay capacidad) → Fase 4 → Fase 5
```

---

## Prompt de kickoff para Claude Code

Pega esto en Claude Code para arrancar el desarrollo (con la carpeta del export en el repo):

```
Vamos a implementar la landing "Descubre Tomb Raider". En el repo tienes la carpeta
design_handoff_tomb_raider_landing/ con el export de Claude Design. Léela entera antes
de empezar, en especial README.md (design tokens, secciones, estados y accesibilidad),
y los .dc.html (Tomb Raider.dc.html, TitleCard.dc.html, NewsletterForm.dc.html).

IMPORTANTE: los .dc.html NO son código de producción — son prototipos en un framework
de autoría propio. Tu tarea es RECREAR ese diseño en [STACK: React/Vue/el que definamos],
replicando fielmente look & feel, estructura, estados y comportamiento del README.

Empieza por la Fase 0:
- Integra los design tokens del README (colores --bg/--surface/--gold/etc., fuentes
  Archivo + Barlow, escala de espaciado, radios pequeños) como variables del stack.
- Monta el scaffolding por componente: Hero, HookSection, EraTimeline (con TitleCard),
  CollapsibleBlock (Otros juegos), BeyondGamesBlock, NewsletterForm, Footer. Página de
  una ruta con navegación por anclas y scroll suave.
- Copia los assets de assets/ (hero-video.mp4 + los 6 SVG) como placeholders.
- NO portes image-slot.js: sustituye cada slot por un <img>/componente de imagen normal.
- No incluyas el panel de tokens del prototipo (tokensOpen) en producción.

Para lo que aún depende de terceros usa placeholders/stubs claramente marcados
(// TODO): URLs de Steam (hoy "#"), integración Mailchimp (hoy simulada con setTimeout),
eventos de tracking (hoy console.log), imágenes de cine (pendiente legal).

Cuando termines la Fase 0, resume qué has montado y pasamos a la Fase 1 (Hero, Hook, Footer).
```

Al terminar cada fase, pídele a Claude Code que confirme el checklist de historias cubiertas de esa fase antes de avanzar — así os aseguráis de no saltaros ningún criterio de aceptación de Jira.
