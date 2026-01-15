import React from "react";

import Eileen from "../../../assets/images/home/eileen.jpg"

export default function Section1() {
  return (
    <section id="section-1" className="apex-section">
      <div className="apex-shell">
        <div className="apex-split">
          <div className="apex-side">
            <div className="side-image">
              <img
                src={Eileen}
                alt="Team collaboration"
              />
            </div>

            <p className="apex-side-note">
              This is a post I shared on National Entrepreneur Day: Today, on National
              Entrepreneurs&apos; Day, I&apos;m taking a moment to reflect on something simple but
              powerful: Apex Tide Consulting exists because of this community.
            </p>
          </div>

          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">National Entrepreneurs’ Day</p>
              <h2 className="apex-title">Built by Community. Powered by Purpose.</h2>

              <p>
                When I stepped into entrepreneurship, I didn&apos;t do it with a safety net. I
                did it with faith, a ridiculously strong work ethic, and the belief that
                our industry deserved better leadership, better training, and better
                support. But what truly made this possible wasn&apos;t the idea, it was you.
              </p>

              <p>To everyone who:</p>

              <ul className="apex-list">
                <li>Trusted me with your teams, your projects, and your culture</li>
                <li>Referred me to a friend when you didn&apos;t have to</li>
                <li>Invited me to speak, teach, or guide your organization</li>
                <li>Shared encouragement on the days entrepreneurship felt heavy</li>
                <li>
                  Believed in the mission of helping people, process, and purpose rise
                  together
                </li>
              </ul>

              <p className="apex-signoff">Thank you. From the bottom of my heart.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
