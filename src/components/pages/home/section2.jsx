import React from "react";


import Exec from "../../../assets/images/home/exec-sum-group.jpg"

export default function Section2() {
  return (
    <section id="section-2" className="apex-section">
      <div className="apex-shell">
        <div className="apex-split reverse">
          <div className="apex-side">
            <div className="side-image">
              <img
                src={Exec}
                alt="Entrepreneurship journey"
              />
            </div>
          </div>

          <div className="apex-main">
            <div className="apex-text">
              <p className="apex-eyebrow">Entrepreneurship</p>
              <h2 className="apex-title">A Journey Made Stronger Together</h2>

              <p>
                Entrepreneurship is not a solo journey. It&apos;s early mornings, late nights,
                big leaps, and moments of doubt followed by moments of breakthrough, but
                it&apos;s also community, collaboration, and the extraordinary people who lift
                you up along the way.
              </p>

              <p>
                Apex Tide was built for this industry, but it was shaped by you, the
                leaders, movers, builders, and changemakers who saw potential and chose
                to invest in it.
              </p>

              <p>
                Here&apos;s to every entrepreneur carving their own path, and to every person
                who stands beside them.
              </p>

              <p>I&apos;m grateful for this community every single day, but especially today.</p>
              <p className="apex-signoff">Thank you for making my dream possible.</p>
            </div>
          </div>
        </div>

 
        <div className="apex-after apex-after-wide">
          <div className="apex-after-col">
            <div className="apex-text">
              <p className="apex-eyebrow">Recognition</p>
              <h3 className="apex-subtitle">Empowering Women into Logistics Award</h3>

             <p>
  If you had asked Eileen Dabrowski at the beginning of her career whether she would one day be recognized for empowering women in logistics, she likely would have redirected the conversation to the work itself, and to the challenges that needed solving.
</p>

<p>
  Eileen does not enter spaces to "fit in." She enters them to build ladders, remove barriers, and ensure that the next woman who walks through the door does not have to wonder whether she belongs there, because it is already clear that she does.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
