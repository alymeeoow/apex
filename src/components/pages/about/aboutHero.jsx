import React from "react";
import "../../../assets/styles/pages/hero.css";


const UNSPLASH_BG =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80";

export default function AboutHero() {
  return (
    <section className="apex-hero" id="about">
      {/* Background */}
      <div
        className="apex-hero-bg"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(6, 10, 18, 0.65) 0%,
              rgba(6, 10, 18, 0.72) 45%,
              rgba(6, 10, 18, 0.85) 100%
            ),
            url(${UNSPLASH_BG})
          `,
        }}
        aria-hidden="true"
      />


      <div className="apex-hero-glow" aria-hidden="true" />

 
      <div className="apex-hero-inner">
        <h1 className="apex-hero-title">
          About Eileen
        </h1>

        <p className="apex-hero-subtitle">
          A reflection of the journey, the work, and the values that guide me
        </p>
      </div>
    </section>
  );
}
