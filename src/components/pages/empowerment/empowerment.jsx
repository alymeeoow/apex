// Empowerment.jsx
import React, { useEffect, useRef } from "react";
import "../../../assets/styles/pages/empowerment.css";
import { MdArrowOutward } from "react-icons/md";
import EmpowermentHero from "./empowermentHero";

import EmpowermentImg1 from "../../../assets/images/home/empowerment.jpg";
import EmpowermentImg2 from "../../../assets/images/home/eileen-choose.jpg";
import EmpowermentImgChildren from "../../../assets/images/home/move-for-hunger.jpg";

import StratosphereJumpImg from "../../../assets/images/home/stratosphere-jump.jpg";

export default function Empowerment() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, 
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add("scroll-animate");
          
          // Add animation to child elements with delay
          const cards = entry.target.querySelectorAll(".empower-card, .empower-mediaCard, .empower-infoCard");
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Add ref to each section
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="apex-empower">
      <EmpowermentHero />

      {/* NEW SECTION - MOVE FOR HUNGER */}
      <section 
        className="empower-section" 
        id="empowerment-section-0"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT */}
            <aside className="empower-left">
              <div className="empower-leftStack">
                <div className="empower-mediaCard empower-mediaCard--highlight">
                  <div className="empower-image">
                    <img src={StratosphereJumpImg} alt="Eileen preparing for Stratosphere jump to support Move For Hunger" />
                  </div>
                  <div className="empower-mediaLabel">
                    
                  </div>
                </div>

                <div className="empower-infoCard">
                  <div className="empower-infoTitle">Campaign Goal</div>
                  
                  <div className="empower-goalMeter">
                    <div className="empower-goalTarget">
                      <div className="empower-goalNumber">5,000</div>
                      <div className="empower-goalLabel">Meals to Provide</div>
                    </div>
                    
                    <div className="empower-goalProgress">
                      <div className="empower-progressBar">
                        <div className="empower-progressFill" style={{ width: '100%' }}></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

           
                <p className="empower-quote"  style={{ marginTop:'60px' }}>
                  "Our industry moves food, goods, and essentials around the world every day. 
                  Supporting this cause feels like a responsibility, not just an opportunity."
                </p>
       
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow empower-eyebrow--urgent">TAKING ACTION</div>
                
                <h2 className="empower-title">A Leap for Change: Supporting Move For Hunger</h2>

                <div className="empower-card empower-card--highlight">
                  <p className="empower-lead">
                    Far too many people go to bed hungry every single day, and that's something I can't ignore.
                  </p>
                  
                  <p>
                    This year, I'm supporting Move For Hunger in a very literal way. At Manifest: 
                    The Future of Supply Chain & Logistics in Las Vegas, I'll be jumping off the 
                    Stratosphere to help raise awareness and funds for families facing food insecurity.
                  </p>
                  
                  <p>
                    My goal is to raise enough to provide 5,000 meals, and every single donation, 
                    no matter the size, makes a real impact.
                  </p>
                </div>

                   <div className="empower-card empower-card--cta">
                  <h3 className="empower-cardTitle">Join the Movement</h3>
                  
                  <p>
                    If you're able to give, cheer me on, or simply share this message, 
                    I would be incredibly grateful. Together, we can turn a bold leap 
                    into meaningful change.
                  </p>
                  
                  <div className="empower-actions">
                    <a 
                      href="https://donate.moveforhunger.org/fundraiser/6921838" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="empower-button empower-button--primary"
                    >
                      <span>Support the Cause</span>
                      <MdArrowOutward className="empower-buttonIcon" />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/posts/eileen-dabrowski-a090a7141_far-too-many-people-go-to-bed-hungry-every-activity-7423753985641050112-_v-I" 
                      className="empower-button empower-button--secondary"
                             target="_blank" 

                          rel="noopener noreferrer"
                    >
                      <span>Share & Spread Awareness</span>
                    </a>
                  </div>
                  
                 
                </div>


           
               
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* SECTION 1 - GIVING BACK (ORIGINAL, NOW SECTION 1) */}
      <section 
        className="empower-section empower-alt" 
        id="empowerment-section-1"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT */}
            <aside className="empower-left">
              <div className="empower-leftStack">
                <div className="empower-mediaCard">
                  <div className="empower-image">
                    <img src={EmpowermentImgChildren} alt="Community support and giving back" />
                  </div>
                </div>

                <div className="empower-infoCard">
                  <div className="empower-infoTitle">Community Impact</div>

                  <div className="empower-miniStats">
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">01</div>
                      <div className="empower-miniLabel">Child Nutrition</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">02</div>
                      <div className="empower-miniLabel">Local Schools</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">03</div>
                      <div className="empower-miniLabel">Family Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="empower-quote">
                "Well-fed children become focused students, and focused students become future leaders."
              </p>

              <div className="empower-card">
                <h3 className="empower-cardTitle">How Eileen's Values Inspire This Work</h3>
                <p>
                  Eileen believes that true leadership means lifting up entire communities. 
                  By supporting children's nutrition, we're investing in the future of our 
                  community. Well-nourished children can focus on their education and build 
                  brighter futures.
                </p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow">CHARITY</div>
                
                <h2 className="empower-title">Supporting Children in Our Community</h2>

                <div className="empower-card empower-card--soft">
                  <p>
                    In honor of Eileen's commitment to community support, we're highlighting a campaign 
                    where every contribution directly supports children's nutrition in our community.
                  </p>
                </div>

                <div className="empower-card">
                  <h3 className="empower-cardTitle">Addressing Community Needs</h3>
                  
                  <p>
                    Many children face food insecurity in our communities. Working parents often 
                    struggle to ensure consistent access to nutritious meals for their children 
                    while balancing demanding careers.
                  </p>

                  <ul className="empower-list">
                    <li>Providing meals during weekends when school programs are unavailable</li>
                    <li>Supporting nutrition programs during summer breaks</li>
                    <li>Helping families maintain consistent access to healthy food</li>
                    <li>Building community support networks for those in need</li>
                  </ul>
                </div>

                <div className="empower-card empower-card--accent">
                  <h3 className="empower-cardTitle">Making a Difference</h3>
                  
                  <p>
                    Through partnerships with local organizations, we ensure that support reaches 
                    those who need it most. Every contribution helps create positive change in 
                    our community.
                  </p>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - EMPOWERMENT */}
      <section 
        className="empower-section" 
        id="empowerment-section-2"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT (sticky rail) */}
            <aside className="empower-left">
              <div className="empower-leftFlow">
                <div className="empower-leftStack">
                  <div className="empower-mediaCard">
                    <div className="empower-image">
                      <img src={EmpowermentImg1} alt="Women in leadership" />
                    </div>
                  </div>

                  <div className="empower-infoCard">
                    <div className="empower-infoTitle">How Eileen Empowers Women</div>

                    <div className="empower-chipGrid">
                      <span className="empower-chip">Leadership Education</span>
                      <span className="empower-chip">Advancement Systems</span>
                      <span className="empower-chip">Mentorship + Sponsorship</span>
                      <span className="empower-chip">Confidence + Communication</span>
                      <span className="empower-chip">Normalization</span>
                    </div>
                  </div>
                </div>

                <p className="empower-quote">
                  She empowers not by telling women they can lead, but by giving them the tools,
                  support, and belief to do so.
                </p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow">Empowerment</div>

                <h2 className="empower-title">How Eileen Has Empowered Women</h2>

                <p className="empower-lead">
                  Eileen empowers women by building real-world education, systems, and support that
                  help women enter, stay, and rise in their careers.
                </p>

                <div className="empower-card">
                  <h3 className="empower-cardTitle">Eileen empowers women by:</h3>

                  <ul className="empower-list">
                    <li>Making leadership education accessible and relevant</li>
                    <li>Creating systems that support advancement, not just entry</li>
                    <li>Mentoring, sponsoring, and advocating for women consistently</li>
                    <li>Teaching communication, confidence, and strategic thinking</li>
                    <li>Normalizing women's leadership in professional spaces</li>
                  </ul>
                </div>

                <div className="empower-card empower-card--accent"
                
              style={{ marginTop:'110px' }}>
                  <p>
                    Eileen Dabrowski empowers women not by standing in front of them,
                    but by standing beside them, opening doors, and making sure no one walks the
                    road alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - CHOSEN */}
      <section 
        className="empower-section empower-alt" 
        id="empowerment-section-3"
        ref={addToRefs}
      >
        <div className="empower-shell">
          <div className="empower-grid">
            {/* LEFT */}
            <aside className="empower-left">
              <div className="empower-leftStack">
                <div className="empower-mediaCard">
                  <div className="empower-image">
                    <img src={EmpowermentImg2} alt="Industry leadership and education" />
                  </div>
                </div>

                <div className="empower-infoCard">
                  <div className="empower-infoTitle">Amplifying the Impact</div>

                  <div className="empower-miniStats">
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">01</div>
                      <div className="empower-miniLabel">Platform, not a trophy</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">02</div>
                      <div className="empower-miniLabel">Visibility + pathways</div>
                    </div>
                    <div className="empower-miniStat">
                      <div className="empower-miniNum">03</div>
                      <div className="empower-miniLabel">Scholarship + mentorship</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="empower-card empower-card--accent1">
                <p >That is  <span className="bold">leadership</span>.</p>
                <p >That is   <span className="bold">impact</span>.</p>
                <p>And that is why she deserves recognition for <span className="bold">empowering women</span>.</p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="empower-right">
              <div className="empower-rail">
                <div className="empower-eyebrow">CHOSEN</div>
                <h2 className="empower-title">If Chosen: Amplifying the Impact</h2>

                <div className="empower-card empower-card--soft">
                  <p>
                    If selected for recognition, (after she gets done
                    being mad at me, because she gets shy/weird about recognition) Eileen would use
                    the recognition as a platform, not a trophy.
                  </p>

                  <p>
                    She would amplify visibility for women leaders, expand scholarship and
                    mentorship programs, and continue building education pathways that help women
                    enter, stay, and rise in their careers. This recognition would not mark a finish line 
                    it would fuel the next phase of impact.
                  </p>
                </div>

                <div className="empower-card">
                  <h3 className="empower-cardTitle">Accolades &amp; Professional Relevance</h3>

                  <p>
Eileen is widely respected as a strategist, educator, and leadership voice. Her influence continues to grow as more women step into leadership roles, inspired by the example she has set.
                  </p>

                  <p>
                  She launched and built a woman-owned business in one of the most challenging markets and economic climates, far exceeding expectations through consistent results and principled leadership. Guided by her mantra, "be a good human," she leads with integrity, impact, and a commitment to elevating others qualities that make her deeply deserving of recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}