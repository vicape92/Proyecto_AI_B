import "./HookSection.css";

const hookPanels = [
  {
    kicker: "¿QUIÉN ES?",
    title: "Lara Croft",
    body: "Una aristócrata inglesa convertida en arqueóloga de acción. Desde 1996 se abre paso entre templos olvidados, tumbas trampa y ruinas perdidas, decidida a desvelar los secretos que otros prefieren dejar enterrados.",
    imageSrc: "/assets/cave-torch.svg",
    imageAlt: "Placeholder editorial de una cueva iluminada por antorchas para representar a Lara Croft",
  },
  {
    kicker: "¿QUÉ ES?",
    title: "Tomb Raider",
    body: "Una saga de aventura y exploración con más de 25 años de historia: puzles ambientales, plataformas imposibles y una arqueóloga que nunca deja una tumba sin explorar. Del píxel a la fotogrametría, así ha evolucionado su leyenda.",
    imageSrc: "/assets/temple-sunset.svg",
    imageAlt: "Placeholder editorial de un templo al atardecer para representar la saga Tomb Raider",
  },
] as const;

export function HookSection() {
  return (
    <section className="tr-hook" id="tr-hook" aria-labelledby="tr-hook-h">
      <div className="tr-hook__grid">
        {hookPanels.map((panel, index) => {
          const headingId = index === 0 ? "tr-hook-h" : undefined;

          return (
            <article className="tr-hook__panel tr-reveal" key={panel.title}>
              <p className="tr-hook__kicker">{panel.kicker}</p>
              <h2 id={headingId}>{panel.title}</h2>
              <p className="tr-hook__body">{panel.body}</p>
              <img
                className="tr-hook__image"
                src={panel.imageSrc}
                alt={panel.imageAlt}
                loading="lazy"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
