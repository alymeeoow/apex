// Section3.jsx
import React from "react";

import Eileen2 from "../../../assets/images/home/eileen-dabrowski.jpg";

export default function Section3() {
  return (
    <section id="section-3" className="apex-section">
      <div className="apex-shell">
        {/* MAIN SPLIT */}
        <div className="apex-split">
          {/* LEFT: image */}
          <div className="apex-side">
            <div className="side-image">
  <img
    src={Eileen2}
    alt="Professional impact"
    style={{
      filter: "brightness(65%) contrast(105%)"
    }}
  />
</div>

          </div>

          {/* RIGHT: main text */}
          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">Professional Impact</p>
              <h2 className="apex-title">Redefining Leadership in Logistics</h2>

              <p>
                Eileen is the founder of Apex Tide Consulting, a firm dedicated to
                elevating leadership, communication, and operational excellence across
                transportation, logistics, and supply chain organizations.
              </p>

              <p>
                Her work spans trucking, 3PLs, warehousing, and associations, and
                consistently centers on one idea: people drive performance. By
                integrating leadership development with inclusion, her programs
                strengthen culture, reduce burnout, and build durable leadership
                pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* AFTER: starts under image, but spans FULL width so no blank space */}
        <div className="apex-after apex-after-wide">
          <div className="apex-after-col">
            <div className="apex-text">
              <p className="apex-eyebrow">Industry Leadership</p>
              <h3 className="apex-subtitle">Associations, Education &amp; Visibility</h3>

              <p>
                She is a recognized leader within industry associations, including the
                Transportation Marketing &amp; Sales Association (TMSA), where she designs
                education tracks, leadership programs, and professional development paths
                that intentionally create space for women to grow into influence, authority,
                and confidence.
              </p>

              <p>
                Eileen is also actively involved with the Transportation Intermediaries
                Association (TIA) and has served on the TIA Foundation’s Board, chaired the
                Programs Committee, spoken at Capital Ideas, and is one of TIA’s instructors.
                She is an active member of the Women in Trucking Association (WIT) and has
                spoken at their annual conference every year since 2017.
              </p>

              <p>
                This year alone, Eileen attended 15 industry shows (at her own expense) to
                stay current and better serve her clients. In addition to TMSA, TIA, and WIT,
                she has presented for IWLA and NHDA, appeared on over 20 podcasts, and has
                been featured in multiple articles focused on changing the landscape for women
                in logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
