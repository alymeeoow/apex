// Contact.jsx
import React from "react";
import "../../../assets/styles/pages/contact.css";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const email = "eileendabrowski@gmail.com";
  const linkedin = "https://www.linkedin.com/in/eileen-dabrowski-a090a7141";

  return (
    <main className="apex-contact">
      {/* TOP BOX HERO (NO IMAGE) */}
      <section className="ct-hero" aria-label="Contact header">
        <div className="ct-shell">
          <div className="ct-heroCard">
            <div className="ct-heroCopy">
              <div className="ct-eyebrow">
               
              
              </div>

              <h1 className="ct-h1">Let’s Connect</h1>

              <p className="ct-lead">
                The fastest way to reach Eileen is email. For updates, speaking,
                and collaboration, connect on LinkedIn.
              </p>
            </div>

            <div className="ct-heroAside" aria-hidden="true">
              <div className="ct-miniStat">
                <div className="ct-miniNum">01</div>
                <div className="ct-miniLabel">Email</div>
              </div>
              <div className="ct-miniStat">
                <div className="ct-miniNum">02</div>
                <div className="ct-miniLabel">LinkedIn</div>
              </div>
            </div>

            <div className="ct-heroDecor" aria-hidden="true">
              <div className="ct-orb ct-orb--a" />
              <div className="ct-orb ct-orb--b" />
              <div className="ct-grid" />
            </div>
          </div>
        </div>
      </section>

      {/* ONE BIG BOX (split by divider line) */}
      <section className="ct-section" aria-label="Contact methods">
        <div className="ct-shell">
          <div className="ct-splitBox">
            {/* LEFT */}
            <div className="ct-splitPane">
              <div className="ct-splitIcon" aria-hidden="true">
                <MdEmail className="ct-splitIco" />
              </div>

              <h2 className="ct-splitTitle">Email</h2>

              <p className="ct-splitText">
                Best for inquiries, timelines, and details. Expect a clear
                response with next steps.
              </p>

              <a className="ct-btnPrimary" href={`mailto:${email}`}>
                Email Eileen <MdArrowOutward aria-hidden="true" />
              </a>

              <a className="ct-emailLink" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            {/* DIVIDER */}
            <div className="ct-splitDivider" aria-hidden="true" />

            {/* RIGHT */}
            <div className="ct-splitPane">
              <div className="ct-splitIcon" aria-hidden="true">
                <FaLinkedinIn className="ct-splitIco" />
              </div>

              <h2 className="ct-splitTitle">LinkedIn</h2>

              <p className="ct-splitText">
                Best for staying in touch, updates, and quick introductions.
                Mention what you’re working on so the connection is contextual.
              </p>

              <a
                className="ct-btnPrimary"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <MdArrowOutward aria-hidden="true" />
              </a>

              <a
                className="ct-btnGhost"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
