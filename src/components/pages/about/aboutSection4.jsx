import React, { useEffect, useRef, useState } from "react";
import VAPhoto from "../../../assets/images/about/monique-dancel.jpg"; 

export default function AboutSection4() {
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

  const skillsList = [
    "Calendar Management & Scheduling",
    "Client Communication & Follow-up",
    "Document Preparation & Formatting",
    "Research & Data Organization",
    "Email Management & Prioritization",
    "Social Media Coordination",
    "Project Timeline Tracking",
    "Digital File Management"
  ];

  const adminItems = [
    "Manages calendars and coordinates meetings",
    "Handles email communications and prioritization",
    "Ensures nothing falls through the cracks"
  ];

  const clientCoordItems = [
    "Serves as first point of contact for scheduling",
    "Handles follow-ups and basic inquiries",
    "Maintains our commitment to responsive service"
  ];

  const projectSupportItems = [
    "Prepares client materials and formats reports",
    "Maintains organized digital filing systems",
    "Assists in tracking project timelines and deliverables"
  ];

  const miniStats = [
    { number: "6", label: "Months On Board" },
    { number: "40+", label: "Hours per Week" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const statItems = [
    { number: "40%", label: "More Client-Facing Time" },
    { number: "60%", label: "Reduced Admin Overhead" },
    { number: "3x", label: "Increased Efficiency" }
  ];

  return (
    <section id="about-section-4" className="about-section about-alt" ref={sectionRef}>
      <div className="about-shell">
        <div className="about-grid">
          {/* LEFT */}
          <aside className={`about-left ${inView ? 'animate-slide-left animated' : 'animate-init'}`}>
            <div className="about-leftStack">
              <div className={`about-mediaCard ${inView ? 'animate-scale-in animated' : 'animate-init'}`}>
                <div className="about-image">
                  <img
                    ref={imageRef}
                    src={VAPhoto}
                    alt="Monique Dancel, Virtual Assistant"
                    className={imageLoaded ? 'loaded' : ''}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`about-infoCard ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`}>
                <div className="about-infoTitle">Meet Monique Dancel</div>
                <div className="about-infoKicker">Virtual Assistant</div>
                
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

            {/* BIO CARD */}
            <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-400' : 'scroll-animate'}`}>
              <h3 className="about-cardTitle">About Monique</h3>
              <p>
                Monique Dancel brings exceptional organizational skills and attention to detail 
                to Apex Tide Consulting. With a background in administrative support and client 
                coordination, she ensures our operations run smoothly and efficiently.
              </p>
            </div>

            {/* SKILLS CARD */}
            <div className={`about-card ${inView ? 'scroll-animate animated delay-500' : 'scroll-animate'}`}>
              <h3 className="about-cardTitle">Key Skills & Expertise</h3>
              <ul className="about-list">
                {skillsList.map((skill, index) => (
                  <li 
                    key={index}
                    className={inView ? `animated delay-${500 + index * 100}` : ''}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* MOTTO CARD */}
            <div className={`about-card about-card--accent ${inView ? 'scroll-animate animated delay-700' : 'scroll-animate'}`} 
                 style={{ marginBottom: '-20px' }}>
              <p className="about-eyebrow">Personal Motto</p>
              <h3 className="about-cardTitle">"Amplifying Excellence, Always"</h3>
              <p>
                Monique embodies this motto by ensuring no detail is missed and every 
                client interaction is handled with precision and care.
              </p>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-rail">
              <p className={`about-eyebrow ${inView ? 'animate-fade-up animated' : 'animate-init'}`}>Virtual Assistant</p>
              <h2 className={`about-title ${inView ? 'animate-fade-up animated delay-100' : 'animate-init'}`}>
                Extending Our Capabilities with Monique
              </h2>

              <div className={`about-card about-card--accent1 ${inView ? 'scroll-animate animated delay-200' : 'scroll-animate'}`} 
                   style={{ marginTop: '20px' }}>
                <p>
                  As Apex Tide Consulting continues to grow, we've strategically expanded 
                  our team by onboarding Monique Dancel as our full-time Virtual Assistant—a 
                  move that has dramatically increased our capacity to serve clients effectively.
                </p>
              </div>

              <div className="about-statRow">
                {statItems.map((stat, index) => (
                  <div 
                    key={index}
                    className={`about-stat ${inView ? 'animate-scale-in animated' : 'animate-init'}`}
                    style={{ animationDelay: `${300 + index * 200}ms` }}
                  >
                    <div className="about-statNum">{stat.number}</div>
                    <div className="about-statLabel">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={`about-card ${inView ? 'scroll-animate animated delay-500' : 'scroll-animate'}`}>
                <h3 className="about-cardTitle">Monique's Role & Responsibilities</h3>
                
                <p>
                  Monique plays a crucial role in ensuring seamless operations and allowing 
                  Eileen to focus on high-impact client work:
                </p>

                <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-600' : 'scroll-animate'}`} 
                     style={{ margin: '24px 0' }}>
                  <h4 className="about-cardTitle">Administrative Excellence</h4>
                  <ul className="about-list">
                    {adminItems.map((item, index) => (
                      <li 
                        key={index}
                        className={inView ? `animated delay-${600 + index * 100}` : ''}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-700' : 'scroll-animate'}`} 
                     style={{ margin: '24px 0' }}>
                  <h4 className="about-cardTitle">Client Coordination</h4>
                  <ul className="about-list">
                    {clientCoordItems.map((item, index) => (
                      <li 
                        key={index}
                        className={inView ? `animated delay-${700 + index * 100}` : ''}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`about-card about-card--soft ${inView ? 'scroll-animate animated delay-800' : 'scroll-animate'}`} 
                     style={{ margin: '24px 0' }}>
                  <h4 className="about-cardTitle">Document & Project Support</h4>
                  <ul className="about-list">
                    {projectSupportItems.map((item, index) => (
                      <li 
                        key={index}
                        className={inView ? `animated delay-${800 + index * 100}` : ''}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`about-quote ${inView ? 'scroll-animate animated delay-900' : 'scroll-animate'}`} 
                   style={{ marginTop: '50px' }}>
                "Monique isn't just support staff—she's an integral part of our client 
                service team. She ensures we can maintain our personal touch while scaling 
                our impact across the supply chain industry."
                <div style={{ marginTop: '30px', fontSize: '14px', fontWeight: '600' }}>
                  — Eileen Dabrowski, Founder & Principal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}