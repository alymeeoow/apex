
import React from "react";
import "../../assets/styles/comingSoon.css";
import Logo from "../../assets/images/apex-transparent.png";

export default function ComingSoonMountain({ logoAlt = "Apex" }) {
  return (
    <main className="cs-page" aria-label="Coming soon page">
      <section className="cs-card">
        <div className="cs-top-glow" aria-hidden="true" />

        {/* Logo */}
        <div className="cs-logo-wrap" aria-label="Brand">
          <img className="cs-logo" src={Logo} alt={logoAlt} />
        </div>

        {/* Mountain */}
        <div className="cs-mountain-wrap" aria-hidden="true">
          <svg
            className="cs-mountain"
            viewBox="0 0 1000 520"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Mountain apex"
          >
            <defs>
              {/* Front face */}
              <linearGradient id="mountainFront" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a7bfdc" />
                <stop offset="100%" stopColor="#dbe9f8" />
              </linearGradient>

              {/* Left shaded face */}
              <linearGradient id="mountainLeft" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8fa9c8" />
                <stop offset="100%" stopColor="#c7dbf1" />
              </linearGradient>

              {/* Right highlighted face */}
              <linearGradient id="mountainRight" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e9f2fb" />
                <stop offset="100%" stopColor="#cddff3" />
              </linearGradient>

              {/* Snow cap */}
              <linearGradient id="snowCap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#edf3fa" />
              </linearGradient>

              {/* Atmospheric fade */}
              <linearGradient id="baseFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.65)" />
              </linearGradient>

              {/* Shadow */}
              <filter id="softShadow" x="-25%" y="-25%" width="150%" height="170%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                <feOffset dx="0" dy="18" />
                <feColorMatrix
                  type="matrix"
                  values="
                    0 0 0 0 0.20
                    0 0 0 0 0.30
                    0 0 0 0 0.45
                    0 0 0 0.22 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Back silhouette */}
            <path
              d="M120 430 L500 150 L880 430 Z"
              fill="#c7d9ee"
              opacity="0.55"
            />

            {/* Main mountain front */}
            <path
              d="M60 470 L500 40 L940 470 Z"
              fill="url(#mountainFront)"
              filter="url(#softShadow)"
            />

            {/* Left face */}
            <path
              d="M60 470 L500 40 L420 470 Z"
              fill="url(#mountainLeft)"
              opacity="0.85"
            />

            {/* Right face */}
            <path
              d="M500 40 L940 470 L580 470 Z"
              fill="url(#mountainRight)"
              opacity="0.9"
            />

            {/* Snow cap */}
            <path
              d="M450 120 L500 40 L550 120 L520 135 L500 125 L480 135 Z"
              fill="url(#snowCap)"
            />

            {/* Ridge lines */}
            <path
              d="M500 40 L650 300"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M500 40 L350 300"
              stroke="rgba(120,150,190,0.28)"
              strokeWidth="4"
              strokeLinecap="round"
            />

        
           
          </svg>

          <div className="cs-haze" />
        </div>

        <h1 className="cs-title">COMING SOON</h1>
        <p className="cs-subtitle">APEX</p>
      </section>
    </main>
  );
}
