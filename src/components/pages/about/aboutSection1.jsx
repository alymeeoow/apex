import React, { useEffect, useRef, useState } from "react";
import AboutSection1Image from "../../../assets/images/home/snapshot-work.jpg";

export default function AboutSection1() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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

  useEffect(() => {
    if (imageRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section 
      id="about-section-1" 
      className="about-section" 
      ref={sectionRef}
    >
      <div className="about-shell">
        <div className="about-grid">
          <aside className={`about-left ${inView ? 'animate-slide-left animated' : 'animate-init'}`}>
            <div className="about-leftFlow">
              <div className="about-leftStack">
                <div className={`about-mediaCard ${inView ? 'animate-scale-in animated' : 'animate-init'}`}>
                  <div className="about-image">
                    <img 
                      ref={imageRef}
                      src={AboutSection1Image} 
                      alt="Leadership and collaboration" 
                      className={imageLoaded ? 'loaded' : ''}
                      onLoad={handleImageLoad}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={`about-infoCard ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`}>
                  <div className="about-infoTitle">A Snapshot of the Work</div>

                  <div className="about-chipGrid">
                    <span className={`about-chip ${inView ? 'scroll-animate animated delay-300' : 'scroll-animate'}`}>Education Programs</span>
                    <span className={`about-chip ${inView ? 'scroll-animate animated delay-400' : 'scroll-animate'}`}>Executive Advisory</span>
                    <span className={`about-chip ${inView ? 'scroll-animate animated delay-500' : 'scroll-animate'}`}>Workforce Development</span>
                    <span className={`about-chip ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`}>Strategy + Alignment</span>
                  </div>
                </div>
              </div>

              <p className={`about-quote ${inView ? 'scroll-animate animated delay-300' : 'scroll-animate'}`}>
                I watch Eileen pivot every day as her clients' needs shift. Like the
                transportation and logistics industry, she ebbs and flows to ensure she
                does everything in her power to help clients succeed. She reads every
                morning and every night, constantly challenging herself to learn, emulate,
                and grow.
              </p>
            </div>
          </aside>

          <div className="about-right">
            <div className="about-rail">
              <p className={`about-eyebrow ${inView ? 'animate-fade-up animated' : 'animate-init'}`}>snapshot</p>
              <h2 className={`about-title ${inView ? 'animate-fade-up animated delay-100' : 'animate-init'}`}>
                A Snapshot of the Work
              </h2>

              <p className={`about-lead ${inView ? 'animate-fade-up animated delay-200' : 'animate-init'}`}>
                Here is a snip from another submission about me:
              </p>

              <div className={`about-card ${inView ? 'scroll-animate animated delay-300' : 'scroll-animate'}`}>
                <h3 className="about-cardTitle">Her day-to-day responsibilities include:</h3>

                <ul className="about-list">
                  {[
                    "Designing and executing multi-track education programs for sales leaders, marketing leaders, practitioners, and company executives",
                    "Advising logistics organizations on go-to-market strategy, organizational design, training frameworks, and change management",
                    "Leading curriculum development for industry education partners, including TIA, Women in Trucking, IWLA, and enterprise logistics firms",
                    "Consulting with executive leadership teams to solve challenges related to revenue growth, team performance, burnout, and alignment",
                    "Facilitating workshops, keynotes, and executive roundtables on leadership, negotiation, AI adoption, and modern supply chain strategy",
                    "Building community-driven initiatives that promote mentorship, inclusion, and long-term talent development"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={inView ? `animated delay-${300 + index * 100}` : ''}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`about-card about-card--accent1 ${inView ? 'scroll-animate animated delay-700' : 'scroll-animate'}`}>
                <p>
                  At every level, Eileen's work is focused on one core mission: helping supply
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