import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const HERO_VIDEO_SRC = "/assets/hero-video.mp4";
const HERO_POSTER_SRC = "/assets/temple-sunset.svg";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const reduce = mediaQuery.matches;
      setPrefersReducedMotion(reduce);
      if (reduce) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasVideoError || prefersReducedMotion) {
      return;
    }

    if (isPlaying) {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [hasVideoError, isPlaying, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const onScroll = () => {
      const video = videoRef.current;
      if (!video || hasVideoError) {
        return;
      }
      video.style.transform = `translateY(${window.scrollY * 0.08}px) scale(1.06)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasVideoError, prefersReducedMotion]);

  const toggleHero = () => {
    if (prefersReducedMotion) {
      return;
    }
    setIsPlaying((current) => !current);
  };

  const showFallback = hasVideoError || prefersReducedMotion;
  const ariaLabel = isPlaying
    ? "Pausar la animación de fondo del hero"
    : "Reproducir la animación de fondo del hero";

  return (
    <header
      className="tr-hero"
      data-hero-playing={isPlaying ? "true" : "false"}
      role="banner"
    >
      <div className="tr-hero__media" aria-hidden="true">
        <video
          id="tr-hero-video"
          ref={videoRef}
          className="tr-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER_SRC}
          onError={() => setHasVideoError(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          id="tr-hero-mobile-bg"
          className="tr-hero__fallback"
          data-visible={showFallback ? "true" : "false"}
        />
        <div className="tr-hero__dust" data-tr-anim />
        <div className="tr-hero__scrim" />
      </div>

      <nav className="tr-hero__nav" aria-label="Principal">
        <span className="tr-hero__logo">TR</span>
        <div className="tr-hero__nav-links">
          <a href="#tr-timeline">La saga</a>
          <a href="#tr-other">Otros juegos</a>
          <a href="#tr-future">El futuro</a>
        </div>
      </nav>

      <div className="tr-hero__content">
        <p className="tr-hero__kicker">DESCUBRE LA SAGA</p>
        <h1 className="tr-hero__wordmark">
          TOMB
          <br />
          RAIDER
        </h1>
        <div className="tr-hero__divider" aria-hidden="true" />
        <p className="tr-hero__claim">
          Una arqueóloga. Tumbas olvidadas. Más de 25 años convirtiendo cada
          ruina en leyenda. Recorre toda la historia de Lara Croft, juego a
          juego.
        </p>
        <a className="tr-button-primary tr-hero__cta" href="#tr-hook">
          EMPEZAR EL RECORRIDO <span aria-hidden="true">↓</span>
        </a>
      </div>

      <button
        className="tr-hero__control"
        type="button"
        aria-label={ariaLabel}
        onClick={toggleHero}
        disabled={prefersReducedMotion}
      >
        <span aria-hidden="true">{isPlaying ? "||" : ">"}</span>
        {isPlaying ? "Pausar" : "Reproducir"}
      </button>
    </header>
  );
}
