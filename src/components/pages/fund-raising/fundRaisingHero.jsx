import React from "react";
import "../../../assets/styles/pages/hero.css";

// Unsplash image for fundraising hero background
const heroBg = "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

export default function FundraisingHero({ totalRaised }) {
  return (
    <section className="apex-hero" id="fundraising">
      <div
        className="apex-hero-bg"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(8, 12, 20, 0.65) 0%,
              rgba(30, 58, 95, 0.78) 45%,
              rgba(7, 21, 43, 0.88) 100%
            ),
            url(${heroBg})
          `,
        }}
        aria-hidden="true"
      />

      <div className="apex-hero-glow" aria-hidden="true" />

      <div className="apex-hero-inner">
        <h1 className="apex-hero-title">
          Fundraising for Children
        </h1>

        <p className="apex-hero-subtitle">
          Every dollar creates opportunities. Every donation builds futures. 
          Join us in empowering the next generation of logistics leaders.
        </p>
        
        <div className="fundraising-total">
          <div className="total-label">Total Raised for Charity</div>
          <div className="total-amount">${totalRaised.toLocaleString()}</div>
          <div className="total-goal">Goal: $200,000</div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(totalRaised / 200000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}