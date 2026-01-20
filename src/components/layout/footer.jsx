
import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/layout/footer.css";

import logo from "../../assets/images/logo/apex-transparent.png";
import logoWord from "../../assets/images/logo/apex-tide-word.png";

export default function Footer() {
  const footerLinkClass = ({ isActive }) =>
    `apex-footer-link ${isActive ? "is-active" : ""}`;

  const year = new Date().getFullYear();

  return (
    <footer className="apex-footer" aria-label="Site footer">
      <div className="apex-footer-scene" aria-hidden="true">
        <div className="apex-footer-horizon" />
        <div className="apex-footer-ocean" />
      </div>

      <div className="apex-footer-inner">
        <div className="apex-footer-top">
   
          <div className="apex-footer-brandBlock">
            <NavLink to="/" className="apex-footer-brand" aria-label="APEX Home">
              <span className="apex-footer-brandRow">
                <img src={logo} alt="APEX logo" className="apex-footer-logo" />
                <img
                  src={logoWord}
                  alt="APEX Tide Consulting"
                  className="apex-footer-word"
                />
              </span>
            </NavLink>

            <p className="apex-footer-tagline">
              Strategic consulting for leaders and organizations navigating
              growth, change, and performance improvement.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <div className="apex-footer-colTitle">NAVIGATION</div>
            <div className="apex-footer-links">
              <NavLink to="/" end className={footerLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={footerLinkClass}>
                About
              </NavLink>
              <NavLink to="/services" className={footerLinkClass}>
                Services
              </NavLink>
              <NavLink to="/contact" className={footerLinkClass}>
                Contact
              </NavLink>
              <NavLink to="/faq" className={footerLinkClass}>
                FAQ
              </NavLink>
            </div>
          </div>

          {/* EMPOWERMENT */}
          <div>
            <div className="apex-footer-colTitle">EMPOWERMENT</div>
            <div className="apex-footer-links">
              <NavLink to="/empowerment" className={footerLinkClass}>
                Empowerment
              </NavLink>
              <NavLink to="/programs" className={footerLinkClass}>
                Programs
              </NavLink>
              <NavLink to="/resources" className={footerLinkClass}>
                Resources
              </NavLink>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <div className="apex-footer-colTitle">SUPPORT</div>
            <div className="apex-footer-links">
              <NavLink to="/help" className={footerLinkClass}>
                Help Center
              </NavLink>
              <NavLink to="/quote" className={footerLinkClass}>
                Request a Quote
              </NavLink>
              <NavLink to="/faq" className={footerLinkClass}>
                Common Questions
              </NavLink>
            </div>
          </div>
        </div>

        <div className="apex-footer-divider" />

        <div className="apex-footer-bottom">
          <div className="apex-footer-copy">© {year} APEX. All rights reserved.</div>

          <div className="apex-footer-miniLinks">
            <NavLink to="/privacy" className="apex-footer-miniLink">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="apex-footer-miniLink">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
