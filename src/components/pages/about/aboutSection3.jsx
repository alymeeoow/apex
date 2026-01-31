import React, { useEffect, useRef, useState } from "react";
import EileenInWhite from "../../../assets/images/home/eileen-choose-white.jpg";

export default function AboutSection3() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const listItemsRef = useRef([]);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          
          // Animate list items with delay
          listItemsRef.current.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
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

  const goalsList = [
    "Continue to thrive in a difficult market and economy",
    "Expanding leadership and certification programs to reach a broader segment of the supply chain workforce",
    "Helping organizations operationalize AI and automation in ways that enhance, not replace, human leadership",
    "Launching additional mentorship and scholarship initiatives to support emerging leaders",
    "Continuing to elevate the role of marketing, sales, and leadership alignment as core drivers of supply chain performance",
    "Strengthening community-driven education models that make professional growth accessible, practical, and measurable",
    "Maintain existing clients and grow their businesses",
    "Continue to speak at industry conferences/trade shows",
    "Add to her team to allow increased bandwidth",
    "Publish thought leadership, organization growth white papers and collateral"
  ];

  const chipItems = [
    "Leadership", "Negotiation", "AI Adoption", "Future of Work"
  ];

  const differentiatorItems = [
    "Deep freight and logistics experience",
    "Strategic clarity across functions",
    "A human-centered approach to leadership and change"
  ];

  return (
    <section 
      id="about-section-3" 
      className="about-section" 
      ref={sectionRef}
    >
      <div className="about-shell">
        <div className="about-grid">
          {/* LEFT */}
          <aside className={`about-left1 ${inView ? 'animate-slide-left animated' : 'animate-init'}`}>
            <div className="about-leftStack">
              <div className={`about-mediaCard ${inView ? 'animate-scale-in animated' : 'animate-init'}`}>
                <div className="about-image">
                  <img
                    src={EileenInWhite}
                    alt="Industry speaking and thought leadership"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`about-infoCard ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`}>
                <div className="about-infoTitle">
                  Industry Speaking, Curriculum Development & Thought Leadership
                </div>

                <div className="about-chipGrid">
                  {chipItems.map((chip, index) => (
                    <span 
                      key={index}
                      className={`about-chip ${inView ? 'scroll-animate animated' : 'scroll-animate'}`}
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DIFFERENTIATOR */}
            <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-400' : 'scroll-animate'}`}>
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

            <div className={`about-card about-card--grid ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`}>
              <p>
                At a time when the supply chain industry is facing margin pressure,
                talent burnout, and rapid technological change, Eileen brings a rare
                combination of:
              </p>

              <ul className="about-list">
                {differentiatorItems.map((item, index) => (
                  <li 
                    key={index}
                    ref={el => listItemsRef.current[index] = el}
                    className={animatedItems[index] ? 'animated' : ''}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-rail">
              <p className={`about-eyebrow ${inView ? 'animate-fade-up animated' : 'animate-init'}`}>Influence</p>
              <h2 className={`about-title ${inView ? 'animate-fade-up animated delay-100' : 'animate-init'}`}>
                Industry Speaking, Curriculum Development &amp; Thought Leadership
              </h2>

              <p className={`${inView ? 'animate-fade-up animated delay-200' : 'animate-init'}`}>
                Eileen has continued to serve as a trusted industry voice through speaking
                engagements, curriculum development, and advisory roles with national
                organizations. Her sessions consistently rank highly for relevance and
                applicability, focusing on leadership, negotiation, AI adoption, and the
                future of work in logistics.
              </p>

              <p className={`${inView ? 'animate-fade-up animated delay-300' : 'animate-init'}`}>
                She also built and taught a 7-part Carrier Sales course for TIA and is
                currently in the midst of building a Leadership course for TIA that she
                will teach next year. Eileen was a guest on over 30 podcasts this year,
                and has challenged herself to remain a thought leader through constant
                learning.
              </p>

              {/* GOALS CONTAINER */}
              <div className={`about-card ${inView ? 'scroll-animate animated delay-400' : 'scroll-animate'}`}>
                <p>
                  What goal(s) is/are the nominee looking to achieve in the next 12 months?
                  What's next?
                </p>

                <p>
                  Over the next 12 months, Eileen's focus is on scaling impact without
                  losing depth.
                </p>

                <p>Her goals include:</p>

                <ul className="about-list">
                  {goalsList.map((item, index) => (
                    <li 
                      key={index}
                      ref={el => listItemsRef.current[goalsList.length + index] = el}
                      className={animatedItems[goalsList.length + index] ? 'animated' : ''}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT'S NEXT */}
              <div className={`about-card about-card--accent ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`}>
                <p>
                  What's next for Eileen is not simply "more." It is better systems, better
                  leaders, and a stronger industry, built intentionally and sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}