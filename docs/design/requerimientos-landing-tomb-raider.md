# Requerimientos — Landing "Descubre Tomb Raider"

**Objetivo:** landing de descubrimiento para alguien que no conoce la saga Tomb Raider. Debe presentar la historia y todos los títulos de forma amena. La compra en PC es un link secundario, NO el objetivo principal. Newsletter de novedades.

**Idioma:** Solo español (ES). Preparado para i18n a futuro, no se traduce en esta entrega.
**Dispositivos:** Responsive, mobile-first.

---

## 1. Estructura de la página

1. **Hero / Hook de personaje** — intro corta: "¿Quién es Lara Croft? / ¿Qué es Tomb Raider?". Tono editorial, no técnico.
   - **Referencia visual:** patrón tipo landing oficial de Elden Ring (bandainamcoent.eu/elden-ring) — **título/wordmark grande en tipografía de marca superpuesto sobre fondo animado**, con degradado oscuro (scrim) entre el vídeo y el texto para asegurar legibilidad y contraste.
   - **Hero Banner con vídeo de fondo:** pinceladas de la saga (recopilatorio de trailers oficiales), **autoplay, en loop, sin sonido (muted)**.
   - **Composición:** wordmark "TOMB RAIDER" (o logo oficial) centrado/alineado, tamaño grande, con subtítulo corto (claim de descubrimiento) debajo. Scrim degradado (oscuro → transparente) para contraste del texto sobre el vídeo.
   - Comportamiento: `autoplay + muted + loop + playsinline` (obligatorio para autoplay en iOS/Safari).
   - **Mobile:** se sirve **imagen estática** (key art) en lugar de vídeo, para cuidar el consumo de datos y el rendimiento — decisión ya cerrada, mismo patrón de scrim + wordmark sobre la imagen.
   - **Fallback desktop:** imagen estática si el vídeo no carga o la conexión es lenta.
   - **Accesibilidad:** icono de play/pause visible (control mínimo de reproducción) y `aria-label` descriptivo, al ir sin sonido.
   - **Peso/rendimiento:** vídeo corto (recomendado ≤10-15s de loop), comprimido y servido en formato web (mp4/webm), pensado para no penalizar el LCP de la landing.
2. **Timeline navegable de la saga** — columna vertebral de la landing. Ver sección 2.
3. **"Otros juegos"** — bloque colapsable con spin-offs (Guardian of Light, Temple of Osiris, Lara Croft GO). Fuera del hilo narrativo principal.
4. **"Más allá de los juegos"** — bloque secundario: cine (Jolie 2001-03, Vikander 2018) y merchandising, con links externos. Sin fichas detalladas, sin ecommerce propio.
5. **Cierre "El futuro"** — nuevo Tomb Raider en desarrollo + CTA principal de newsletter.
6. **Footer** — CTA secundario de newsletter + legal/privacidad.

## 2. Timeline de la saga (contenido central)

Agrupada en **3 eras**, cada una con intro de 1-2 frases + fichas de título dentro:

- **Era Clásica (1996–2003)** — Core Design. Tomb Raider I–VI (disponibles hoy como *Remastered*).
- **Era Legend/LAU (2006–2008)** — Crystal Dynamics. Legend, Anniversary, Underworld.
- **Era Survivor/Reboot (2013–2018)** — Tomb Raider (2013), Rise, Shadow.
- **El futuro** — nuevo título en desarrollo (teaser + newsletter).

**En móvil:** timeline en formato **vertical** (no horizontal).

### Ficha de título (repetible por cada juego)
- Título + año
- Premisa / qué aporta a la saga (1-2 frases)
- Media: **solo material promocional oficial** (key art / trailer oficial del publisher). No gameplay gráfico suelto.
- Botón "Comprar en Steam" → **solo si existe** el título en Steam (ver sección 3)
- Si es un clásico sin venta individual: texto "Disponible como parte de *[Nombre] Remastered*"

## 3. Compra en PC

- **No hay ecommerce propio.** La landing no gestiona compra, carrito ni checkout.
- **Un único link por título → página del juego en Steam** (salida externa).
- Si el título **no tiene página en Steam → no se muestra botón** (sin fallback a otras tiendas).
- Abre en **pestaña nueva**.
- Evento de **tracking de clic saliente** (ver sección 5).
- ⚠️ **Dependencia previa a desarrollo:** el PO debe recopilar la lista de URLs oficiales de Steam por título antes de iniciar el maquetado de fichas.

## 4. Newsletter

- **Campo único: email.** (Sin nombre ni otros campos.)
- **Doble opt-in**: email de confirmación tras el registro (requiere maquetar plantilla de confirmación).
- **Consentimiento RGPD:** casilla **no premarcada** + link a política de privacidad. Obligatoria para enviar el formulario.
- **Integración:** Mailchimp (API/audience). Dev integra el submit contra Mailchimp.
- **Estados del formulario a contemplar:**
  1. Validación de formato de email
  2. Éxito (email de confirmación enviado)
  3. Error (fallo de envío/API)
  4. Email ya suscrito
- **Ubicación:** CTA principal en el bloque "El futuro", CTA secundario en footer.

## 5. Tracking / Analítica

- Evento de clic saliente por cada link de compra a Steam (título + era).
- Evento de alta a newsletter (envío) y de confirmación (doble opt-in completado).
- *(Pendiente de definir con analítica: herramienta de tracking — GA4, otra — y naming de eventos. Marcar como punto abierto si no está resuelto antes de dev.)*

## 6. Edad / clasificación de contenido

- **Sin age gate.** No se bloquea el acceso a la landing.
- Mitigación: uso exclusivo de **material promocional oficial ya autorizado para difusión pública** (trailers/key art), evitando capturas de gameplay violento sin filtrar. Aplica especialmente a Tomb Raider 2013, Rise y Shadow (PEGI 16-18).

## 7. Fuera de alcance (explícito)

- Ecommerce propio de merchandising.
- Fichas detalladas de películas.
- Multi-idioma.
- Otras tiendas de PC además de Steam (Epic, GOG) como fallback.
- Age gate / verificación de edad.

## 8. Dependencias / bloqueantes antes de desarrollo

| # | Dependencia | Responsable |
|---|---|---|
| 1 | URLs oficiales de Steam por título | PO |
| 2 | Confirmación legal/licencia sobre uso de imágenes de cine en bloque "Más allá de los juegos" | Legal |
| 3 | Material promocional oficial (key art/trailers) por título y por franquicia cine/merch | PO / UX |
| 7 | Selección/edición del vídeo recopilatorio del Hero Banner (clips oficiales, ≤10-15s, sin sonido) + imagen estática de fallback | UX / PO |
| 4 | Naming de eventos de tracking y herramienta de analítica | PM / Analítica |
| 5 | Acceso/API de Mailchimp para integración del formulario | Dev / Marketing |
| 6 | Plantilla de email de doble opt-in | UX / Marketing |

---
*Documento generado a partir de sesión de definición de requisitos (grilling) — listo para reparto de historias de usuario.*
