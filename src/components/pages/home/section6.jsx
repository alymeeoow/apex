// Section6.jsx
import React from "react";
import ExecSumLadies from "../../../assets/images/home/exec-sum-ladies.jpg";

export default function Section6() {
  return (
    <section id="section-6" className="apex-section">
      <div className="apex-shell">
        <div className="apex-split reverse">
          <div className="apex-side">
            <div className="side-image">
              <img
                src={ExecSumLadies}
                alt="Education"
                style={{ filter: "brightness(70%) contrast(105%)" }}
              />
            </div>
          </div>

          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">Education</p>
              <h2 className="apex-title">Opening Doors to Learning and Growth</h2>

              <p>
                Education is a cornerstone of Eileen’s impact. She designs and delivers training
                across the transportation industry, builds certification-aligned learning paths,
                and actively supports women pursuing professional development and leadership growth.
              </p>

              <p>
                Her work ensures that women aren’t just invited into logistics — they’re equipped to
                excel within it. Through Apex Tide Consulting, she advocates for continuous learning,
                skill-building, and leadership development, especially for women who may not have
                traditionally been offered those opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
