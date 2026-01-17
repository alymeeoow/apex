import React from "react";
import "../../../assets/styles/pages/hero.css";


import heroBg from "../../../assets/images/hero/ocean-and-mountain.png";

export default function Hero() {
  return (
    <section className="apex-hero" id="home">

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
        <h1 className="apex-hero-title">APEX-TIDE Consulting</h1>

        <p className="apex-hero-subtitle">
          Strategic consulting for leaders and organizations navigating growth,
          change, and performance improvement.
        </p>

       
      </div>
    </section>
  );
}
