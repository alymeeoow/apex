import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/layout/header.css";

import logo from "../../assets/images/logo/apex-transparent.png";
import logoWord from "../../assets/images/logo/apex-tide-word.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `apex-header-link ${isActive ? "is-active" : ""}`;

  const empowerClass = ({ isActive }) =>
    `apex-header-link apex-header-link--empower ${isActive ? "is-active" : ""}`;

  return (
    <header className={`apex-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="apex-header-scene" aria-hidden="true">
        <div className="apex-header-mountains" />
        <div className="apex-header-ocean" />
        <div className="apex-header-glow" />
      </div>

      <div className="apex-header-inner">
        <NavLink className="apex-header-brand" to="/" aria-label="APEX Home">
          <img src={logo} alt="APEX logo" className="apex-header-logo" />
          <img src={logoWord} alt="APEX wordmark" className="apex-header-word" />
        </NavLink>

        <div className="apex-header-navWrap" aria-label="Primary navigation">
          <nav className="apex-header-nav">
            <NavLink to="/" end className={linkClass}>
              HOME
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              ABOUT
            </NavLink>

            <NavLink to="/services" className={linkClass}>
              SERVICES
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              CONTACT
            </NavLink>

            <NavLink to="/faq" className={linkClass}>
              FAQ
            </NavLink>
          </nav>

          <span className="apex-header-divider" aria-hidden="true" />

          <nav
            className="apex-header-nav apex-header-nav--right"
            aria-label="Empowerment navigation"
          >
            <NavLink to="/empowerment" className={empowerClass}>
              EMPOWERMENT
            </NavLink>
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
