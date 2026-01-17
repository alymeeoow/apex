import React from "react";
import "../../../assets/styles/pages/hero.css";

import AboutheroBg from "../../../assets/images/home/eileen-2.png";

export default function AboutHero() {
  return (
    <section className="apex-hero" id="home">
      s
      <div
        className="apex-hero-bg-2"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(8, 12, 20, 0.55) 0%,
              rgba(8, 12, 20, 0.68) 45%,
              rgba(8, 12, 20, 0.78) 100%
            ),
            url(${AboutheroBg})
          `,
        }}
        aria-hidden="true"
      />

      <div className="apex-hero-glow" aria-hidden="true" />

      <div className="apex-hero-inner">
        <h1 className="apex-hero-title">
          ABOUT  ME
        </h1>
        <p className="apex-hero-subtitle">
  A reflection on the journey, the work and the values that guide me
        </p>
      </div>
    </section>
  );
}
