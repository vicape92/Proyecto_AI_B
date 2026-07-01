import { useEffect } from "react";
import { BeyondGamesBlock } from "../components/BeyondGamesBlock/BeyondGamesBlock";
import { CollapsibleBlock } from "../components/CollapsibleBlock/CollapsibleBlock";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { HookSection } from "../components/HookSection/HookSection";
import { NewsletterForm } from "../components/NewsletterForm/NewsletterForm";
import { EraTimeline } from "../components/EraTimeline/EraTimeline";
import "./TombRaiderLanding.css";

export function TombRaiderLanding() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".tr-reveal").forEach((element) => {
        element.classList.add("tr-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tr-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".tr-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tr-root">
      <a className="tr-skip-link" href="#tr-main">
        Saltar al contenido principal
      </a>
      <Hero />
      <main id="tr-main" tabIndex={-1}>
        <HookSection />
        <EraTimeline />
        <CollapsibleBlock />
        <BeyondGamesBlock />
        <section className="tr-future tr-reveal" id="tr-future" aria-labelledby="tr-future-h">
          <div className="tr-future__inner">
            <p className="tr-future__kicker">EL FUTURO</p>
            <h2 id="tr-future-h">El próximo hallazgo empieza aquí</h2>
            <p className="tr-future__intro">
              Lara Croft prepara una nueva expedición. Deja tu correo y recibe las
              novedades cuando haya pistas confirmadas del siguiente capítulo.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
