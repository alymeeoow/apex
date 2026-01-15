// Header.jsx
import React, { useEffect, useState } from "react";
import "../../assets/styles/layout/header.css";
import logo from "../../assets/images/apex-transparent.png";
import logoWord from "../../assets/images/apex-tide-word.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`apex-header ${isScrolled ? "is-scrolled" : ""}`}>
 
      <div className="apex-header-scene" aria-hidden="true">
        <div className="apex-header-mountains" />
        <div className="apex-header-ocean" />
        <div className="apex-header-glow" />
      </div>

      <div className="apex-header-inner">
        <a className="apex-header-brand" href="/" aria-label="APEX Home">
          <img src={logo} alt="APEX logo" className="apex-header-logo" />
          <img src={logoWord} alt="APEX logoWord" className="apex-header-word" />
        </a>

        <div className="apex-header-navWrap" aria-label="Primary navigation">
          <nav className="apex-header-nav">
            <a className="apex-header-link" href="#features">HOME</a>
            <a className="apex-header-link" href="#pricing">ABOUT</a>
            <a className="apex-header-link" href="#about">SERVICES</a>
            <a className="apex-header-link" href="#contact">CONTACT</a>
            <a className="apex-header-link" href="#faq">FAQ</a>
          </nav>

          <span className="apex-header-divider" aria-hidden="true" />

          <nav
            className="apex-header-nav apex-header-nav--right"
            aria-label="Empowerment navigation"
          >
            <a
              className="apex-header-link apex-header-link--empower"
              href="#empowerment"
            >
              EMPOWERMENT
            </a>
          </nav>
        </div>

        <div className="apex-header-actions">
          <button
            className="apex-header-menuBtn"
            type="button"
            aria-label="Open menu"
          >
            <span className="apex-header-menuIcon" />
          </button>
        </div>
      </div>
    </header>
  );
}
