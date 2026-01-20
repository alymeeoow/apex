import React from "react";
import  AboutSection3Image from "../../../assets/images/about/about-section-3.png";

import EileenInWhite from "../../../assets/images/home/eileen-choose-white.jpg"

export default function AboutSection3() {
  return (
    <section id="about-section-3" className="about-section">
      <div className="about-shell">
        <div className="about-grid">
          {/* LEFT */}
          <aside className="about-left1">
            <div className="about-leftStack">
              <div className="about-mediaCard">
                <div className="about-image">
                  <img
                    src={EileenInWhite}
                    alt="Industry speaking and thought leadership"
                  />
                </div>
              </div>

              <div className="about-infoCard">

                <div className="about-infoTitle">
                  Industry Speaking, Curriculum Development & Thought Leadership
                </div>

                <div className="about-chipGrid">
                  <span className="about-chip">Leadership</span>
                  <span className="about-chip">Negotiation</span>
                  <span className="about-chip">AI Adoption</span>
                  <span className="about-chip">Future of Work</span>
                </div>
              </div>
            </div>

               {/* DIFFERENTIATOR */}
              <div className="about-card about-card--soft">
                <p>
                  What is most worth noting about Eileen Dabrowski is her ability to
                  operate simultaneously as a practitioner, strategist, and industry
                  architect and to translate that perspective into action that scales
                  across the supply chain ecosystem.
                </p>

                <p>
                  Unlike many leaders who specialize in a single functional lane, Eileen
                  has spent her career embedded across operations, sales, marketing,
                  technology adoption, and workforce development within transportation and
                  logistics. This allows her to see patterns others miss, specifically how
                  misalignment between people, process, and technology quietly erodes
                  performance long before it shows up in financials.
                </p>

                <p>
                  Her competitive differentiator is not just thought leadership, but
                  operational fluency. Eileen does not speak in abstractions; she builds
                  systems. Whether she designs education tracks for an industry
                  association, restructuring go-to-market teams for a 3PL, or guiding
                  executives through AI adoption, her work is grounded in real-world
                  execution and measurable outcomes.
                </p>
              </div>

                 <div className="about-card about-card--grid">
                <p>
                  At a time when the supply chain industry is facing margin pressure,
                  talent burnout, and rapid technological change, Eileen brings a rare
                  combination of:
                </p>

                <ul className="about-list">
                  <li>Deep freight and logistics experience</li>
                  <li>Strategic clarity across functions</li>
                  <li>A human-centered approach to leadership and change</li>
                </ul>
              </div>
          </aside>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-rail">
         
    

              <h2 className="about-title">
                Industry Speaking, Curriculum Development &amp; Thought Leadership
              </h2>

              <p>
                Eileen has continued to serve as a trusted industry voice through speaking
                engagements, curriculum development, and advisory roles with national
                organizations. Her sessions consistently rank highly for relevance and
                applicability, focusing on leadership, negotiation, AI adoption, and the
                future of work in logistics.
              </p>

              <p>
                She also built and taught a 7-part Carrier Sales course for TIA and is
                currently in the midst of building a Leadership course for TIA that she
                will teach next year. Eileen was a guest on over 30 podcasts this year,
                and has challenged herself to remain a thought leader trough constant
                learning.
              </p>

              {/* GOALS CONTAINER */}
              <div className="about-card">
                <p>
                  What goal(s) is/are the nominee looking to achieve in the next 12 months?
                  What’s next?
                </p>

                <p>
                  Over the next 12 months, Eileen’s focus is on scaling impact without
                  losing depth.
                </p>

                <p>Her goals include:</p>

                <ul className="about-list">
                  <li>Continue to thrive in a difficult market and economy</li>
                  <li>
                    Expanding leadership and certification programs to reach a broader
                    segment of the supply chain workforce
                  </li>
                  <li>
                    Helping organizations operationalize AI and automation in ways that
                    enhance, not replace, human leadership
                  </li>
                  <li>
                    Launching additional mentorship and scholarship initiatives to support
                    emerging leaders
                  </li>
                  <li>
                    Continuing to elevate the role of marketing, sales, and leadership
                    alignment as core drivers of supply chain performance
                  </li>
                  <li>
                    Strengthening community-driven education models that make professional
                    growth accessible, practical, and measurable
                  </li>
                  <li>Maintain existing clients and grow their businesses</li>
                  <li>Continue to speak at industry conferences/trade shows</li>
                  <li>Add to her team to allow increased bandwidth</li>
                  <li>
                    Publish thought leadership, organization growth white papers and
                    collateral
                  </li>
                </ul>
              </div>

              {/* WHAT'S NEXT */}
              <div className="about-card about-card--accent">
                <p>
                  What’s next for Eileen is not simply “more.” It is better systems, better
                  leaders, and a stronger industry, built intentionally and sustainably.
                </p>
              </div>

           

              {/* FINAL LIST */}
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
