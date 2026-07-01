# Historias de Usuario — Landing "Descubre Tomb Raider"

Formato: Mike Cohn (Como/Quiero/Para que) + criterios de aceptación Gherkin.
Organizadas por épicas. Personas principales: **Visitante nuevo** (no conoce la saga), **Visitante interesado** (quiere ver/comprar un título), **Suscriptor potencial** (quiere novedades).

**Supuestos/dependencias transversales:** URLs oficiales de Steam por título (PO), assets oficiales/placeholders (UX/PO), audiencia y API de Mailchimp (Marketing/Dev), material del vídeo del Hero.

---

## ÉPICA 1 — Hero cinemático

### HU-01
- **Resumen:** Hero con vídeo ambiental que transmita la esencia de la saga desde el primer segundo

#### Caso de uso:
- **Como** visitante nuevo que llega a la landing en desktop
- **Quiero** ver un vídeo de fondo con pinceladas de la saga bajo el título
- **Para que** capte de inmediato el tono de aventura y me enganche a seguir explorando

#### Criterios de Aceptación:
- **Escenario:** Carga del Hero en desktop
- **Dado:** que accedo a la landing desde un navegador de escritorio
- **y Dado:** que el vídeo del Hero está disponible
- **Cuando:** se carga la página
- **Entonces:** el vídeo se reproduce automáticamente, en loop y sin sonido, con el wordmark y el claim legibles sobre un degradado (scrim)

### HU-02
- **Resumen:** Alternativa en imagen estática en móvil para cuidar datos y rendimiento

#### Caso de uso:
- **Como** visitante que accede desde el móvil
- **Quiero** ver una imagen estática en lugar del vídeo en el Hero
- **Para que** la página cargue rápido y no consuma mis datos móviles innecesariamente

#### Criterios de Aceptación:
- **Escenario:** Carga del Hero en mobile
- **Dado:** que accedo a la landing desde un dispositivo móvil
- **Cuando:** se carga la página
- **Entonces:** se muestra una imagen estática (key art) con el mismo tratamiento de wordmark y scrim, sin reproducir vídeo

### HU-03
- **Resumen:** Control de reproducción del vídeo para accesibilidad

#### Caso de uso:
- **Como** visitante sensible al movimiento o que prefiere pausar el vídeo
- **Quiero** poder pausar y reanudar el vídeo del Hero
- **Para que** pueda controlar la animación según mis preferencias

#### Criterios de Aceptación:
- **Escenario:** Pausa del vídeo del Hero
- **Dado:** que el vídeo del Hero se está reproduciendo en desktop
- **Cuando:** hago clic en el control de play/pausa
- **Entonces:** el vídeo se detiene y el control queda accesible por teclado y con etiqueta descriptiva (aria-label)

### HU-04
- **Resumen:** Fallback del Hero si el vídeo no carga

#### Caso de uso:
- **Como** visitante con conexión lenta o con fallo de carga del vídeo
- **Quiero** que se muestre una imagen estática en su lugar
- **Para que** el Hero siga siendo legible y atractivo aunque el vídeo no esté disponible

#### Criterios de Aceptación:
- **Escenario:** Fallo de carga del vídeo en desktop
- **Dado:** que el vídeo del Hero no consigue cargarse
- **Cuando:** se renderiza el Hero
- **Entonces:** se muestra la imagen estática de fallback con el wordmark y el claim, sin espacios en blanco ni errores visibles

---

## ÉPICA 2 — Hook de personaje

### HU-05
- **Resumen:** Introducción clara para quien no conoce a Lara Croft ni la saga

#### Caso de uso:
- **Como** visitante nuevo que nunca ha jugado a Tomb Raider
- **Quiero** leer una introducción breve sobre quién es Lara Croft y qué es Tomb Raider
- **Para que** entienda de qué va la saga antes de recorrer los títulos

#### Criterios de Aceptación:
- **Escenario:** Lectura del bloque de introducción
- **Dado:** que estoy en la landing tras el Hero
- **Cuando:** hago scroll hasta el bloque de hook
- **Entonces:** veo una introducción corta y editorial que explica el personaje y la fantasía de la saga, sin tecnicismos

---

## ÉPICA 3 — Timeline de la saga (Eras)

### HU-06
- **Resumen:** Recorrer la saga agrupada en eras para no perderse entre tantos títulos

#### Caso de uso:
- **Como** visitante nuevo
- **Quiero** ver los títulos organizados en 3 eras (Clásica, Legend/LAU, Survivor) más un cierre "El futuro"
- **Para que** entienda la evolución de la saga de forma ordenada y digerible

#### Criterios de Aceptación:
- **Escenario:** Visualización de la timeline por eras
- **Dado:** que estoy en la sección de timeline
- **Cuando:** la recorro
- **Entonces:** cada era aparece con una intro de 1-2 frases y sus títulos agrupados dentro, en orden cronológico

### HU-07
- **Resumen:** Timeline vertical en móvil para una navegación cómoda

#### Caso de uso:
- **Como** visitante en móvil
- **Quiero** recorrer la timeline en formato vertical
- **Para que** pueda navegar los títulos sin desplazamientos horizontales incómodos

#### Criterios de Aceptación:
- **Escenario:** Timeline en viewport móvil
- **Dado:** que accedo a la timeline desde un dispositivo móvil
- **Cuando:** hago scroll por la sección
- **Entonces:** la timeline se presenta en disposición vertical, con cada título legible y sin scroll horizontal

---

## ÉPICA 4 — Ficha de título

### HU-08
- **Resumen:** Conocer cada título con su premisa y contexto

#### Caso de uso:
- **Como** visitante nuevo
- **Quiero** ver en cada título su año, premisa y qué aporta a la saga
- **Para que** entienda de qué va cada juego sin conocerlos previamente

#### Criterios de Aceptación:
- **Escenario:** Consulta de la ficha de un título
- **Dado:** que estoy en la timeline
- **Cuando:** llego a la ficha de un título
- **Entonces:** veo su año, una premisa breve y su media oficial (o placeholder marcado), con contenido en español

### HU-09
- **Resumen:** Acceso al título en Steam cuando está disponible

#### Caso de uso:
- **Como** visitante interesado en un título concreto
- **Quiero** un enlace a su página en Steam
- **Para que** pueda comprarlo o consultarlo en la tienda oficial

#### Criterios de Aceptación:
- **Escenario:** Ficha de un título disponible en Steam
- **Dado:** que la ficha de un título tiene URL oficial de Steam configurada
- **Cuando:** hago clic en "Comprar en Steam"
- **Entonces:** se abre la página del juego en Steam en una pestaña nueva y se registra el evento de clic saliente

### HU-10
- **Resumen:** Ficha coherente para títulos sin venta directa en Steam

#### Caso de uso:
- **Como** visitante que consulta un título clásico
- **Quiero** entender cómo puedo acceder a él aunque no tenga botón de compra
- **Para que** no me quede la sensación de un enlace roto o de información incompleta

#### Criterios de Aceptación:
- **Escenario:** Ficha de un título sin URL de Steam
- **Dado:** que un título no tiene URL de Steam configurada
- **Cuando:** se renderiza su ficha
- **Entonces:** no se muestra botón de compra y, si aplica, aparece la nota "Disponible como parte de [Nombre] Remastered"

---

## ÉPICA 5 — Otros juegos (spin-offs)

### HU-11
- **Resumen:** Descubrir spin-offs sin romper la narrativa principal

#### Caso de uso:
- **Como** visitante interesado en explorar más allá de los títulos principales
- **Quiero** un bloque colapsable con los spin-offs
- **Para que** pueda descubrirlos opcionalmente sin que interrumpan el recorrido principal

#### Criterios de Aceptación:
- **Escenario:** Apertura del bloque de otros juegos
- **Dado:** que estoy al final de la timeline
- **Cuando:** despliego el bloque "Otros juegos"
- **Entonces:** se muestran los spin-offs y puedo volver a colapsarlo, manteniendo el foco en la narrativa principal cuando está cerrado

---

## ÉPICA 6 — Más allá de los juegos (cine y merch)

### HU-12
- **Resumen:** Reconocer el universo Tomb Raider más allá de los videojuegos

#### Caso de uso:
- **Como** visitante nuevo que quizá conoce las películas
- **Quiero** un bloque que mencione el cine y el merchandising con enlaces externos
- **Para que** conecte el universo con referencias que ya conozco y pueda ampliar por mi cuenta

#### Criterios de Aceptación:
- **Escenario:** Consulta del bloque "Más allá de los juegos"
- **Dado:** que estoy en la sección secundaria de la landing
- **y Dado:** que legal ha confirmado el uso de las imágenes de cine
- **Cuando:** interactúo con el bloque
- **Entonces:** veo referencias a cine y merchandising con enlaces externos que abren en pestaña nueva, sin fichas detalladas ni compra integrada

---

## ÉPICA 7 — Newsletter

### HU-13
- **Resumen:** Suscribirse para recibir novedades del nuevo Tomb Raider

#### Caso de uso:
- **Como** suscriptor potencial interesado en la saga
- **Quiero** dejar mi email para recibir novedades
- **Para que** me entere del lanzamiento del nuevo título y futuras noticias

#### Criterios de Aceptación:
- **Escenario:** Alta correcta con doble opt-in
- **Dado:** que estoy en el bloque de newsletter
- **y Dado:** que he marcado la casilla de consentimiento RGPD
- **Cuando:** introduzco un email válido y envío el formulario
- **Entonces:** se muestra el mensaje de éxito y recibo un email de confirmación para completar el doble opt-in

### HU-14
- **Resumen:** Consentimiento RGPD obligatorio antes de suscribir

#### Caso de uso:
- **Como** suscriptor potencial
- **Quiero** dar mi consentimiento explícito antes de suscribirme
- **Para que** mis datos se traten conforme a la normativa y con transparencia

#### Criterios de Aceptación:
- **Escenario:** Intento de envío sin consentimiento
- **Dado:** que estoy en el formulario de newsletter con la casilla de consentimiento sin marcar
- **Cuando:** intento enviar el formulario
- **Entonces:** el envío se bloquea y se me indica que debo aceptar la política de privacidad (con enlace a la misma)

### HU-15
- **Resumen:** Validación de email para evitar altas erróneas

#### Caso de uso:
- **Como** suscriptor potencial
- **Quiero** que se valide el formato de mi email
- **Para que** no me suscriba con una dirección incorrecta sin darme cuenta

#### Criterios de Aceptación:
- **Escenario:** Email con formato inválido
- **Dado:** que estoy en el formulario de newsletter
- **Cuando:** introduzco un email con formato inválido y envío
- **Entonces:** se muestra un mensaje de error de validación y el formulario no se envía

### HU-16
- **Resumen:** Feedback claro cuando el email ya está suscrito

#### Caso de uso:
- **Como** visitante que ya se suscribió anteriormente
- **Quiero** saber que mi email ya está registrado
- **Para que** no repita la acción y entienda que ya recibiré novedades

#### Criterios de Aceptación:
- **Escenario:** Email ya existente en la audiencia
- **Dado:** que introduzco un email ya suscrito en Mailchimp
- **Cuando:** envío el formulario
- **Entonces:** se muestra un mensaje indicando que ese email ya está suscrito, sin duplicar el alta

### HU-17
- **Resumen:** Gestión de errores del sistema de suscripción

#### Caso de uso:
- **Como** suscriptor potencial
- **Quiero** recibir un aviso claro si falla el envío
- **Para que** sepa que debo reintentar y no crea que me he suscrito cuando no ha sido así

#### Criterios de Aceptación:
- **Escenario:** Fallo de la integración con Mailchimp
- **Dado:** que envío un email válido con consentimiento
- **y Dado:** que la integración con Mailchimp devuelve un error
- **Cuando:** se procesa el envío
- **Entonces:** se muestra un mensaje de error que invita a reintentar, sin pérdida del email introducido

---

## ÉPICA 8 — Footer y legal

### HU-18
- **Resumen:** Acceso a información legal y punto secundario de suscripción

#### Caso de uso:
- **Como** visitante que llega al final de la página
- **Quiero** encontrar los enlaces legales y una opción secundaria de newsletter
- **Para que** pueda consultar la política de privacidad o suscribirme si no lo hice antes

#### Criterios de Aceptación:
- **Escenario:** Consulta del footer
- **Dado:** que llego al final de la landing
- **Cuando:** reviso el footer
- **Entonces:** encuentro el enlace a la política de privacidad y un CTA secundario de newsletter operativo

---

## ÉPICA 9 — No funcionales (transversales)

### HU-19
- **Resumen:** Experiencia responsive coherente en cualquier dispositivo

#### Caso de uso:
- **Como** visitante que puede entrar desde móvil, tablet o desktop
- **Quiero** que la landing se adapte a mi pantalla
- **Para que** pueda descubrir la saga cómodamente sin importar el dispositivo

#### Criterios de Aceptación:
- **Escenario:** Renderizado en distintos breakpoints
- **Dado:** que accedo desde distintos tamaños de pantalla
- **Cuando:** se carga la landing
- **Entonces:** cada sección se reordena de forma legible y usable, siguiendo el enfoque mobile-first

### HU-20
- **Resumen:** Medición del comportamiento clave para analítica

#### Caso de uso:
- **Como** equipo de producto
- **Quiero** registrar los clics salientes a Steam y las altas de newsletter
- **Para que** pueda medir el descubrimiento y el interés generado por la landing

#### Criterios de Aceptación:
- **Escenario:** Registro de eventos clave
- **Dado:** que el tracking está configurado
- **Cuando:** un visitante hace clic en un enlace de Steam o completa una alta de newsletter
- **Entonces:** se registra el evento correspondiente con su contexto (título/era, o alta/confirmación)

### HU-21
- **Resumen:** Contenido apto para difusión pública sin age gate

#### Caso de uso:
- **Como** visitante que llega a la landing
- **Quiero** acceder al contenido sin barreras de edad
- **Para que** pueda descubrir la saga de forma fluida, con material adecuado para difusión pública

#### Criterios de Aceptación:
- **Escenario:** Acceso sin verificación de edad
- **Dado:** que accedo a la landing
- **Cuando:** se carga cualquier sección
- **Entonces:** no se solicita verificación de edad y el material mostrado es promocional oficial, sin gameplay gráfico

---

*Documento generado con la skill historias-de-usuario (Mike Cohn + Gherkin). Pendiente de decidir volcado a Jira y proyecto destino.*
