import "./Footer.css";

const exploreLinks = [
  { label: "Introducción", href: "#tr-hook" },
  { label: "La saga", href: "#tr-timeline" },
  { label: "Otros juegos", href: "#tr-other" },
  { label: "Más allá de los juegos", href: "#tr-beyond" },
  { label: "Newsletter", href: "#tr-future" },
] as const;

const legalLinks = [
  { label: "Política de privacidad", href: "#tr-footer-privacy" },
  { label: "Aviso legal", href: "#tr-footer-legal" },
] as const;

export function Footer() {
  return (
    <footer className="tr-footer" role="contentinfo">
      <div className="tr-footer__grid">
        <div className="tr-footer__brand">
          <p className="tr-footer__wordmark">TOMB RAIDER</p>
          <p className="tr-footer__disclaimer">
            Landing de descubrimiento no oficial. Tomb Raider y Lara Croft son
            marcas registradas de sus respectivos propietarios. Contenido de
            imagen y vídeo: material oficial pendiente de licencia.
          </p>
          <p className="tr-footer__legal-note" id="tr-footer-privacy">
            Privacidad: el formulario usa un stub local; la política definitiva
            depende de la integración segura de Mailchimp.
          </p>
          <p className="tr-footer__legal-note" id="tr-footer-legal">
            Aviso legal: no se publicarán assets ni enlaces externos sin validación
            de PO, UX y legal.
          </p>
          <a className="tr-footer__cta" href="#tr-future">
            Recibir novedades de Lara Croft <span aria-hidden="true">↓</span>
          </a>
        </div>

        <nav className="tr-footer__nav" aria-label="Explorar">
          <p className="tr-footer__heading">EXPLORAR</p>
          <ul className="tr-footer__links">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="tr-footer__nav" aria-label="Legal">
          <p className="tr-footer__heading">LEGAL</p>
          <ul className="tr-footer__links">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="tr-footer__copyright">
        © 2026 · Prototipo de diseño, sin fines comerciales.
      </div>
    </footer>
  );
}
