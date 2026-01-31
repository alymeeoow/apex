import React, { useEffect, useRef, useState } from "react";
import "../../../assets/styles/pages/fundraising.css";
import { MdArrowOutward, MdCheckCircle, MdAttachMoney, MdGroups, MdVolunteerActivism } from "react-icons/md";
import { GiReceiveMoney, GiHeartKey } from "react-icons/gi";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";

import FundraisingHero from "./fundRaisingHero";

export default function Fundraising() {
  const sectionRefs = useRef([]);
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donationMessage, setDonationMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);
  const [totalRaised, setTotalRaised] = useState(125750); 

 
  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animate");
          
          const cards = entry.target.querySelectorAll(".fundraise-card, .fundraise-mediaCard, .fundraise-infoCard, .impact-stat");
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setDonationComplete(true);
      setTotalRaised(prev => prev + donationAmount);
      
      // Reset form
      setDonorName("");
      setDonorEmail("");
      setDonationMessage("");
      setCustomAmount("");
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setDonationComplete(false), 5000);
    }, 1500);
  };

  const handlePresetClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value)) {
      setDonationAmount(parseInt(value));
    }
  };

  return (
    <main className="apex-fundraise">
      <FundraisingHero totalRaised={totalRaised} />

      {/* IMPACT STATS BAR */}
      <div className="fundraise-impactBar">
        <div className="fundraise-shell">
          <div className="fundraise-impactStats">
            <div className="impact-stat">
              <div className="impact-icon"><GiReceiveMoney /></div>
              <div className="impact-content">
                <div className="impact-value">${totalRaised.toLocaleString()}</div>
                <div className="impact-label">Raised for Charity</div>
              </div>
            </div>
            
            <div className="impact-stat">
              <div className="impact-icon"><FaHandsHelping /></div>
              <div className="impact-content">
                <div className="impact-value">1,250+</div>
                <div className="impact-label">Lives Impacted</div>
              </div>
            </div>
            
            <div className="impact-stat">
              <div className="impact-icon"><MdGroups /></div>
              <div className="impact-content">
                <div className="impact-value">42</div>
                <div className="impact-label">Scholarships Awarded</div>
              </div>
            </div>
            
            <div className="impact-stat">
              <div className="impact-icon"><MdVolunteerActivism /></div>
              <div className="impact-content">
                <div className="impact-value">100%</div>
                <div className="impact-label">Donations to Cause</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: FUNDRAISING MISSION */}
      <section 
        className="fundraise-section" 
        id="fundraising-section-1"
        ref={addToRefs}
      >
        <div className="fundraise-shell">
          <div className="fundraise-grid">
            {/* LEFT */}
            <aside className="fundraise-left">
              <div className="fundraise-leftFlow">
                <div className="fundraise-leftStack">
                  <div className="fundraise-mediaCard">
                    <div className="fundraise-image">
                      <img src={CharityImg1} alt="Logistics education charity program" />
                    </div>
                  </div>

                  <div className="fundraise-infoCard">
                    <div className="fundraise-infoTitle">Where Your Donation Goes</div>

                    <div className="fundraise-chipGrid">
                      <span className="fundraise-chip">
                        <MdCheckCircle /> Women's Logistics Scholarships
                      </span>
                      <span className="fundraise-chip">
                        <MdCheckCircle /> Mentorship Program Funding
                      </span>
                      <span className="fundraise-chip">
                        <MdCheckCircle /> Leadership Training Materials
                      </span>
                      <span className="fundraise-chip">
                        <MdCheckCircle /> Industry Certification Costs
                      </span>
                      <span className="fundraise-chip">
                        <MdCheckCircle /> Community Outreach Events
                      </span>
                    </div>
                  </div>
                </div>

                <div className="fundraise-quote">
                  <GiHeartKey className="quote-icon" />
                  <p>
                    "Every dollar contributed creates pathways for women who dream of leadership 
                    in logistics. Your support builds futures, not just careers."
                  </p>
                  <div className="quote-author">— Eileen Dabrowski</div>
                </div>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="fundraise-right">
              <div className="fundraise-rail">
                <div className="fundraise-eyebrow">Fundraising Impact</div>

                <h2 className="fundraise-title">Every Dollar Contributes to Lasting Change</h2>

                <p className="fundraise-lead">
                  Your donation directly funds scholarships, mentorship programs, and educational 
                  resources that empower women to enter and excel in the logistics industry.
                </p>

                <div className="fundraise-card">
                  <h3 className="fundraise-cardTitle">Our Charity Commitment</h3>

                  <ul className="fundraise-list">
                    <li>
                      <strong>100% Transparency:</strong> Every dollar is tracked and reported
                    </li>
                    <li>
                      <strong>Direct Impact:</strong> Funds go directly to program participants
                    </li>
                    <li>
                      <strong>Sustainable Change:</strong> Building long-term career pathways
                    </li>
                    <li>
                      <strong>Industry Partnership:</strong> Collaborating with logistics companies
                    </li>
                    <li>
                      <strong>Community Focus:</strong> Supporting underserved communities
                    </li>
                  </ul>
                </div>

                <div className="fundraise-card fundraise-card--accent">
                  <div className="donation-impact">
                    <h4>Your Impact at Different Levels:</h4>
                    <div className="impact-levels">
                      <div className="impact-level">
                        <div className="level-amount">$25</div>
                        <div className="level-desc">Provides educational materials for one student</div>
                      </div>
                      <div className="impact-level">
                        <div className="level-amount">$100</div>
                        <div className="level-desc">Covers certification exam fees</div>
                      </div>
                      <div className="impact-level">
                        <div className="level-amount">$500</div>
                        <div className="level-desc">Funds a full scholarship for one semester</div>
                      </div>
                      <div className="impact-level">
                        <div className="level-amount">$1,000</div>
                        <div className="level-desc">Sponsors a mentorship program for 5 women</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DONATION FORM */}
      <section 
        className="fundraise-section fundraise-alt" 
        id="fundraising-section-2"
        ref={addToRefs}
      >
        <div className="fundraise-shell">
          <div className="fundraise-grid">
            {/* LEFT */}
            <aside className="fundraise-left">
              <div className="fundraise-leftStack">
                <div className="fundraise-mediaCard">
                  <div className="fundraise-image">
                    <img src={CharityImg2} alt="Women mentorship program" />
                  </div>
                </div>

                <div className="fundraise-infoCard">
                  <div className="fundraise-infoTitle">Real Stories of Impact</div>

                  <div className="success-stories">
                    <div className="success-story">
                      <div className="story-quote">"The scholarship allowed me to complete my logistics certification and land my dream job."</div>
                      <div className="story-author">— Maria, Scholarship Recipient</div>
                    </div>
                    <div className="success-story">
                      <div className="story-quote">"Mentorship program gave me the confidence to apply for leadership positions I never thought possible."</div>
                      <div className="story-author">— Sarah, Program Graduate</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT - DONATION FORM */}
            <div className="fundraise-right">
              <div className="fundraise-rail">
                <div className="fundraise-eyebrow">Make a Donation</div>
                <h2 className="fundraise-title">Support Women in Logistics</h2>

                {donationComplete && (
                  <div className="donation-success">
                    <MdCheckCircle className="success-icon" />
                    <h3>Thank You for Your Generous Donation!</h3>
                    <p>Your contribution of ${donationAmount} will directly impact women pursuing careers in logistics.</p>
                    <p>A receipt has been sent to your email.</p>
                  </div>
                )}

                <form onSubmit={handleDonationSubmit} className="donation-form">
                  <div className="donation-amount-section">
                    <h3 className="form-section-title">Select Donation Amount</h3>
                    
                    <div className="preset-amounts">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`preset-amount-btn ${
                            donationAmount === amount && !customAmount ? 'selected' : ''
                          }`}
                          onClick={() => handlePresetClick(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="custom-amount">
                      <label htmlFor="customAmount">Or Enter Custom Amount:</label>
                      <div className="custom-input-group">
                        <span className="currency-symbol">$</span>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmount}
                          placeholder="Enter amount"
                          min="1"
                          step="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="donation-details-section">
                    <h3 className="form-section-title">Your Information</h3>
                    
                    <div className="form-group">
                      <label htmlFor="donorName">Full Name *</label>
                      <input
                        type="text"
                        id="donorName"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="donorEmail">Email Address *</label>
                      <input
                        type="email"
                        id="donorEmail"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="donationMessage">
                        Optional: Add a message of support
                      </label>
                      <textarea
                        id="donationMessage"
                        value={donationMessage}
                        onChange={(e) => setDonationMessage(e.target.value)}
                        placeholder="Your message will be shared with scholarship recipients"
                        rows="3"
                      />
                    </div>
                    
                    <div className="donation-summary">
                      <div className="summary-row">
                        <span>Your Donation:</span>
                        <span className="donation-total">${donationAmount}</span>
                      </div>
                      <div className="summary-row">
                        <span>Processing Fee (2.9% + $0.30):</span>
                        <span>${((donationAmount * 0.029) + 0.30).toFixed(2)}</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total Charged:</span>
                        <span>${(donationAmount + (donationAmount * 0.029) + 0.30).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="form-actions">
                      <button
                        type="submit"
                        className="donate-button"
                        disabled={isProcessing || donationAmount <= 0}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <MdAttachMoney />
                            Donate ${donationAmount} Now
                          </>
                        )}
                      </button>
                      
                      <p className="security-note">
                        <MdCheckCircle /> Secure payment processed by Stripe. 100% safe & encrypted.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHARITY DETAILS */}
      <section 
        className="fundraise-section" 
        id="fundraising-section-3"
        ref={addToRefs}
      >
        <div className="fundraise-shell">
          <div className="fundraise-header">
            <div className="fundraise-eyebrow">Our Charity</div>
            <h2 className="fundraise-title">Building Sustainable Futures in Logistics</h2>
            <p className="fundraise-lead">
              We're more than a charity—we're a movement creating lasting change in the logistics 
              industry through education, empowerment, and opportunity.
            </p>
          </div>

          <div className="charity-features">
            <div className="charity-feature">
              <div className="feature-icon"><FaHandHoldingHeart /></div>
              <h3>Direct Support Model</h3>
              <p>100% of donations go directly to program funding. All administrative costs are covered by corporate sponsors.</p>
            </div>
            
            <div className="charity-feature">
              <div className="feature-icon"><MdGroups /></div>
              <h3>Community-Driven</h3>
              <p>Programs designed with input from industry professionals and community leaders to ensure maximum impact.</p>
            </div>
            
            <div className="charity-feature">
              <div className="feature-icon"><MdCheckCircle /></div>
              <h3>Verified Impact</h3>
              <p>Regular impact reports showing exactly how donations are used and their measurable outcomes.</p>
            </div>
          </div>

          <div className="fundraise-card fundraise-card--impact">
            <div className="impact-report">
              <h3>Annual Impact Report 2024</h3>
              <div className="report-stats">
                <div className="report-stat">
                  <div className="stat-value">97%</div>
                  <div className="stat-label">Scholarship completion rate</div>
                </div>
                <div className="report-stat">
                  <div className="stat-value">85%</div>
                  <div className="stat-label">Employment within 6 months</div>
                </div>
                <div className="report-stat">
                  <div className="stat-value">$3.2M</div>
                  <div className="stat-label">Lifetime earning potential created</div>
                </div>
              </div>
              <p className="report-note">
                *Based on 2023 program data. Complete audited financials available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}