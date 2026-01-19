// Services.jsx
import React from "react";
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

function LaneCard({ icon, title, desc, items }) {
  return (
    <article className="svc-laneCard">
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
        {items.map((t) => (
          <div className="svc-lineItem" key={t}>
            <span className="svc-bullet" aria-hidden="true" />
            <span className="svc-lineText">{t}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  const speakingBg =
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=2400&q=80";
  const courseBg =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80";

  return (
    <main className="apex-services">
      {/* HERO */}
      <section className="svc-hero" aria-label="Services header">
        <div className="svc-shell">
          <div className="svc-heroInner">
            <div className="svc-heroCopy">
              <div className="svc-heroEyebrow">
            
              </div>

              <h1 className="svc-h1">Our Services</h1>

              <p className="svc-lead">
                Clear offerings, built for logistics teams. Pick a lane, mix what you need, and ship outcomes—without noise.
              </p>

              <div className="svc-heroBadges">
                <span className="svc-badge">
                  <MiniIcon name="speaking" />
                  Speaking Engagement
                </span>
                <span className="svc-badge">
                  <MiniIcon name="spark" />
                  Course Development
                </span>
                <span className="svc-badge">
                  <MiniIcon name="modal" />
                  Modal Expertise
                </span>
                <span className="svc-badge">
                  <MiniIcon name="process" />
                  Process Development
                </span>
                <span className="svc-badge">
                  <MiniIcon name="fractional" />
                  Fractional Leadership
                </span>
              </div>
            </div>

            <div className="svc-heroAside" aria-hidden="true">
              <div className="svc-metric">
                <div className="svc-metricNum">01</div>
                <div className="svc-metricLabel">Pick a lane</div>
              </div>
              <div className="svc-metric">
                <div className="svc-metricNum">02</div>
                <div className="svc-metricLabel">Mix &amp; match</div>
              </div>
              <div className="svc-metric">
                <div className="svc-metricNum">03</div>
                <div className="svc-metricLabel">Execute</div>
              </div>
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
      <section className="svc-section">
        <div className="svc-shell">
          <div className="svc-split">
            <div className="svc-photoWrap">
              <div
                className="svc-photo"
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
              <div className="svc-photoTag">
                <MiniIcon name="speaking" />
                <span>Speaking</span>
              </div>
            </div>

            <div className="svc-copy">
              <div className="svc-kicker">Speaking Engagement</div>
              <h2 className="svc-h2">High-signal sessions that don’t waste the room.</h2>
              <p className="svc-p">
                Built for logistics audiences—direct, practical, and tailored to the format. Use it to align leaders, sharpen teams, and move decisions forward.
              </p>

              {/* ✅ react-icons */}
              <div className="svc-chipList">
                <span className="svc-chip">
                  <MdWorkspaces className="svc-chipIco" aria-hidden="true" />
                  Conference
                </span>
                <span className="svc-chip">
                  <MdGroups className="svc-chipIco" aria-hidden="true" />
                  Trade Show
                </span>
                <span className="svc-chip">
                  <MdPodcasts className="svc-chipIco" aria-hidden="true" />
                  Podcast
                </span>
                <span className="svc-chip">
                  <MdMic className="svc-chipIco" aria-hidden="true" />
                  Panel
                </span>
                <span className="svc-chip">
                  <MdOutlineLiveTv className="svc-chipIco" aria-hidden="true" />
                  LinkedIn Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE BAND */}
      <section
        className="svc-courseBand"
        aria-label="Course development"
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
            <div className="svc-courseTop">
              <div>
                <div className="svc-kicker svc-kicker--light">Course Development</div>
                <h2 className="svc-h2 svc-h2--light">Curriculum that teams can run without you.</h2>
              </div>
              <p className="svc-courseLead">
                Built as modular tracks so companies can onboard, reinforce, and measure performance—without creating “training theater.”
              </p>
            </div>

            <div className="svc-courseCards">
              <article className="svc-courseCard">
                <h3 className="svc-courseTitle">Operational</h3>
                <div className="svc-chipRow">
                  <span className="svc-chip svc-chip--dark">Tracking</span>
                  <span className="svc-chip svc-chip--dark">Dispatching</span>
                  <span className="svc-chip svc-chip--dark">Load Entry</span>
                  <span className="svc-chip svc-chip--dark">Scheduling</span>
                </div>
              </article>

              <article className="svc-courseCard">
                <h3 className="svc-courseTitle">Sales</h3>
                <div className="svc-chipRow">
                  <span className="svc-chip svc-chip--dark">Carrier Sales</span>
                  <span className="svc-chip svc-chip--dark">Shipper-facing Sales</span>
                  <span className="svc-chip svc-chip--dark">Account Management</span>
                  <span className="svc-chip svc-chip--dark">Assessorial Management</span>
                </div>
              </article>

              <article className="svc-courseCard">
                <h3 className="svc-courseTitle">Leadership</h3>
                <div className="svc-chipRow">
                  <span className="svc-chip svc-chip--dark">Executive Guidance &amp; Coaching</span>
                  <span className="svc-chip svc-chip--dark">Coaching</span>
                  <span className="svc-chip svc-chip--dark">Supervision</span>
                  <span className="svc-chip svc-chip--dark">Feedback</span>
                  <span className="svc-chip svc-chip--dark">Performance</span>
                  <span className="svc-chip svc-chip--dark">KPI Development</span>
                  <span className="svc-chip svc-chip--dark">Accountability</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="svc-section svc-section--tight">
        <div className="svc-shell">
          <div className="svc-center">
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
            />

            <LaneCard
              icon="fractional"
              title="Fractional Leadership"
              desc="Add senior bandwidth without adding headcount."
              items={["Sales", "Operations", "Marketing", "GTM strategies", "Written collateral"]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
