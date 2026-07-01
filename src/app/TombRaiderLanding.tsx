import { Hero } from "../components/Hero/Hero";

export function TombRaiderLanding() {
  return (
    <div className="tr-root">
      <a className="tr-skip-link" href="#tr-main">
        Saltar al contenido principal
      </a>
      <Hero />
      <main id="tr-main" tabIndex={-1}>
        <div id="tr-hook" className="tr-anchor-placeholder" aria-hidden="true" />
        <div id="tr-timeline" className="tr-anchor-placeholder" aria-hidden="true" />
        <div id="tr-other" className="tr-anchor-placeholder" aria-hidden="true" />
        <div id="tr-beyond" className="tr-anchor-placeholder" aria-hidden="true" />
        <div id="tr-future" className="tr-anchor-placeholder" aria-hidden="true" />
      </main>
    </div>
  );
}
