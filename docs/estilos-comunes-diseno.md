# Manual tecnico de diseno

Landing "Descubre Tomb Raider". Este manual normaliza los estilos comunes que deben usar todos los desarrolladores del repo.

Fuente de verdad visual: `docs/design/`.

- `docs/design/README.md`: handoff funcional y visual.
- `docs/design/Tomb Raider.dc.html`: pagina completa.
- `docs/design/TitleCard.dc.html`: ficha de titulo.
- `docs/design/NewsletterForm.dc.html`: formulario newsletter.

Los `.dc.html` son prototipos. No se copian como produccion, pero sus valores visuales si son vinculantes.

## 1. Direccion visual

La interfaz debe sentirse cinematografica, oscura, editorial y arqueologica. La referencia visual es un hero de videojuego premium: wordmark enorme sobre video/imagen, scrim oscuro y acentos calidos de oro/antorcha.

Reglas no negociables:

- Fondo oscuro dominante.
- Acentos dorados y oxido, nunca azul, morado o blanco puro.
- Esquinas pequenas y angulares.
- Jerarquia tipografica fuerte con `Archivo`.
- Texto largo legible con `Barlow`.
- Componentes sobrios: no usar cards decorativas fuera de fichas, filas de cine y paneles de estado.
- La compra en Steam es secundaria. El diseno no debe parecer ecommerce.

## 2. Paleta de colores

Todos los colores base deben declararse como hex. Los overlays pueden usar estos mismos colores con alpha.

| Token | Hex | Uso tecnico |
| --- | --- | --- |
| `--tr-bg` | `#13100b` | Fondo general de la pagina, fondo de marcadores timeline |
| `--tr-bg-hero` | `#0c0a06` | Fondo base del hero si no hay video/imagen |
| `--tr-bg-deep` | `#0a0805` | Footer y zonas mas profundas |
| `--tr-surface` | `#1c1710` | Tarjetas `TitleCard`, filas de cine, panel merchandising |
| `--tr-surface-dark` | `#0e0b07` | Secciones oscuras, inputs, bloque "Otros juegos" |
| `--tr-gold` | `#c8963e` | CTA primario, borde activo, iconos triangulo |
| `--tr-gold-light` | `#e6bd73` | Hover, foco, kickers principales, enlaces destacados |
| `--tr-rust` | `#a85a32` | Kicker secundario, marcador "El futuro", estados calidos |
| `--tr-text` | `#f3ebdc` | Texto principal y titulares |
| `--tr-text-warm` | `#e4d8bf` | Texto del claim del hero y textos sobre fondos profundos |
| `--tr-text-muted` | `#d9cbae` | Parrafos principales |
| `--tr-text-soft` | `#b7a889` | Parrafos secundarios, notas, labels suaves |
| `--tr-text-faint` | `#7d7261` | Metadatos, copyright, notas Steam |
| `--tr-text-disabled` | `#5f574a` | Ayudas demo, copyright secundario |
| `--tr-error` | `#c97a4e` | Icono/borde error newsletter |
| `--tr-warning` | `#e2a15c` | Mensaje inline de validacion |

Variables CSS base:

```css
:root {
  --tr-bg: #13100b;
  --tr-bg-hero: #0c0a06;
  --tr-bg-deep: #0a0805;
  --tr-surface: #1c1710;
  --tr-surface-dark: #0e0b07;
  --tr-gold: #c8963e;
  --tr-gold-light: #e6bd73;
  --tr-rust: #a85a32;
  --tr-text: #f3ebdc;
  --tr-text-warm: #e4d8bf;
  --tr-text-muted: #d9cbae;
  --tr-text-soft: #b7a889;
  --tr-text-faint: #7d7261;
  --tr-text-disabled: #5f574a;
  --tr-error: #c97a4e;
  --tr-warning: #e2a15c;
}
```

Overlays derivados permitidos:

```css
:root {
  --tr-border-soft: rgba(200, 150, 62, 0.16);
  --tr-border: rgba(200, 150, 62, 0.22);
  --tr-border-mid: rgba(200, 150, 62, 0.35);
  --tr-border-strong: rgba(200, 150, 62, 0.5);
  --tr-gold-glow: rgba(230, 189, 115, 0.25);
  --tr-panel-gold: rgba(200, 150, 62, 0.1);
  --tr-panel-rust: rgba(168, 90, 50, 0.1);
  --tr-hero-control-bg: rgba(12, 9, 5, 0.55);
  --tr-hero-control-bg-hover: rgba(12, 9, 5, 0.8);
}
```

## 3. Tipografia

Fuentes obligatorias:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Tokens:

```css
:root {
  --tr-font-display: "Archivo", system-ui, sans-serif;
  --tr-font-body: "Barlow", system-ui, sans-serif;
}
```

Escala tecnica:

| Uso | Fuente | Peso | Tamano | Line-height | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Wordmark hero | Archivo | 900 | `clamp(52px, 11vw, 150px)` | `.9` | `.08em` |
| Kicker hero | Barlow | 600 | `13px` | normal | `.42em` |
| Claim hero | Barlow | 400 | `clamp(17px, 2vw, 21px)` | `1.55` | `0` |
| H2 hook | Archivo | 900 | `clamp(28px, 4vw, 42px)` | `1.05` | `0` |
| H2 timeline | Archivo | 900 | `clamp(28px, 4vw, 44px)` | normal | `0` |
| H3 era | Archivo | 900 | `clamp(24px, 3vw, 30px)` | normal | `0` |
| H2 otros juegos | Archivo | 900 | `clamp(24px, 3vw, 32px)` | normal | `0` |
| H2 beyond | Archivo | 900 | `clamp(26px, 4vw, 38px)` | normal | `0` |
| H2 futuro | Archivo | 900 | `clamp(30px, 5vw, 52px)` | `1.05` | `0` |
| Parrafo editorial | Barlow | 400 | `17px` | `1.65` | `0` |
| Parrafo era | Barlow | 400 | `15.5px` | `1.6` | `0` |
| Parrafo tarjeta full | Barlow | 400 | `14.5px` | `1.6` | `0` |
| Parrafo tarjeta compact | Barlow | 400 | `12.5px` | `1.5` | `0` |
| Boton principal | Archivo | 700 | `15px` | normal | `.06em` |
| Boton Steam full | Archivo | 700 | `13.5px` | normal | `0` |
| Boton Steam compact | Archivo | 700 | `12px` | normal | `0` |
| Nav | Barlow | 500 | `14px` | normal | `0` |
| Footer link | Barlow | 400 | `14px` | normal | `0` |

Reglas:

- No usar `font-size` fluido fuera de los `clamp()` definidos.
- No usar letter spacing negativo.
- Titulares, botones y nombres de marca usan `Archivo`.
- Cuerpo, nav, inputs, labels y metadatos usan `Barlow`.

## 4. Layout y espaciado

Escala comun:

```css
:root {
  --tr-space-1: 4px;
  --tr-space-2: 8px;
  --tr-space-3: 12px;
  --tr-space-4: 16px;
  --tr-space-5: 24px;
  --tr-space-6: 32px;
  --tr-space-7: 40px;
  --tr-space-8: 48px;
  --tr-space-9: 56px;
  --tr-space-10: 64px;
  --tr-space-11: 96px;
  --tr-space-12: 110px;

  --tr-page-max: 1200px;
  --tr-content-max: 720px;
}
```

Medidas de estructura:

| Elemento | Valor |
| --- | --- |
| Contenedor principal | `max-width: 1200px; margin: 0 auto; padding-inline: 24px` |
| Hero | `min-height: 100svh` |
| Padding nav hero | `22px 32px` |
| Padding hook | `96px 24px` |
| Gap hook | `56px` |
| Imagen hook | `height: 220px` |
| Padding timeline | `40px 24px 100px` |
| Separacion titulo timeline | `margin-bottom: 56px` |
| Separacion entre eras | `80px`, ultima era `64px` |
| Offset contenido timeline | `margin-left: 56px` |
| Grid clasicos | `repeat(auto-fit, minmax(170px, 1fr)); gap: 16px` |
| Grid Legend/Survivor | `repeat(auto-fit, minmax(260px, 1fr)); gap: 24px` |
| Padding otros juegos | `64px 24px` |
| Grid otros juegos | `repeat(auto-fit, minmax(220px, 1fr)); gap: 20px` |
| Padding beyond | `96px 24px` |
| Grid beyond | `repeat(auto-fit, minmax(320px, 1fr)); gap: 40px` |
| Padding futuro | `110px 24px` |
| Footer grid | `repeat(auto-fit, minmax(240px, 1fr)); gap: 40px` |
| Footer padding | `56px 24px 32px` |

Radios:

| Token | Valor | Uso |
| --- | --- | --- |
| `--tr-radius-xs` | `2px` | Botones, inputs, badges |
| `--tr-radius-sm` | `4px` | Imagen hook, filas cine, paneles |
| `--tr-radius-md` | `6px` | `TitleCard` |
| Circular | `50%` | Marcadores timeline |

## 5. Breakpoints responsive

La landing es mobile-first. Los grids deben usar `auto-fit` y `minmax`.

Breakpoint vinculante:

```css
@media (max-width: 680px) {
  #tr-hero-video {
    display: none;
  }

  #tr-hero-mobile-bg {
    display: block;
  }
}
```

Breakpoints nominales si el stack los necesita:

| Nombre | Valor | Uso |
| --- | --- | --- |
| `sm` | `480px` | Ajustes de formulario y nav |
| `md` | `680px` | Cambio video hero a imagen estatica |
| `lg` | `900px` | Densidad de grids si hace falta |
| `xl` | `1200px` | Maximo de pagina |

No cambiar `680px` para el hero sin decision documentada.

## 6. Componentes

### 6.1 Hero

Estructura:

- `header role="banner"`.
- `position: relative`.
- `min-height: 100svh`.
- `display: flex; flex-direction: column`.
- `overflow: hidden`.
- `background: #0c0a06`.

Capas de fondo, en este orden:

1. Video:
   - `position: absolute; inset: 0`.
   - `width: 100%; height: 100%`.
   - `object-fit: cover`.
   - Atributos: `autoplay muted loop playsinline preload="auto"`.
   - Poster: `assets/temple-sunset.svg`.
2. Imagen mobile/fallback:
   - `display: none` en desktop.
   - `background-image: url("assets/temple-sunset.svg")`.
   - `background-size: cover`.
   - `background-position: center 30%`.
3. Polvo:
   - `inset: -10%`.
   - `mix-blend-mode: screen`.
   - `opacity: .6`.
   - `animation: trDust 26s linear infinite`.
4. Scrim:
   - `linear-gradient(180deg, rgba(12,9,5,.55) 0%, rgba(12,9,5,.15) 34%, rgba(12,9,5,.55) 72%, rgba(12,9,5,.94) 100%)`.

Nav:

- Contenedor: `max-width: 1280px; padding: 22px 32px`.
- Logo: texto `TR`, `Archivo 900`, `15px`, `letter-spacing: .22em`.
- Links: `Barlow 500`, `14px`, color `#d9cbae`.
- Hover link: color `#f3ebdc`, borde inferior `#c8963e`.
- Focus link: `outline: 2px solid #e6bd73; outline-offset: 3px`.

Contenido:

- Kicker: `Barlow 600`, `13px`, `letter-spacing: .42em`, color `#e6bd73`, `margin-bottom: 22px`.
- H1: `Archivo 900`, `clamp(52px, 11vw, 150px)`, `line-height: .9`, `letter-spacing: .08em`, `text-shadow: 0 6px 40px rgba(0,0,0,.6)`.
- Separador: `width: 132px; height: 2px`, gradiente horizontal transparente/oro/transparente, `margin: 30px 0 24px`.
- Parrafo: `max-width: 560px`, `font-size: clamp(17px, 2vw, 21px)`, `line-height: 1.55`, color `#e4d8bf`.
- CTA: `margin-top: 38px`, padding `15px 30px`, gap `10px`, radio `2px`.

Control play/pause:

- Posicion: `absolute; bottom: 22px; right: 24px`.
- Fondo: `rgba(12,9,5,.55)`.
- Hover: `rgba(12,9,5,.8)`.
- Borde: `1px solid rgba(230,189,115,.45)`.
- Texto: `Barlow 600`, `13px`, color `#f3ebdc`.
- Padding: `9px 14px`.
- Radio: `2px`.
- Debe controlar video y animaciones con `[data-tr-anim]`.

### 6.2 Botones

Boton primario hero:

```css
.tr-button-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border: 0;
  border-radius: 2px;
  background: #c8963e;
  color: #13100b;
  font-family: "Archivo", system-ui, sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: .06em;
  text-decoration: none;
  transition: transform .2s, background .2s;
}

.tr-button-primary:hover {
  background: #e6bd73;
  transform: translateY(-2px);
}
```

Boton Steam full:

- Padding: `11px 18px`.
- Font: `Archivo 700`, `13.5px`.
- Gap: `8px`.
- Radio: `2px`.
- Hover: `background: #e6bd73; transform: translateY(-2px)`.

Boton Steam compact:

- Padding: `8px 12px`.
- Font: `Archivo 700`, `12px`.
- Gap: `6px`.
- Radio: `2px`.
- Hover: `background: #e6bd73`.

Boton outline:

- Padding: `11px 18px`.
- Borde: `1px solid rgba(200,150,62,.5)`.
- Color: `#e6bd73`.
- Hover: `background: rgba(200,150,62,.12)`.

### 6.3 HookSection

Layout:

- Section: `max-width: 1200px; margin: 0 auto; padding: 96px 24px`.
- Grid: `repeat(auto-fit, minmax(320px, 1fr))`.
- Gap: `56px`.

Cada columna:

- Kicker: `Barlow 600`, `12px`, `letter-spacing: .2em`, color `#a85a32`, `margin-bottom: 14px`.
- H2: `Archivo 900`, `clamp(28px, 4vw, 42px)`, `line-height: 1.05`, `margin-bottom: 18px`.
- Parrafo: `17px`, `line-height: 1.65`, color `#d9cbae`.
- Imagen: `width: 100%; height: 220px; margin-top: 24px; border-radius: 4px; object-fit: cover`.

### 6.4 EraTimeline

Section:

- `max-width: 1200px`.
- `padding: 40px 24px 100px`.

Cabecera:

- Icono triangulo: color `#c8963e`, `font-size: 14px`.
- Kicker: `Barlow 600`, `12px`, `letter-spacing: .2em`, color `#e6bd73`, `margin: 10px 0`.
- H2: `Archivo 900`, `clamp(28px, 4vw, 44px)`.
- Wrapper: `margin-bottom: 56px; text-align: center`.

Linea vertical:

- Pseudo-elemento del contenedor.
- `left: 19px`.
- `top: 16px; bottom: 16px`.
- `width: 2px`.
- Fondo: `linear-gradient(180deg, rgba(200,150,62,.5), rgba(200,150,62,.05))`.

Marcador era:

- `width: 40px; height: 40px`.
- `border-radius: 50%`.
- `background: #13100b`.
- `border: 1px solid rgba(200,150,62,.5)`.
- Icono: triangulo, color `#c8963e`, `font-size: 15px`.

Texto era:

- Kicker era: `Barlow 600`, `12px`, `letter-spacing: .2em`, color `#7d7261`.
- H3 era: `Archivo 900`, `clamp(24px, 3vw, 30px)`, `margin-top: 2px`.
- Intro: `margin: 16px 0 28px 56px`, `max-width: 700px`, `font-size: 15.5px`, `line-height: 1.6`, color `#b7a889`.

Grid:

- Era Clasica: `margin-left: 56px; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 16px`.
- Legend/LAU y Survivor: `margin-left: 56px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px`.

Marcador futuro:

- Fondo: `#a85a32`.
- Borde: `1px solid rgba(230,189,115,.6)`.
- Color: `#f3ebdc`.
- Animacion: `trChevron 2.4s ease-in-out infinite`.

### 6.5 TitleCard

Base:

```css
.tr-title-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #1c1710;
  border: 1px solid rgba(200,150,62,.22);
  border-radius: 6px;
  transition: border-color .2s, transform .2s;
}

.tr-title-card:hover {
  border-color: rgba(200,150,62,.5);
  transform: translateY(-3px);
}
```

Variante compact:

| Parte | Valor |
| --- | --- |
| Media | `height: 96px` |
| Borde media | `border-bottom: 1px solid rgba(200,150,62,.16)` |
| Ano | `top: 8px; left: 10px; Archivo 900; 20px; color rgba(230,189,115,.85); text-shadow 0 2px 6px rgba(0,0,0,.6)` |
| Body | `padding: 14px 16px 16px` |
| Titulo | `Archivo 700; 16px; line-height: 1.15; margin-bottom: 6px` |
| Premisa | `12.5px; line-height: 1.5; color #b7a889; margin-bottom: 12px` |
| Nota Steam | `11.5px; line-height: 1.4; color #7d7261` |

Variante full:

| Parte | Valor |
| --- | --- |
| Media | `min-height: 190px` |
| Borde media | `border-bottom: 1px solid rgba(200,150,62,.16)` |
| Ano | `top: 12px; left: 12px; Archivo 900; 32px; color rgba(230,189,115,.9); text-shadow 0 2px 8px rgba(0,0,0,.6)` |
| Badge rating | `top: 12px; right: 12px; Barlow 700; 11px; letter-spacing .06em; color #e4d8bf; background rgba(12,9,5,.6); border rgba(230,189,115,.4); padding 3px 8px; radius 2px` |
| Body | `padding: 22px 24px 24px` |
| Era label | `Barlow 600; 11.5px; letter-spacing .14em; color #a85a32; margin-bottom 8px` |
| Titulo | `Archivo 900; 24px; line-height 1.05; margin-bottom 10px` |
| Premisa | `14.5px; line-height 1.6; color #d9cbae; margin-bottom 20px` |
| Nota Steam | `12.5px; line-height 1.5; color #7d7261; border-top rgba(200,150,62,.16); padding-top 12px` |

Reglas:

- Una unica implementacion controlada por prop `compact`.
- Si no hay Steam, no se muestra boton. Se muestra `steamNote`.
- Si hay rating, se muestra badge; si no, no reservar hueco.
- La imagen debe ser `img`/`picture`, no `image-slot`.

### 6.6 CollapsibleBlock

Section:

- Fondo: `#0e0b07`.
- Border top/bottom: `1px solid rgba(200,150,62,.16)`.
- Padding interior: `64px 24px`.

Boton cabecera:

- `width: 100%`.
- `display: flex; align-items: center; gap: 16px`.
- `background: transparent; border: none; color: inherit`.
- `padding: 0; text-align: left`.
- Focus: `outline: 2px solid #e6bd73; outline-offset: 6px`.

Icono:

- Triangulo `font-size: 15px`.
- Color `#c8963e`.
- Transicion: `transform .25s`.
- Cerrado: `rotate(180deg)`.
- Abierto: `rotate(0deg)`.

Texto:

- Kicker: `Barlow 600`, `12px`, `letter-spacing: .2em`, color `#7d7261`.
- H2: `Archivo 900`, `clamp(24px, 3vw, 32px)`.
- Toggle label: `Archivo 700`, `13px`, color `#e6bd73`.

Panel:

- `margin-top: 32px`.
- Parrafo: `max-width: 700px`, `font-size: 15px`, `line-height: 1.6`, color `#b7a889`, `margin-bottom: 24px`.
- Grid: `repeat(auto-fit, minmax(220px, 1fr)); gap: 20px`.
- El contenido cerrado debe desmontarse del DOM o quedar no focuseable.

### 6.7 BeyondGamesBlock

Section:

- `max-width: 1200px`.
- `padding: 96px 24px`.
- Cabecera centrada con `margin-bottom: 48px`.

Cabecera:

- Kicker: `Barlow 600`, `12px`, `letter-spacing: .2em`, color `#e6bd73`, `margin-bottom: 10px`.
- H2: `Archivo 900`, `clamp(26px, 4vw, 38px)`.

Grid:

- `repeat(auto-fit, minmax(320px, 1fr))`.
- Gap: `40px`.

Bloque cine:

- Label: `Archivo 700`, `13px`, `letter-spacing: .14em`, color `#a85a32`, `margin-bottom: 16px`.
- Fila: `display: flex; gap: 16px; align-items: center`.
- Fondo fila: `#1c1710`.
- Borde: `1px solid rgba(200,150,62,.18)`.
- Radio: `4px`.
- Padding: `16px`.
- Poster: `64px x 88px`, radio `2px`.
- Titulo pelicula: `Archivo 700`, `16px`.
- Meta pelicula: `13px`, color `#7d7261`, `margin: 2px 0 8px`.
- Link: `13px`, color `#e6bd73`, subrayado.

Bloque merchandising:

- Panel: fondo `#1c1710`, borde `rgba(200,150,62,.18)`, radio `4px`, padding `24px`.
- Parrafo: `15px`, `line-height: 1.6`, color `#d9cbae`, `margin-bottom: 18px`.
- Boton: outline.

### 6.8 NewsletterForm

Formulario:

- `display: flex; flex-direction: column; gap: 14px`.
- Max width: `480px`; compact: `420px`.
- Row input+button: `display: flex; flex-wrap: wrap; gap: 0`.

Input:

- `flex: 1; min-width: 200px`.
- Background: `#0e0b07`.
- Border: `1px solid rgba(200,150,62,.35)`.
- Color: `#f3ebdc`.
- Font: `Barlow`, `15px`.
- Padding: `13px 14px`.
- Radius: `2px 0 0 2px`.
- Focus: `border-color: #e6bd73; box-shadow: 0 0 0 3px rgba(230,189,115,.25)`.

Submit:

- Background: `#c8963e`.
- Color: `#13100b`.
- Font: `Archivo 700`, `14px`, `letter-spacing: .03em`.
- Padding: `13px 22px`.
- Radius: `0 2px 2px 0`.
- Hover: `#e6bd73`.
- Disabled: conservar layout, cambiar texto a `Enviando...`.

Consentimiento:

- Label: `display: flex; align-items: flex-start; gap: 10px`.
- Font: `13px`, `line-height: 1.5`, color `#b7a889`.
- Checkbox: `16px x 16px`, `margin-top: 3px`, `accent-color: #c8963e`.
- Link privacidad: color `#e6bd73`, subrayado.

Mensaje validacion:

- `role="alert"`.
- Font: `13px`.
- Color: `#e2a15c`.

Panel success:

- `role="status"`.
- Background: `rgba(200,150,62,.1)`.
- Border: `1px solid rgba(200,150,62,.4)`.
- Radius: `4px`.
- Padding: `16px 18px`.
- Gap: `12px`.
- Icono: `18px`, color `#e6bd73`.
- Strong: `Archivo`, `14.5px`.
- Texto: `13.5px`, `line-height: 1.5`, color `#d9cbae`.

Panel already:

- `role="status"`.
- Background: `rgba(180,150,90,.08)`.
- Border: `1px solid rgba(200,150,62,.3)`.
- Icono: color `#b7a889`.
- Resto igual que success.

Panel error:

- `role="alert"`.
- Background: `rgba(168,90,50,.1)`.
- Border: `1px solid rgba(168,90,50,.5)`.
- Icono: color `#c97a4e`.
- Boton retry: background transparente, border `1px solid #c97a4e`, color `#e4d8bf`, `Archivo 700`, `13px`, padding `9px 16px`, radio `2px`.
- Hover retry: `background: rgba(168,90,50,.15)`.

Estados obligatorios:

- `idle`
- `invalid`
- `submitting`
- `success`
- `already`
- `error`

### 6.9 FutureSection

Section:

- Fondo: `linear-gradient(180deg, #1c1710, #0c0a06)`.
- Border top: `1px solid rgba(200,150,62,.22)`.
- Overlay radial: `radial-gradient(70% 60% at 50% 0%, rgba(200,150,62,.18), transparent)`, opacity `.5`.
- Contenido: `max-width: 720px; padding: 110px 24px; text-align: center`.

Texto:

- Kicker: `Barlow 600`, `12px`, `letter-spacing: .3em`, color `#e6bd73`, `margin-bottom: 16px`.
- H2: `Archivo 900`, `clamp(30px, 5vw, 52px)`, `line-height: 1.05`, `margin-bottom: 20px`.
- Parrafo: `17px`, `line-height: 1.65`, color `#d9cbae`, `margin-bottom: 44px`.

### 6.10 Footer

Footer:

- Background: `#0a0805`.
- Border top: `1px solid rgba(200,150,62,.16)`.

Grid:

- `max-width: 1200px; margin: 0 auto`.
- `padding: 56px 24px 32px`.
- `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`.
- Gap: `40px`.

Marca:

- `Archivo 900`, `16px`, `letter-spacing: .18em`, `margin-bottom: 14px`.
- Disclaimer: `13px`, `line-height: 1.6`, color `#7d7261`, `max-width: 320px`.

Columnas:

- Heading: `Archivo 700`, `12px`, `letter-spacing: .14em`, color `#b7a889`, `margin-bottom: 14px`.
- Links: columna con `gap: 10px`, `font-size: 14px`, color `#d9cbae`.
- Hover links: color `#e6bd73`.

Copyright:

- Padding: `20px 24px`.
- Border top: `1px solid rgba(200,150,62,.1)`.
- Font: `12px`.
- Color: `#5f574a`.

No incluir formulario de newsletter en footer mientras el diseno final de `docs/design/README.md` siga retirandolo.

## 7. Animaciones

Definiciones exactas del mockup:

```css
@keyframes trDust {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-40px, -30px, 0);
  }
}

@keyframes trRays {
  0%,
  100% {
    opacity: .35;
  }
  50% {
    opacity: .6;
  }
}

@keyframes trChevron {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}
```

Scroll reveal:

```css
.tr-reveal {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity .8s cubic-bezier(.2, .7, .2, 1),
    transform .8s cubic-bezier(.2, .7, .2, 1);
}

.tr-reveal.tr-in {
  opacity: 1;
  transform: none;
}
```

Uso tecnico:

- Aplicar `.tr-reveal` a bloques de contenido principales.
- `IntersectionObserver` con `threshold: 0.12`.
- Al entrar en viewport, anadir `.tr-in`.
- Desobservar despues de la primera entrada.

Parallax hero:

- Solo desktop y solo si no hay `prefers-reduced-motion`.
- En scroll: `video.style.transform = translateY(scrollY * 0.08px) scale(1.06)`.
- No aplicar a imagen mobile.

Transiciones:

| Elemento | Transition |
| --- | --- |
| `TitleCard` | `border-color .2s, transform .2s` |
| CTA hero | `transform .2s, background .2s` |
| Boton Steam full | `background .2s, transform .2s` |
| Acordeon icono | `transform .25s` |
| Scroll reveal | `.8s cubic-bezier(.2,.7,.2,1)` |

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .tr-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  [data-tr-anim] {
    animation: none !important;
  }

  #tr-hero-video {
    display: none !important;
  }

  #tr-hero-mobile-bg {
    display: block !important;
  }
}
```

## 8. Estados de foco y accesibilidad visual

Focus global para interactivos:

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid #e6bd73;
  outline-offset: 2px;
}
```

Excepciones exactas:

- Links nav: `outline: 2px solid #e6bd73; outline-offset: 3px`.
- Boton acordeon: `outline: 2px solid #e6bd73; outline-offset: 6px`.
- Input newsletter: usar `box-shadow` dorado y borde dorado.

Skip link:

- Oculto inicialmente con `left: -9999px`.
- Al foco: `left: 0; top: 0`.
- Background `#c8963e`.
- Color `#13100b`.
- Padding `12px 18px`.
- Font `Archivo 700`.
- Radio `0 0 4px 0`.
- Z-index `200`.

## 9. Assets y media

Assets placeholder disponibles:

- `docs/design/assets/hero-video.mp4`
- `docs/design/assets/temple-sunset.svg`
- `docs/design/assets/jungle-ruins.svg`
- `docs/design/assets/cave-torch.svg`
- `docs/design/assets/desert-dunes.svg`
- `docs/design/assets/cliff-tomb.svg`
- `docs/design/assets/poster-frame.svg`

Reglas:

- Copiar a `public/assets/` o equivalente del stack.
- No usar `docs/design/image-slot.js`.
- Sustituir `image-slot` por `img`, `picture` o componente de imagen.
- Imagenes de card y hook: `object-fit: cover`.
- Hero video: `object-fit: cover`.
- Si una imagen es informativa, `alt` descriptivo.
- Si una imagen es decorativa, `alt=""` o `aria-hidden="true"`.

## 10. CSS base minimo

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #13100b;
  color: #f3ebdc;
  font-family: "Barlow", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #c8963e;
  color: #13100b;
}

a {
  color: inherit;
}
```

## 11. Checklist tecnico de implementacion

Antes de cerrar una pantalla o componente:

- Usa los hex definidos en la paleta, no colores nuevos.
- Respeta los tamanos y pesos tipograficos de este manual.
- No hay radios superiores a `6px` salvo marcadores circulares.
- Hero cambia a imagen en `max-width: 680px`.
- `prefers-reduced-motion` desactiva video, polvo, parallax y reveal.
- `TitleCard` es una implementacion con variante `compact`, no dos componentes divergentes.
- Si no hay URL Steam, no hay boton Steam.
- El acordeon cerrado no deja contenido focuseable.
- Newsletter implementa los seis estados visuales.
- Links externos usan `target="_blank"` y `rel="noopener noreferrer"`.
- No hay scroll horizontal en 320px.
- El resultado coincide visualmente con `docs/design/Tomb Raider.dc.html`.
