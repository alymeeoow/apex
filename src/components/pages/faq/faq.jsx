// FAQ.jsx
import React, { useMemo, useState } from "react";
import "../../../assets/styles/pages/faq.css";
import { MdArrowOutward } from "react-icons/md";

export default function FAQ() {
  const faqs = useMemo(
    () => [
      {
        q: "Who do you typically work with?",
        a: (
          <>
            <p>We work with:</p>
            <ul>
              <li>
                Transportation and logistics companies (3PLs, brokerages,
                asset-based carriers)
              </li>
              <li>Shippers and supply-chain organizations</li>
              <li>Industry associations and professional organizations</li>
              <li>
                Technology and service providers supporting the logistics
                ecosystem
              </li>
            </ul>
            <p>
              Most of our clients are growth-minded organizations that have
              outgrown informal processes and need structure without
              bureaucracy.
            </p>
          </>
        ),
      },
      {
        q: "What makes Apex Tide different from other consultants?",
        a: (
          <>
            <p>We don’t deliver generic frameworks or theory decks.</p>
            <p>Our work is:</p>
            <ul>
              <li>Industry-specific (transportation and logistics is our home)</li>
              <li>Execution-focused (clear deliverables, not abstract advice)</li>
              <li>People-centered (we design systems teams actually use)</li>
              <li>Metric-driven (performance, ROI, and accountability matter)</li>
            </ul>
            <p>
              We blend strategic thinking with real-world operational
              experience, so what we build actually works in day-to-day
              environments.
            </p>
          </>
        ),
      },
      {
        q: "What types of projects do you take on?",
        a: (
          <>
            <p>Common engagements include:</p>
            <ul>
              <li>Go-to-market and sales strategy development</li>
              <li>Marketing strategy, positioning, and content frameworks</li>
              <li>
                Learning &amp; development programs and training architecture
              </li>
              <li>
                Organizational structure, role clarity, and performance metrics
              </li>
              <li>Change management and operational process design</li>
              <li>
                Executive facilitation, workshops, and industry education
              </li>
            </ul>
            <p>
              Projects range from short-term strategic sprints to longer-term
              advisory partnerships.
            </p>
          </>
        ),
      },
      {
        q: "Is Apex Tide a marketing firm, a sales consultancy, or an operations consultancy?",
        a: (
          <>
            <p>Yes, and intentionally so.</p>
            <p>
              Transportation organizations don’t operate in silos, and neither
              do we. Apex Tide works at the intersection of:
            </p>
            <ul>
              <li>Sales</li>
              <li>Marketing</li>
              <li>Operations</li>
              <li>Leadership</li>
            </ul>
            <p>
              Our role is often to connect the dots between teams so strategies
              don’t break down during execution.
            </p>
          </>
        ),
      },
      {
        q: "Do you work with companies of a certain size?",
        a: (
          <>
            <p>We don’t have a strict size requirement.</p>
            <p>We typically work with:</p>
            <ul>
              <li>Small to mid-sized organizations preparing to scale</li>
              <li>Mid-market companies refining structure and performance</li>
              <li>
                Industry organizations building education, programs, or member
                value
              </li>
            </ul>
            <p>
              What matters most is readiness for clarity, accountability, and
              follow-through.
            </p>
          </>
        ),
      },
      {
        q: "What does a typical engagement look like?",
        a: (
          <>
            <p>Every engagement starts with discovery to understand:</p>
            <ul>
              <li>Business goals</li>
              <li>Current challenges</li>
              <li>Team dynamics</li>
              <li>Market conditions</li>
            </ul>
            <p>
              From there, we design a clear scope with defined outcomes,
              deliverables, and timelines. Clients always know what’s being
              built, why it matters, and how success will be measured.
            </p>
          </>
        ),
      },
      {
        q: "How do you measure success?",
        a: (
          <>
            <p>
              Success looks different for every client, but typically includes:
            </p>
            <ul>
              <li>Clearer roles and responsibilities</li>
              <li>Improved cross-functional alignment</li>
              <li>Stronger execution and follow-through</li>
              <li>Better use of time, tools, and talent</li>
              <li>
                Measurable performance improvements tied to business goals
              </li>
            </ul>
            <p>We believe clarity is a leading indicator of performance</p>
          </>
        ),
      },
      {
        q: "Do you offer training or just strategy?",
        a: (
          <>
            <p>Both.</p>
            <p>We design strategy and help teams adopt it through:</p>
            <ul>
              <li>Training programs</li>
              <li>Workshops</li>
              <li>Playbooks and toolkits</li>
              <li>Ongoing coaching and support</li>
            </ul>
            <p>
              Strategy without enablement doesn’t stick, and we don’t leave
              clients with shelfware.
            </p>
          </>
        ),
      },
      {
        q: "What industries do you specialize in?",
        a: (
          <>
            <p>Our core focus is:</p>
            <ul>
              <li>Transportation</li>
              <li>Logistics</li>
              <li>Supply chain</li>
              <li>Freight, brokerage, and logistics technology</li>
            </ul>
            <p>
              This specialization allows us to move faster, ask better
              questions, and build solutions that reflect industry realities,
              not assumptions.
            </p>
          </>
        ),
      },
      {
        q: "Are you available for speaking, workshops, or industry events?",
        a: (
          <>
            <p>Yes. Apex Tide regularly supports:</p>
            <ul>
              <li>Executive workshops</li>
              <li>Team offsites</li>
              <li>Sales and marketing training sessions</li>
              <li>Industry conferences and association programs</li>
            </ul>
            <p>
              We’re known for sessions that are practical, engaging, and
              immediately applicable.
            </p>
          </>
        ),
      },
      {
        q: "What is it like to work with you?",
        a: (
          <>
            <p>Clients often describe working with Apex Tide as:</p>
            <ul>
              <li>Structured but flexible</li>
              <li>Honest and direct</li>
              <li>Collaborative and practical</li>
              <li>Calm in complexity</li>
              <li>Focused on long-term impact, not quick fixes</li>
            </ul>
            <p>
              We challenge assumptions when needed, and always with the goal of
              strengthening the outcome
            </p>
          </>
        ),
      },
      {
        q: "How do we know if Apex Tide is the right fit?",
        a: (
          <>
            <p>If you’re:</p>
            <ul>
              <li>Tired of reactive decision-making</li>
              <li>Looking for clarity, structure, and momentum</li>
              <li>Ready to move from ideas to execution</li>
              <li>Interested in building systems that actually scale</li>
            </ul>
            <p>…then Apex Tide is likely a strong fit.</p>
          </>
        ),
      },
      {
        q: "How do we get started?",
        a: (
          <>
            <p>The best first step is a conversation.</p>
            <p>
              We’ll talk through your goals, challenges, and priorities and
              determine whether there’s a meaningful way we can support your
              business.
            </p>
          </>
        ),
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="apex-faq">
      {/* HERO */}
      <section className="fq-hero" aria-label="FAQ header">
        <div className="fq-shell">
          <div className="fq-heroCard">
            <div className="fq-heroCopy">
              <div className="fq-eyebrow">
                <span className="fq-dot" aria-hidden="true" />
                FAQ
              </div>
              <h1 className="fq-h1">Answers, clarity, and what to expect</h1>
              <p className="fq-lead">
                Practical details about how Apex Tide works with transportation,
                logistics, and supply-chain organizations.
              </p>
            </div>

            <div className="fq-heroAside" aria-hidden="true">
              <div className="fq-miniStat">
                <div className="fq-miniNum">13</div>
                <div className="fq-miniLabel">Questions</div>
              </div>
              <div className="fq-miniStat">
                <div className="fq-miniNum">01</div>
                <div className="fq-miniLabel">Page</div>
              </div>
            </div>

            <div className="fq-heroDecor" aria-hidden="true">
              <div className="fq-orb fq-orb--a" />
              <div className="fq-orb fq-orb--b" />
              <div className="fq-grid" />
            </div>
          </div>
        </div>
      </section>


      <section className="fq-section" aria-label="Frequently asked questions">
        <div className="fq-shell">
          <div className="fq-wrap">
            {faqs.map((item, idx) => {
              const open = idx === openIndex;
              const btnId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <article key={idx} className={`fq-item ${open ? "is-open" : ""}`}>
                  <button
                    id={btnId}
                    className="fq-q"
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : idx)}
                  >
                    <span className="fq-qText">{item.q}</span>
                    <span className="fq-icon" aria-hidden="true">
                      <span className="fq-plus" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="fq-a"
                  >
                    <div className="fq-aInner">{item.a}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="fq-strip" aria-label="Quick note">
        <div className="fq-shell">
          <div className="fq-stripInner">
            <p className="fq-stripText">
              If you have a question that isn’t answered here, reach out and we’ll point you in the right direction.
            </p>
            <a className="fq-stripLink" href="/contact">
              Contact <MdArrowOutward className="fq-stripIco" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
