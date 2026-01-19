// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/styles/layout/header.css";

import logo from "../../assets/images/logo/apex-transparent.png";
import logoWord from "../../assets/images/logo/apex-tide-word.png";

const MOBILE_BREAKPOINT = 860;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef(null);
  const location = useLocation();

  // Scroll styling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu if we resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsMenuOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // Focus first item when opened
  useEffect(() => {
    if (!isMenuOpen) return;
    window.setTimeout(() => {
      panelRef.current?.querySelector("a,button")?.focus?.();
    }, 0);
  }, [isMenuOpen]);

  const linkClass = ({ isActive }) =>
    `apex-header-link ${isActive ? "is-active" : ""}`;

  const empowerClass = ({ isActive }) =>
    `apex-header-link apex-header-link--empower ${isActive ? "is-active" : ""}`;

  return (
    <>
      <header className={`apex-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="apex-header-scene" aria-hidden="true">
          <div className="apex-header-mountains" />
          <div className="apex-header-ocean" />
          <div className="apex-header-glow" />
        </div>

        <div className="apex-header-inner">
          <NavLink className="apex-header-brand" to="/" aria-label="APEX Home">
            <img src={logo} alt="APEX logo" className="apex-header-logo" />
            <img
              src={logoWord}
              alt="APEX wordmark"
              className="apex-header-word"
            />
          </NavLink>

          {/* Desktop nav */}
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

          {/* Mobile burger */}
          <div className="apex-header-actions">
            <button
              className={`apex-header-burger ${isMenuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="apex-mobile-nav"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <span className="apex-header-burgerLines" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay + Slide-in panel */}
      <div
        className={`apex-mobile ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Clickable blur backdrop (tap anywhere outside to close) */}
        <button
          className="apex-mobile-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          tabIndex={isMenuOpen ? 0 : -1}
        />

        {/* Right-side panel (80% width) */}
        <aside
          id="apex-mobile-nav"
          ref={panelRef}
          className="apex-mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="apex-mobile-panelTop">
            <span className="apex-mobile-title">MENU</span>
          </div>

          <nav className="apex-mobile-nav">
            <NavLink to="/" end className="apex-mobile-link">
              HOME
            </NavLink>
            <NavLink to="/about" className="apex-mobile-link">
              ABOUT
            </NavLink>
            <NavLink to="/services" className="apex-mobile-link">
              SERVICES
            </NavLink>
            <NavLink to="/contact" className="apex-mobile-link">
              CONTACT
            </NavLink>
            <NavLink to="/faq" className="apex-mobile-link">
              FAQ
            </NavLink>

            <div className="apex-mobile-sep" aria-hidden="true" />

            <NavLink
              to="/empowerment"
              className="apex-mobile-link apex-mobile-link--empower"
            >
              EMPOWERMENT
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
}
