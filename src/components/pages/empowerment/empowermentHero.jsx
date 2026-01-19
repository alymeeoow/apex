
import React from "react";
import "../../../assets/styles/pages/hero.css";



import heroBg from "../../../assets/images/hero/influencial.png";

export default function EmpowermentHero() {
  return (
    <section className="apex-hero" id="empowerment">
      <div
        className="apex-hero-bg"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(8, 12, 20, 0.55) 0%,
              rgba(8, 12, 20, 0.68) 45%,
              rgba(8, 12, 20, 0.78) 100%
            ),
            url(${heroBg})
          `,
        }}
        aria-hidden="true"
      />

      <div className="apex-hero-glow" aria-hidden="true" />

      <div className="apex-hero-inner">
        <h1 className="apex-hero-title">
          Empowering Women in Logistics
        </h1>

        <p className="apex-hero-subtitle">
          Leadership is not granted. It’s built, supported, and sustained.
         
        </p>
      </div>
    </section>
  );
}
