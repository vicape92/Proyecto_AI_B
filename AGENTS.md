# AGENTS.md

Guia operativa para agentes y desarrolladores que trabajen en esta landing. Antes de implementar, lee este archivo junto con:

- `docs/implementation_plan.md`
- `docs/historias-usuario-landing-tomb-raider.md`
- `docs/estilos-comunes-diseno.md`
- `docs/design/README.md`
- `docs/design/Tomb Raider.dc.html`
- `docs/design/TitleCard.dc.html`
- `docs/design/NewsletterForm.dc.html`

## Objetivo del proyecto

Construir una landing page de una sola ruta para "Descubre Tomb Raider", en espanol, mobile-first y con alta fidelidad al mockup de `docs/design/`.

El objetivo principal es descubrir la saga y recorrer su historia. No es una tienda. Los enlaces a Steam son secundarios y solo aparecen por titulo cuando exista URL oficial configurada. La newsletter vive como CTA principal en el bloque "El futuro".

## Fuente de verdad

1. `docs/design/README.md` es la fuente de verdad visual: tokens, comportamiento, estados, accesibilidad y assets.
2. `docs/estilos-comunes-diseno.md` es la guia compartida de estilos para implementar esos tokens y contratos visuales.
3. `docs/implementation_plan.md` define el orden de ejecucion por fases.
4. `docs/historias-usuario-landing-tomb-raider.md` define criterios de aceptacion.
5. Los `.dc.html` son prototipos de diseno, no codigo de produccion.

No portes literalmente los `.dc.html`, `style` inline, `dc-import`, `sc-if`, `support.js` ni `image-slot.js`. Reproduce su estructura, apariencia, estados y comportamiento en el stack real.

## Stack y criterio de arranque

El stack todavia no esta cerrado en la documentacion. Si el equipo ya ha elegido stack, usa ese stack y adapta la estructura manteniendo los mismos limites de componentes.

Si el proyecto arranca desde cero y no hay decision previa, la recomendacion por defecto es:

- Vite
- React
- TypeScript
- CSS Modules o CSS plano organizado por capa si no se adopta un design system
- Playwright para smoke/visual responsive

No introduzcas CMS, backend propio, gestor de estado global ni framework pesado salvo que una historia lo requiera.

## Estructura recomendada

Estructura objetivo si se implementa como app frontend:

```text
.
+-- AGENTS.md
+-- docs/
|   +-- implementation_plan.md
|   +-- historias-usuario-landing-tomb-raider.md
|   +-- design/
+-- public/
|   +-- assets/
|       +-- hero-video.mp4
|       +-- temple-sunset.svg
|       +-- jungle-ruins.svg
|       +-- cave-torch.svg
|       +-- desert-dunes.svg
|       +-- cliff-tomb.svg
|       +-- poster-frame.svg
+-- src/
|   +-- app/
|   |   +-- TombRaiderLanding.tsx
|   +-- components/
|   |   +-- Hero/
|   |   +-- HookSection/
|   |   +-- EraTimeline/
|   |   +-- TitleCard/
|   |   +-- CollapsibleBlock/
|   |   +-- BeyondGamesBlock/
|   |   +-- NewsletterForm/
|   |   +-- Footer/
|   +-- content/
|   |   +-- games.ts
|   |   +-- eras.ts
|   |   +-- navigation.ts
|   |   +-- externalLinks.ts
|   +-- integrations/
|   |   +-- newsletter.ts
|   +-- styles/
|   |   +-- tokens.css
|   |   +-- global.css
|   |   +-- motion.css
|   |   +-- utilities.css
|   +-- types/
|   |   +-- landing.ts
|   +-- main.tsx
```

### Responsabilidades por carpeta

- `public/assets/`: copia exacta inicial de los placeholders de `docs/design/assets/`. Sustituirlos por assets oficiales solo cuando PO/UX/legal lo aprueben.
- `src/app/`: composicion de la pagina de una sola ruta.
- `src/components/`: componentes UI aislados. Cada componente debe poder revisarse contra su equivalente del mockup.
- `src/content/`: datos serializables de eras, juegos, textos, notas Remastered, ratings PEGI y enlaces externos.
- `src/integrations/`: fronteras con servicios externos. Deben exponer APIs pequenas y testeables.
- `src/styles/`: tokens globales, reset minimo, motion y utilidades compartidas.

## Componentes obligatorios

Mantener estos nombres o equivalentes directos:

- `Hero`: video desktop, imagen mobile/fallback, scrim, polvo, CTA, nav y control play/pause.
- `HookSection`: bloque editorial "Lara Croft" / "Tomb Raider".
- `EraTimeline`: timeline vertical con eras, marcadores y cierre "El futuro".
- `TitleCard`: una sola ficha con variantes por props, no componentes duplicados.
- `CollapsibleBlock`: "Otros juegos", con montaje/desmontaje del contenido al abrir/cerrar.
- `BeyondGamesBlock`: cine y merchandising, enlaces externos.
- `NewsletterForm`: maquina de estados del formulario.
- `Footer`: legal, marca y navegacion; sin formulario salvo decision explicita contraria.

## Tokens visuales

Implementar los tokens del handoff como variables CSS o equivalente del stack:

```css
:root {
  --tr-bg: #13100b;
  --tr-surface: #1c1710;
  --tr-surface-2: #0e0b07;
  --tr-surface-3: #0a0805;
  --tr-gold: #c8963e;
  --tr-gold-light: #e6bd73;
  --tr-rust: #a85a32;
  --tr-text: #f3ebdc;
  --tr-text-muted: #d9cbae;
  --tr-text-soft: #b7a889;
  --tr-text-faint: #7d7261;
}
```

Tipografia:

- Display/titulos: Archivo, pesos 700 y 900.
- Cuerpo: Barlow, pesos 400 a 700.
- Mantener wordmark con `letter-spacing` positivo y escala `clamp(52px, 11vw, 150px)`.

Espaciado:

- Usar la escala 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 96.
- Radios pequenos: 2px en botones/chips, 4-6px en tarjetas.
- No usar radios grandes, paletas ajenas ni decoracion generica que rompa el tono de ruina/piedra/oro.

## Reglas de fidelidad al mockup

- El mockup de `docs/design/` es exacto en intencion visual. Replica layout, jerarquia, espaciado, estados y comportamiento.
- No anadas landing marketing generica, secciones extra ni copy explicativo fuera del flujo definido.
- Mantener el orden: Hero, Hook, Timeline, Otros juegos, Mas alla de los juegos, El futuro + Newsletter, Footer.
- Mantener navegacion por anclas: `#tr-hook`, `#tr-timeline`, `#tr-other`, `#tr-beyond`, `#tr-future`.
- Mantener `scroll-behavior:smooth`, salvo `prefers-reduced-motion: reduce`.
- Mantener el breakpoint del diseno para hero video/imagen en `max-width: 680px`, salvo decision de equipo documentada.
- No incluir en produccion el panel de tokens del prototipo (`tokensOpen`).

## Datos y contenido

Separar datos de presentacion. Las eras y juegos deben vivir en `src/content/` o equivalente:

- Era Clasica: 1996-2003, Core Design, 6 cards compactas, sin boton Steam, con nota Remastered.
- Era Legend/LAU: 2006-2008, Crystal Dynamics, 3 cards completas, con Steam cuando haya URL.
- Era Survivor/Reboot: 2013-2018, 3 cards completas, con Steam y badge PEGI.
- Otros juegos: Guardian of Light, Temple of Osiris, Lara Croft GO, bloque colapsable.
- El futuro: teaser y newsletter.

Los enlaces `#` del prototipo son placeholders. No publiques enlaces falsos como si fueran reales.

## Newsletter

Implementar la maquina de estados definida por el mockup:

- `idle`
- `invalid`
- `submitting`
- `success`
- `already`
- `error`

Reglas:

- Email unico, sin nombre ni campos extra.
- Validacion frontend con `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
- Checkbox RGPD obligatorio y no premarcado.
- Mensajes inline con `role="alert"` para validaciones.
- Paneles de estado para exito, ya suscrito y error.
- Boton "Reintentar" vuelve a `idle`.
- La simulacion con `setTimeout` solo vale como stub temporal. La integracion real debe estar aislada en `integrations/newsletter.ts`.

No exponer secretos de Mailchimp en frontend. Si Mailchimp requiere credenciales privadas, usar una funcion serverless, backend existente o proxy seguro definido por el equipo.

## Analitica

Crear una frontera `trackEvent` o equivalente para evitar `console.log` dispersos.

Eventos pendientes de naming final:

- Click saliente a Steam, con titulo, ano y era.
- Envio de newsletter.
- Confirmacion de doble opt-in, si el flujo tecnico permite recibir ese evento.

Mientras no exista herramienta/naming de analitica, dejar stubs marcados con `TODO(analytics)` y comportamiento no bloqueante.

## Accesibilidad

La accesibilidad del handoff no es opcional:

- Skip link a `<main id="tr-main">`.
- `aria-label` dinamico en play/pause del hero.
- Video `autoplay muted loop playsinline`.
- Si el video falla, mostrar fallback estatico sin huecos.
- `prefers-reduced-motion: reduce` desactiva smooth scroll, parallax, polvo y fuerza imagen estatica.
- Foco visible dorado en botones, links, inputs y checkbox.
- Acordeon con `aria-expanded` y `aria-controls`.
- El contenido colapsado no debe quedar focuseable.
- Links externos con `target="_blank"` y `rel="noopener noreferrer"`.
- Formularios con label accesible, `aria-invalid` y `aria-describedby`.

## Performance

- Mobile sirve imagen estatica en el hero, no video.
- Mantener video corto, comprimido y con poster/fallback.
- Usar `object-fit: cover` para media de hero y cards.
- Evitar librerias de animacion para interacciones que CSS/IntersectionObserver resuelven bien.
- No bloquear LCP con integraciones externas de newsletter o analitica.

## QA minimo antes de cerrar una fase

Cada fase del `implementation_plan.md` debe cerrarse con verificacion concreta:

- Ejecutar lint/typecheck/test disponibles en el stack.
- Revisar desktop y mobile.
- Comprobar que no hay scroll horizontal.
- Verificar teclado: skip link, nav, CTA, acordeon, Steam links, formulario.
- Verificar `prefers-reduced-motion`.
- Verificar fallback de video.
- Verificar estados del newsletter.
- Comparar visualmente contra `docs/design/`.

Si existe Playwright, cubrir al menos:

- Carga inicial de la landing.
- Hero desktop con video/control.
- Hero mobile con imagen.
- Acordeon abierto/cerrado.
- Newsletter: invalid email, consentimiento ausente, success, already, error usando stub.
- Navegacion por anclas.

## Fases de trabajo

Seguir el orden del plan:

1. Fundacion: tokens, scaffolding, assets, ruta unica.
2. Esqueleto: Hero, Hook y Footer.
3. Timeline y `TitleCard`.
4. Bloques secundarios.
5. Newsletter e integracion.
6. No funcionales, analitica y cierre QA.

No mezcles fases si eso impide validar criterios de aceptacion. Si se avanza en paralelo, mantener PRs o commits separados por area.

## Puntos abiertos que requieren decision

Preguntar al usuario o responsable antes de cerrar como produccion:

- Stack definitivo, si no se acepta la recomendacion React/Vite/TypeScript.
- Discrepancia footer: requerimientos originales pedian CTA secundario de newsletter, pero el diseno final lo retiro. La recomendacion del plan es respetar el diseno y actualizar el criterio de aceptacion.
- URLs oficiales de Steam.
- Licencia legal de imagenes de cine.
- Assets oficiales finales.
- API/audience de Mailchimp y ubicacion segura de secretos.
- Herramienta y naming de analitica.
- Plantilla de email de doble opt-in.

## Estilo de cambios

- Cambios pequenos y verificables.
- No refactorizar documentos de requisitos salvo peticion explicita.
- No sustituir placeholders por assets no autorizados.
- No introducir contenido en otro idioma en esta entrega.
- Mantener comentarios `TODO(...)` solo para dependencias reales y trazables.
- Si una historia no se puede completar por bloqueo externo, dejar stub funcional, documentar el bloqueo y mantener la UI validable.
