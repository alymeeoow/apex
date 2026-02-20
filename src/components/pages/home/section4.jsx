// Section4.jsx
import React from "react";
import KristyE from "../../../assets/images/home/eileen-community.jpg";

export default function Section4() {
  return (
    <section id="section-4" className="apex-section">
      <div className="apex-shell">
        <div className="apex-split reverse">
          <div className="apex-side">
            <div className="side-image">
              <img src={KristyE} alt="Community involvement" />
            </div>
          </div>

          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">Community Involvement</p>
              <h2 className="apex-title">Building Belonging, Not Just Networks</h2>

              <p>
                What sets Eileen apart is her commitment to community over visibility.
                She mentors women at every stage of their careers, from students exploring
                logistics for the first time to executives navigating leadership transitions.
              </p>

              <p>
                She invests time in one-on-one conversations, career coaching, and advisory
                roles, often behind the scenes. Many women credit Eileen with being the first
                person who helped them see logistics not just as a job, but as a long-term
                career where their voice mattered.
              </p>
            </div>
          </div>
        </div>

        <div className="apex-after apex-after-wide">
          <div className="apex-after-col">
            <div className="apex-text">
              <p className="apex-eyebrow">Mentorship Programs</p>
              <h3 className="apex-subtitle">Structured Support That Sticks</h3>

              <p>
                Through Apex Tide and her association work, Eileen has helped launch mentoring
                programs, scholarship initiatives, and “buddy systems” that connect emerging
                professionals with experienced leaders.
              </p>

              <p>
                These are not symbolic efforts, they are structured, intentional, and measurable,
                designed to ensure women don’t get lost in the system and have real access to
                guidance, community, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
