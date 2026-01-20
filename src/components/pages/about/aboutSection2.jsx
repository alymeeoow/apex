import React from "react";
import  AboutSection2Image from "../../../assets/images/home/community-building.jpg";

export default function AboutSection2() {
  return (
    <section id="about-section-2" className="about-section about-alt">
      <div className="about-shell">
        <div className="about-grid">
          {/* LEFT */}
          <aside className="about-left">
            <div className="about-leftStack">
              <div className="about-mediaCard">
                <div className="about-image">
                  <img
                    src={AboutSection2Image}
                    alt="Community leadership"
                  />
                </div>
              </div>

              <div className="about-infoCard">

                <div className="about-infoTitle">Community Leadership</div>

                <div className="about-miniStats">

                  <div className="about-miniStat">
    <div className="about-miniNum">10+</div>
    <div className="about-miniLabel">Community initiatives led</div>
  </div>
                  <div className="about-miniStat">
    <div className="about-miniNum">100+</div>
    <div className="about-miniLabel">Professionals impacted</div>
  </div>


                 

                 <div className="about-miniStat">
  <div className="about-miniNum">1</div>
  <div className="about-miniLabel">Virtual Assistant onboarded</div>
</div>

                </div>
              </div>
            </div>
              <div className="about-card about-card--soft">
                <h3 className="about-cardTitle">These engagements helped companies:</h3>
                <ul className="about-list">
                  <li>Improve cross-functional communication</li>
                  <li>Clarify accountability and performance metrics</li>
                  <li>Reduce burnout through workflow redesign</li>
                  <li>Increase revenue efficiency without increasing headcount</li>
                </ul>
              </div>

              <div className="about-card about-card--accent3">

              <p>
                Eileen has also onboarded a full-time Virtual Assistant—an expansion she had not anticipated when launching earlier this year.
              </p>

              </div>
          </aside>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-rail">

              <h2 className="about-title">
                Community Building & Inclusive Leadership
              </h2>
               
               <div className="about-card about-card--accent2">
              <p>
                Eileen is widely recognized as a connector and advocate within the supply
                chain community. She has championed mentorship programs, scholarship
                initiatives, and inclusive leadership platforms—particularly for women and
                emerging leaders in logistics.
              </p>
              </div>

              <div className="about-statRow">
                <div className="about-stat">
                  <div className="about-statNum">7</div>
                  <div className="about-statLabel">Industry conferences spoken at in 2025</div>
                </div>

                <div className="about-stat">
                  <div className="about-statNum">3</div>
                  <div className="about-statLabel">New mentees this year</div>
                </div>

                <div className="about-stat">
                  <div className="about-statNum">10</div>
                  <div className="about-statLabel">Months since Apex Tide launched</div>
                </div>
              </div>
               
               <div className="about-card about-card--accent1">
              <p>
                The result of Eileen’s leadership is not just stronger programs or better
                companies—it is a more prepared, more confident, and more connected supply
                chain workforce.
              </p>
              </div>

              <div className="about-card">
                <h3 className="about-cardTitle">Apex Tide Consulting Momentum</h3>

                <ul className="about-list">
                  <li>5 recurring monthly clients since inception</li>
                  <li>3 long-term technology-focused clients</li>
                  <li>1 active project-based training engagement</li>
                  <li>4 additional clients in the pipeline with no prospecting</li>
                </ul>

                <p>
                  Apex Tide has expanded beyond its original goals by partnering with
                  transportation and logistics organizations to deliver leadership,
                  go-to-market, and alignment programs.
                </p>
              </div>

            

            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
