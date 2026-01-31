// Empowerment.jsx
import React, { useEffect, useRef } from "react";
import "../../../assets/styles/pages/empowerment.css";
import { MdArrowOutward } from "react-icons/md";
import EmpowermentHero from "./empowermentHero";

import EmpowermentImg1 from "../../../assets/images/home/empowerment.jpg";
import EmpowermentImg2 from "../../../assets/images/home/eileen-choose.jpg";

export default function Empowerment() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Trigger when 15% of element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add("scroll-animate");
          
          // Add animation to child elements with delay
          const cards = entry.target.querySelectorAll(".empower-card, .empower-mediaCard, .empower-infoCard");
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Add ref to each section
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="apex-empower">
      <EmpowermentHero />

      {/* SECTION 1 */}
      <section 
        className="empower-section" 
        id="empowerment-section-1"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT (sticky rail) */}
            <aside className="empower-left">
              <div className="empower-leftFlow">
                <div className="empower-leftStack">
                  <div className="empower-mediaCard">
                    <div className="empower-image">
                      <img src={EmpowermentImg1} alt="Women in logistics leadership" />
                    </div>
                  </div>

                  <div className="empower-infoCard">
                    <div className="empower-infoTitle">How Eileen Empowers Women</div>

                    <div className="empower-chipGrid">
                      <span className="empower-chip">Leadership Education</span>
                      <span className="empower-chip">Advancement Systems</span>
                      <span className="empower-chip">Mentorship + Sponsorship</span>
                      <span className="empower-chip">Confidence + Communication</span>
                      <span className="empower-chip">Normalization</span>
                    </div>
                  </div>
                </div>

                <p className="empower-quote">
                  She empowers not by telling women they can lead, but by giving them the tools,
                  support, and belief to do so.
                </p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow">Empowerment</div>

                <h2 className="empower-title">How Eileen Has Empowered Women in Logistics</h2>

                <p className="empower-lead">
                  Eileen empowers women by building real-world education, systems, and support that
                  help women enter, stay, and rise in transportation.
                </p>

                <div className="empower-card">
                  <h3 className="empower-cardTitle">Eileen empowers women by:</h3>

                  <ul className="empower-list">
                    <li>Making leadership education accessible and relevant</li>
                    <li>Creating systems that support advancement—not just entry</li>
                    <li>Mentoring, sponsoring, and advocating for women consistently</li>
                    <li>Teaching communication, confidence, and strategic thinking</li>
                    <li>Normalizing women's leadership in transportation spaces</li>
                  </ul>
                </div>

                <div className="empower-card empower-card--accent">
                  <p>
                    Eileen Dabrowski empowers women in logistics not by standing in front of them,
                    but by standing beside them, opening doors, and making sure no one walks the
                    road alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section 
        className="empower-section empower-alt" 
        id="empowerment-section-2"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT */}
            <aside className="empower-left">
              <div className="empower-leftStack">
                <div className="empower-mediaCard">
                  <div className="empower-image">
                    <img src={EmpowermentImg2} alt="Industry leadership and education" />
                  </div>
                </div>

                <div className="empower-infoCard">
                  <div className="empower-infoTitle">Amplifying the Impact</div>

                  <div className="empower-miniStats">
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">01</div>
                      <div className="empower-miniLabel">Platform, not a trophy</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">02</div>
                      <div className="empower-miniLabel">Visibility + pathways</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">03</div>
                      <div className="empower-miniLabel">Scholarship + mentorship</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="empower-card empower-card--accent1">
                <p>That is leadership.</p>
                <p>That is impact.</p>
                <p>And that is why she deserves the Empowering Women into Logistics Award.</p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow">CHOSEN</div>
                <h2 className="empower-title">If Chosen: Amplifying the Impact</h2>

                <div className="empower-card empower-card--soft">
                  <p>
                    If selected for the Empowering Women into Logistics Award, (after she gets done
                    being mad at me, because she gets shy/weird about recognition) Eileen would use
                    the recognition as a platform, not a trophy.
                  </p>

                  <p>
                    She would amplify visibility for women leaders, expand scholarship and
                    mentorship programs, and continue building education pathways that help women
                    enter, stay, and rise in logistics. This award would not mark a finish line —
                    it would fuel the next phase of impact.
                  </p>
                </div>

                <div className="empower-card">
                  <h3 className="empower-cardTitle">Accolades &amp; Industry Relevance</h3>

                  <p>
                    Eileen is widely respected as a transportation strategist, educator, and
                    leadership voice. Her work is deeply embedded in the trucking and logistics
                    industry, and her influence continues to grow as more women step into
                    leadership roles because someone like her showed them it was possible.
                  </p>

                  <p>
                    I know I am biased, as I love her and am married to her, but there is no one
                    more deserving. She launched and built a woman-owned business in arguably one
                    of the most difficult markets and economies and has crushed it and far-exceeded
                    expectations. Because she lives by her mantra, "be a good human" and she is the
                    best human I know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}