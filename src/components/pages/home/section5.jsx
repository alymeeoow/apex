// Section5.jsx
import React from "react";
import TMSA from "../../../assets/images/home/tmsa-women.jpg";

export default function Section5() {
  return (
    <section id="section-5" className="apex-section">
      <div className="apex-shell">
        <div className="apex-split">
          <div className="apex-side">
            <div className="side-image">
              <img
                src={TMSA}
                alt="Leadership"
                style={{ filter: "brightness(80%) contrast(105%)" }}
              />
            </div>
          </div>

          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">Leadership</p>
              <h2 className="apex-title">Breaking Barriers Without Waiting for Permission</h2>

              <p>
                Eileen is a role model because she leads visibly and honestly. She speaks openly
                about the realities women face in logistics: imposter syndrome, burnout, being the
                only woman in the room, and learning to lead without compromising authenticity.
              </p>

              <p>
                She doesn’t ask women to adapt to broken systems; she helps organizations fix them.
                Her leadership style encourages women to claim space, use their voices, and pursue
                leadership without apology.
              </p>

              <p>
                By embodying confidence, clarity, and integrity, Eileen shows other women that
                leadership doesn’t require fitting a mold  it requires conviction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
