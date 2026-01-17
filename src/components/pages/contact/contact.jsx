// Contact.jsx
import React from "react";
import "../../../assets/styles/pages/contact.css";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const linkedin =
    "https://www.linkedin.com/in/eileen-dabrowski-a090a7141?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNFCG7pZDTtSLICxwlU4y6Q%3D%3D";
  const email = "eileendabrowski@gmail.com";

  return (
    <main className="apex-contact">
      
      <section className="ct-hero" aria-label="Contact header">
        <div className="ct-shell">
          <div className="ct-heroCard">
            <div className="ct-heroCopy">
              <div className="ct-eyebrow">
                  <span className="fq-dot" aria-hidden="true" />
                Contact
           
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

    
      <section className="ct-section" aria-label="Contact methods">
        <div className="ct-shell">
          <div className="ct-grid2">
         
            <article className="ct-card">
              <header className="ct-cardHead">
                <div className="ct-iconWrap" aria-hidden="true">
                  <MdEmail className="ct-ico" />
                </div>

                <div className="ct-cardTitle">
                  <h2 className="ct-h2">Email</h2>
                  <p className="ct-desc">
                    Best for inquiries, timelines, and details. Expect a clear
                    response with next steps.
                  </p>
                </div>
              </header>

       
              <div className="ct-cardSpacer" aria-hidden="true" />

              <a className="ct-action" href={`mailto:${email}`}>
                <span className="ct-actionText">{email}</span>
                <MdArrowOutward className="ct-actionIco" aria-hidden="true" />
              </a>

              <p className="ct-note">
                Tip: include your event date, audience, and what you’re trying
                to improve.
              </p>
            </article>

   
            <article className="ct-card ct-card--alt">
              <header className="ct-cardHead">
                <div className="ct-iconWrap" aria-hidden="true">
                  <FaLinkedinIn className="ct-ico" />
                </div>

                <div className="ct-cardTitle">
                  <h2 className="ct-h2">LinkedIn</h2>
                  <p className="ct-desc">
                    Best for staying in touch, updates, and quick introductions.
                  </p>
                </div>
              </header>

      
              <div className="ct-cardSpacer" aria-hidden="true" />

              <a
                className="ct-action"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="ct-actionText">Connect on LinkedIn</span>
                <MdArrowOutward className="ct-actionIco" aria-hidden="true" />
              </a>

              <p className="ct-note">
                Mention what you’re working on in logistics so the connection is
                contextual.
              </p>
            </article>
          </div>
        </div>
      </section>


      <section className="ct-strip" aria-label="Quick note">
        <div className="ct-shell">

        </div>
      </section>
    </main>
  );
}
