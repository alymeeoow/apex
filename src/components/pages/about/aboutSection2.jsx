import React, { useEffect, useRef, useState } from "react";
import AboutSection2Image from "../../../assets/images/home/community-building.jpg";

export default function AboutSection2() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const statsRef = useRef([]);
  const [animatedStats, setAnimatedStats] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          
          // Animate stats with delay
          statsRef.current.forEach((stat, index) => {
            if (stat) {
              setTimeout(() => {
                setAnimatedStats(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 300);
            }
          });
          
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statItems = [
    { number: 7, label: "Industry conferences spoken at in 2025" },
    { number: 3, label: "New mentees this year" },
    { number: 10, label: "Months since Apex Tide launched" }
  ];

  const miniStats = [
    { number: "10+", label: "Community initiatives led" },
    { number: "100+", label: "Professionals impacted" },
    { number: "1", label: "Virtual Assistant onboarded" }
  ];

  return (
    <section 
      id="about-section-2" 
      className="about-section about-alt" 
      ref={sectionRef}
    >
      <div className="about-shell">
        <div className="about-grid">
          {/* LEFT */}
          <aside className={`about-left ${inView ? 'animate-slide-left animated' : 'animate-init'}`}>
            <div className="about-leftStack">
              <div className={`about-mediaCard ${inView ? 'animate-scale-in animated' : 'animate-init'}`}>
                <div className="about-image">
                  <img
                    src={AboutSection2Image}
                    alt="Community leadership"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`about-infoCard ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`}>
                <div className="about-infoTitle">Community Leadership</div>

                <div className="about-miniStats">
                  {miniStats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`about-miniStat ${inView ? 'scroll-animate animated' : 'scroll-animate'}`}
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="about-miniNum">{stat.number}</div>
                      <div className="about-miniLabel">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-400' : 'scroll-animate'}`}>
              <h3 className="about-cardTitle">These engagements helped companies:</h3>
              <ul className="about-list">
                {[
                  "Improve cross-functional communication",
                  "Clarify accountability and performance metrics",
                  "Reduce burnout through workflow redesign",
                  "Increase revenue efficiency without increasing headcount"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={inView ? `animated delay-${400 + index * 100}` : ''}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`about-card about-card--accent3 ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`}>
              <p>
                Eileen has also onboarded a full-time Virtual Assistant—an expansion she had not anticipated when launching earlier this year.
              </p>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-rail">
              <p className={`about-eyebrow ${inView ? 'animate-fade-up animated' : 'animate-init'}`}>Unity</p>
              <h2 className={`about-title ${inView ? 'animate-fade-up animated delay-100' : 'animate-init'}`}>
                Community Building & Inclusive Leadership
              </h2>

              <div className={`about-card about-card--accent2 ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`}>
                <p>
                  Eileen is widely recognized as a connector and advocate within the supply
                  chain community. She has championed mentorship programs, scholarship
                  initiatives, and inclusive leadership platforms—particularly for women and
                  emerging leaders in logistics.
                </p>
              </div>

              <div className="about-statRow">
                {statItems.map((stat, index) => (
                  <div 
                    key={index}
                    ref={el => statsRef.current[index] = el}
                    className={`about-stat ${animatedStats[index] ? 'animate-scale-in animated' : 'animate-init'}`}
                  >
                    <div className="about-statNum">{stat.number}</div>
                    <div className="about-statLabel">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={`about-card about-card--accent1 ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`}>
                <p>
                  The result of Eileen's leadership is not just stronger programs or better
                  companies—it is a more prepared, more confident, and more connected supply
                  chain workforce.
                </p>
              </div>

              <div className={`about-card ${inView ? 'scroll-animate animated delay-700' : 'scroll-animate'}`}>
                <h3 className="about-cardTitle">Apex Tide Consulting Momentum</h3>

                <ul className="about-list">
                  {[
                    "5 recurring monthly clients since inception",
                    "3 long-term technology-focused clients",
                    "1 active project-based training engagement",
                    "4 additional clients in the pipeline with no prospecting"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={inView ? `animated delay-${700 + index * 100}` : ''}
                    >
                      {item}
                    </li>
                  ))}
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