import React, { useEffect, useRef, useState } from "react";
import "../../../assets/styles/pages/services.css";

// ✅ react-icons (install: npm i react-icons)
import { MdMic, MdGroups, MdPodcasts, MdWorkspaces, MdOutlineLiveTv } from "react-icons/md";

function MiniIcon({ name }) {
  return (
    <svg className="svc-miniIco" viewBox="0 0 24 24" aria-hidden="true">
      {name === "modal" && (
        <>
          <path d="M6 16h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.75" />
          <rect x="6" y="7" width="7" height="7" rx="2" fill="currentColor" opacity="0.18" />
          <rect x="14" y="7" width="4" height="7" rx="2" fill="currentColor" opacity="0.18" />
          <circle cx="9" cy="17" r="1.6" fill="currentColor" opacity="0.9" />
          <circle cx="15.5" cy="17" r="1.6" fill="currentColor" opacity="0.7" />
        </>
      )}
      {name === "process" && (
        <>
          <rect x="6" y="5" width="12" height="14" rx="4" fill="currentColor" opacity="0.18" />
          <path d="M9 9h6M9 13h4M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </>
      )}
      {name === "fractional" && (
        <>
          <circle cx="9" cy="10" r="3" fill="currentColor" opacity="0.18" />
          <rect x="13" y="7" width="5" height="6" rx="2" fill="currentColor" opacity="0.18" />
          <path d="M6 17h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
        </>
      )}
      {name === "speaking" && (
        <>
          <rect x="4" y="6" width="16" height="10" rx="5" fill="currentColor" opacity="0.18" />
          <path d="M8 16c2.2 1.6 5.8 1.6 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.82" />
          <path d="M12 6v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </>
      )}
      {name === "spark" && (
        <>
          <path
            d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2Z"
            fill="currentColor"
            opacity="0.22"
          />
          <path
            d="M18.6 12.2l.7 2.4 2.4.7-2.4.7-.7 2.4-.7-2.4-2.4-.7 2.4-.7.7-2.4Z"
            fill="currentColor"
            opacity="0.18"
          />
        </>
      )}
    </svg>
  );
}

function LaneCard({ icon, title, desc, items, delay = 0 }) {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article 
      className={`svc-laneCard ${inView ? 'svc-animated' : ''}`}
      ref={cardRef}
      style={{ animationDelay: `${delay}ms` }}
    >
      <header className="svc-laneHead">
        <div className="svc-laneTitle">
          <span className="svc-laneIcon">
            <MiniIcon name={icon} />
          </span>
          <div className="svc-laneText">
            <h3 className="svc-laneH3">{title}</h3>
            <p className="svc-laneDesc">{desc}</p>
          </div>
        </div>

        <div className="svc-laneMeta" aria-hidden="true" />
      </header>

      <div className="svc-laneVisual" aria-hidden="true">
        <svg className="svc-laneWave" viewBox="0 0 600 140" preserveAspectRatio="none">
          <path
            d="M0,90 C70,30 140,130 210,70 C280,10 350,120 420,70 C490,20 560,110 600,55 L600,140 L0,140 Z"
            fill="currentColor"
            opacity="0.08"
          />
          <path
            d="M0,78 C70,18 140,118 210,58 C280,-2 350,108 420,58 C490,8 560,98 600,43"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.14"
          />
        </svg>
        <div className="svc-laneDots" />
      </div>

      <div className={`svc-laneGrid ${items.length > 8 ? "is-2col" : ""}`}>
        {items.map((t, index) => (
          <div 
            className={`svc-lineItem ${inView ? 'svc-animated' : ''}`}
            key={t}
            style={{ animationDelay: `${delay + 100 + index * 50}ms` }}
          >
            <span className="svc-bullet" aria-hidden="true" />
            <span className="svc-lineText">{t}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function useScrollAnimation() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, inView];
}

export default function Services() {
  const speakingBg = "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=2400&q=80";
  const courseBg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80";
  
  const [heroRef, heroInView] = useScrollAnimation();
  const [speakingRef, speakingInView] = useScrollAnimation();
  const [courseRef, courseInView] = useScrollAnimation();
  const [lanesRef, lanesInView] = useScrollAnimation();
  const [centerRef, centerInView] = useScrollAnimation();

  return (
    <main className="apex-services">
      {/* HERO */}
      <section className="svc-hero" aria-label="Services header" ref={heroRef}>
        <div className="svc-shell">
          <div className={`svc-heroInner ${heroInView ? 'svc-animated' : ''}`}>
            <div className="svc-heroCopy">
              <div className="svc-heroEyebrow"></div>

              <h1 className={`svc-h1 ${heroInView ? 'svc-animated' : ''}`} 
                  style={{ animationDelay: '100ms' }}>
                Our Services
              </h1>

              <p className={`svc-lead ${heroInView ? 'svc-animated' : ''}`}
                 style={{ animationDelay: '200ms' }}>
                Clear offerings, built for logistics teams. Pick a lane, mix what you need, and ship outcomes without noise.
              </p>

              <div className="svc-heroBadges">
                {["Speaking Engagement", "Course Development", "Modal Expertise", "Process Development", "Fractional Leadership"].map((badge, index) => (
                  <span 
                    key={badge}
                    className={`svc-badge ${heroInView ? 'svc-animated' : ''}`}
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <MiniIcon name={
                      badge.includes("Speaking") ? "speaking" :
                      badge.includes("Course") ? "spark" :
                      badge.includes("Modal") ? "modal" :
                      badge.includes("Process") ? "process" : "fractional"
                    } />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="svc-heroAside" aria-hidden="true">
              {["Pick a lane", "Mix & match", "Execute"].map((label, index) => (
                <div 
                  key={label}
                  className={`svc-metric ${heroInView ? 'svc-animated' : ''}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="svc-metricNum">0{index + 1}</div>
                  <div className="svc-metricLabel">{label}</div>
                </div>
              ))}
            </div>

            <div className="svc-heroDecor" aria-hidden="true">
              <div className="svc-orb svc-orb--a" />
              <div className="svc-orb svc-orb--b" />
              <div className="svc-gridGlow" />
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="svc-section" ref={speakingRef}>
        <div className="svc-shell">
          <div className={`svc-split ${speakingInView ? 'svc-animated' : ''}`}>
            <div className="svc-photoWrap">
              <div
                className={`svc-photo ${speakingInView ? 'svc-animated' : ''}`}
                aria-hidden="true"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      180deg,
                      rgba(8, 12, 20, 0.18) 0%,
                      rgba(8, 12, 20, 0.34) 45%,
                      rgba(8, 12, 20, 0.52) 100%
                    ),
                    url(${speakingBg})
                  `,
                }}
              />
              <div className={`svc-photoTag ${speakingInView ? 'svc-animated' : ''}`}
                   style={{ animationDelay: '200ms' }}>
                <MiniIcon name="speaking" />
                <span>Speaking</span>
              </div>
            </div>

            <div className={`svc-copy ${speakingInView ? 'svc-animated' : ''}`}
                 style={{ animationDelay: '100ms' }}>
              <div className="svc-kicker">Speaking Engagement</div>
              <h2 className="svc-h2">High-signal sessions that don't waste the room.</h2>
              <p className="svc-p">
                Built for logistics audiences direct, practical, and tailored to the format. Use it to align leaders, sharpen teams, and move decisions forward.
              </p>

              <div className="svc-chipList">
                {["Conference", "Trade Show", "Podcast", "Panel", "LinkedIn Live"].map((chip, index) => (
                  <span 
                    key={chip}
                    className={`svc-chip ${speakingInView ? 'svc-animated' : ''}`}
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    {chip === "Conference" && <MdWorkspaces className="svc-chipIco" aria-hidden="true" />}
                    {chip === "Trade Show" && <MdGroups className="svc-chipIco" aria-hidden="true" />}
                    {chip === "Podcast" && <MdPodcasts className="svc-chipIco" aria-hidden="true" />}
                    {chip === "Panel" && <MdMic className="svc-chipIco" aria-hidden="true" />}
                    {chip === "LinkedIn Live" && <MdOutlineLiveTv className="svc-chipIco" aria-hidden="true" />}
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE BAND */}
      <section
        className="svc-courseBand"
        aria-label="Course development"
        ref={courseRef}
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(8, 12, 20, 0.55) 0%,
              rgba(8, 12, 20, 0.68) 45%,
              rgba(8, 12, 20, 0.78) 100%
            ),
            url(${courseBg})
          `,
        }}
      >
        <div className="svc-shell">
          <div className="svc-courseInner">
            <div className={`svc-courseTop ${courseInView ? 'svc-animated' : ''}`}>
              <div>
                <div className="svc-kicker svc-kicker--light">Course Development</div>
                <h2 className="svc-h2 svc-h2--light">Curriculum that teams can run without you.</h2>
              </div>
              <p className="svc-courseLead">
                Built as modular tracks so companies can onboard, reinforce, and measure performance without creating "training theater."
              </p>
            </div>

            <div className="svc-courseCards">
              {[
                {
                  title: "Operational",
                  chips: ["Tracking", "Dispatching", "Load Entry", "Scheduling"]
                },
                {
                  title: "Sales",
                  chips: ["Carrier Sales", "Shipper-facing Sales", "Account Management", "Assessorial Management"]
                },
                {
                  title: "Leadership",
                  chips: ["Executive Guidance & Coaching", "Coaching", "Supervision", "Feedback", "Performance", "KPI Development", "Accountability"]
                }
              ].map((card, index) => (
                <article 
                  key={card.title}
                  className={`svc-courseCard ${courseInView ? 'svc-animated' : ''}`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <h3 className="svc-courseTitle">{card.title}</h3>
                  <div className="svc-chipRow">
                    {card.chips.map((chip, chipIndex) => (
                      <span 
                        key={chip}
                        className={`svc-chip svc-chip--dark ${courseInView ? 'svc-animated' : ''}`}
                        style={{ animationDelay: `${300 + chipIndex * 50}ms` }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="svc-section svc-section--tight" ref={lanesRef}>
        <div className="svc-shell">
          <div className={`svc-center ${centerInView ? 'svc-animated' : ''}`} ref={centerRef}>
            <h2 className="svc-h2">Explore what you need—fast.</h2>
            <p className="svc-p svc-p--center">
              Three lanes to browse: modal expertise, process development, and fractional leadership.
            </p>
          </div>

          <div className="svc-lanes">
            <LaneCard
              icon="modal"
              title="Modal Specific Solutions"
              desc="Hands-on support across modes and constraints."
              items={[
                "Truckload (TL)",
                "Less than Truckload (LTL)",
                "Intermodal (IMDL)",
                "Dray",
                "Rail",
                "Ocean",
                "Cross-border",
                "Cold Chain",
                "Dry",
                "Open Deck",
              ]}
              delay={100}
            />

            <LaneCard
              icon="process"
              title="Process Development"
              desc="Make execution repeatable with clear documentation."
              items={[
                "SOP",
                "Work Instructions",
                "Step-by-Step guides",
                "Position Descriptions",
                "Comp Plans",
                "Career Mapping & Growth",
              ]}
              delay={200}
            />

            <LaneCard
              icon="fractional"
              title="Fractional Leadership"
              desc="Add senior bandwidth without adding headcount."
              items={["Sales", "Operations", "Marketing", "GTM strategies", "Written collateral"]}
              delay={300}
            />
          </div>
        </div>
      </section>
    </main>
  );
}