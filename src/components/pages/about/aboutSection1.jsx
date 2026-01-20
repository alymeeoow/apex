import React from "react";
import AboutSection1Image from "../../../assets/images/home/snapshot-work.jpg";


export default function AboutSection1() {
  return (
    <section id="about-section-1" className="about-section">
      <div className="about-shell">
        <div className="about-grid">
          <aside className="about-left">
            <div className="about-leftFlow">
              <div className="about-leftStack">
                <div className="about-mediaCard">
                  <div className="about-image">
                    <img src={AboutSection1Image} alt="Leadership and collaboration" />
                  </div>
                </div>

                <div className="about-infoCard">
                  <div className="about-infoTitle">A Snapshot of the Work</div>

                  <div className="about-chipGrid">
                    <span className="about-chip">Education Programs</span>
                    <span className="about-chip">Executive Advisory</span>
                    <span className="about-chip">Workforce Development</span>
                    <span className="about-chip">Strategy + Alignment</span>
                  </div>
                </div>
              </div>

              <p className="about-quote">
                I watch Eileen pivot every day as her clients’ needs shift. Like the
                transportation and logistics industry, she ebbs and flows to ensure she
                does everything in her power to help clients succeed. She reads every
                morning and every night, constantly challenging herself to learn, emulate,
                and grow.
              </p>
            </div>
          </aside>

          <div className="about-right">
            <div className="about-rail">
              <h2 className="about-title">A Snapshot of the Work</h2>

              <p className="about-lead">
                Here is a snip from another submission about me:
              </p>

              <div className="about-card">
                <h3 className="about-cardTitle">Her day-to-day responsibilities include:</h3>

                <ul className="about-list">
                  <li>Designing and executing multi-track education programs for sales leaders, marketing leaders, practitioners, and company executives</li>
                  <li>Advising logistics organizations on go-to-market strategy, organizational design, training frameworks, and change management</li>
                  <li>Leading curriculum development for industry education partners, including TIA, Women in Trucking, IWLA, and enterprise logistics firms</li>
                  <li>Consulting with executive leadership teams to solve challenges related to revenue growth, team performance, burnout, and alignment</li>
                  <li>Facilitating workshops, keynotes, and executive roundtables on leadership, negotiation, AI adoption, and modern supply chain strategy</li>
                  <li>Building community-driven initiatives that promote mentorship, inclusion, and long-term talent development</li>
                </ul>
              </div>

              <div className="about-card about-card--accent1">
                <p>
                  At every level, Eileen’s work is focused on one core mission: helping supply
                  chain organizations and leaders perform better, lead better, and build
                  resilient businesses in a rapidly changing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
