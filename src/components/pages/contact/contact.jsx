import React from "react";
import "../../../assets/styles/pages/contact.css";
import ContactHero from "./contactHero";

import { MdEmail, MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const email = "eileendabrowski@gmail.com";
  const linkedin = "https://www.linkedin.com/in/eileen-dabrowski-a090a7141";

  return (
    <main className="apex-contact">
     
      <ContactHero />

      <section className="ct-cardsSection" aria-label="Contact options">
        <div className="ct-shell">
          <div className="ct-cardsWrap">
            <div className="ct-cards">
             
              <article className="ct-card">
                <div className="ct-icoWrap" aria-hidden="true">
                  <MdEmail className="ct-ico" />
                </div>

                <h2 className="ct-cardTitle">Email</h2>

                <p className="ct-cardText">
                  Best for inquiries, timelines, and details. Expect a clear response
                  with next steps.
                </p>

                <a className="ct-btnPrimary" href={`mailto:${email}`}>
                  Email Eileen <MdArrowOutward aria-hidden="true" />
                </a>

                <a className="ct-emailLink" href={`mailto:${email}`}>
                  {email}
                </a>
              </article>

     
              <article className="ct-card ct-cardAlt">
                <div className="ct-icoWrap" aria-hidden="true">
                  <FaLinkedinIn className="ct-ico" />
                </div>

                <h2 className="ct-cardTitle">LinkedIn</h2>

                <p className="ct-cardText">
                  Best for staying in touch, updates, and quick introductions. Mention
                  what you’re working on so the connection is contextual.
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
              </article>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}
