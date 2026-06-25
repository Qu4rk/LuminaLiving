"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.initSiteAnimations) {
        // @ts-ignore
        window.initSiteAnimations();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-text">The Limassol Circuit</div>
      </div>

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <a href="#home" className="logo nav-anchor nav-reveal">The Limassol Circuit</a>
        <ul className="nav-links nav-reveal">
          <li><a href="#residence" className="nav-link nav-anchor">Residence</a></li>
          <li><a href="#signatures" className="nav-link nav-anchor">Signatures</a></li>
          <li><a href="#location" className="nav-link nav-anchor">Location</a></li>
        </ul>
        <a href="#inquiry" className="nav-cta nav-anchor nav-reveal">Inquire</a>
      </nav>

      {/* ── 1. HERO ── */}
      <header className="hero section" id="home">
        <div className="hero-video-wrapper">
          <video autoPlay muted playsInline className="hero-video active">
            <source src="/assets/12049389_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/assets/herovid2.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/assets/herovid3.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/assets/herovid4.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title display-heading">
            <span className="line-wrap"><span className="line">A private coastal</span></span>
            <span className="line-wrap"><span className="line">residence, shaped by</span></span>
            <span className="line-wrap rotating-text-wrapper">
              <span className="line rotating-line">
                <span style={{ visibility: 'hidden' }}>character.</span>
                <span className="word word-precision">precision.</span>
                <span className="word word-location">location.</span>
                <span className="word word-comfort">comfort.</span>
                <span className="word word-character">character.</span>
              </span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Three levels of considered living on the Limassol shoreline.<br />
            For extended stays of one month or longer.
          </p>
          <div className="hero-cta">
            <a href="#inquiry" className="btn-primary nav-anchor">Begin a Private Inquiry</a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span className="scroll-line"></span>
          <span>Scroll</span>
        </div>
      </header>

      {/* ── 2. PHILOSOPHY ── */}
      <section className="section philosophy" id="residence">
        <div className="container">
          <div className="section-label reveal-fade">[ The Residence ]</div>
          <div className="philosophy-inner">
            <p className="lead-text reveal-copy">
              Eighty square metres arranged across three floors&mdash;each level a distinct register
              of living, shaped by material precision, spatial calm, and the constant presence of the
              Mediterranean beyond the glass.
            </p>
            <br />
            <p className="body-text reveal-copy">
              The Limassol Circuit is a private residence on the southern coast of Cyprus, designed
              for guests who value discretion, considered interiors, and the quiet rhythm of a longer
              stay. The spaces draw from the visual language of performance design culture: restrained
              palettes, proportioned surfaces, and an attention to tactile detail that reveals itself
              over weeks, not hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. SIGNATURE LIVING ── */}
      <section className="section signature-living">
        <div className="container">
          <div className="section-label reveal-fade">[ Signature Living ]</div>
          <h2 className="section-heading reveal-copy">The details that define a stay.</h2>

          {/* Feature 1: Image Left / Text Right */}
          <div className="feature-block">
            <div className="feature-image-wrap reveal-image">
              <img src="/assets/marina2.png" alt="Curated interior space with coastal views" />
            </div>
            <div className="feature-text">
              <h3 className="reveal-copy">Curated Interior Identity</h3>
              <p className="reveal-copy">
                Each stay begins with a choice of interior mood&mdash;three distinct palettes drawn
                from the visual language of performance design. Surfaces, textiles, and accent lighting
                shift to reflect your preference, creating a space that feels genuinely personal from
                the first evening.
              </p>
            </div>
          </div>

          {/* Feature 2: Image Right / Text Left */}
          <div className="feature-block reversed">
            <div className="feature-image-wrap reveal-image">
              <img src="/assets/longphoto.jpg" alt="Morning light through the residence windows" />
            </div>
            <div className="feature-text">
              <h3 className="reveal-copy">The Ritual Corner</h3>
              <p className="reveal-copy">
                A dedicated barista-grade station occupies the kitchen&rsquo;s quietest corner.
                Precision-ground espresso, hand-poured filter, or a slow morning with a moka
                pot&mdash;the routine is yours to define, with the coast as a constant backdrop.
              </p>
            </div>
          </div>

          {/* Feature 3: Text only — editorial break */}
          <div className="feature-solo reveal-copy">
            <h3>Layered Comfort</h3>
            <p>
              Four independently zoned climate systems. Acoustic-grade glazing on every window.
              Blackout curtains with light-filtering sheers. The kind of environmental control
              you stop noticing because it simply works.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. INTERIOR SIGNATURES ── */}
      <section className="section signatures" id="signatures">
        <div className="container">
          <div className="section-label reveal-fade">[ Interior Signatures ]</div>
          <div className="signatures-intro">
            <h2 className="section-heading reveal-copy">Three moods, one residence.</h2>
            <p className="body-text reveal-copy">
              Each interior signature is an original composition inspired by performance design
              culture&mdash;not a brand reproduction, but a considered atmosphere rooted in the
              same principles of precision, restraint, and material honesty.
            </p>
          </div>

          <div className="signatures-grid">
            <div className="signature-card reveal-card">
              <span className="card-number">I</span>
              <h3>Precision</h3>
              <span className="card-subtitle">Stuttgart Temperament</span>
              <p>
                Matte charcoal surfaces, brushed aluminium accents, and a palette that moves between
                warm grey and off-white. Quiet authority. Nothing unnecessary.
              </p>
            </div>

            <div className="signature-card reveal-card">
              <span className="card-number">II</span>
              <h3>Rosso Vivo</h3>
              <span className="card-subtitle">Maranello Warmth</span>
              <p>
                Deep burgundy textiles against carbon-toned walls. Warm leather, amber light, and
                the sensory richness of a well-worn cockpit translated into domestic space.
              </p>
            </div>

            <div className="signature-card reveal-card">
              <span className="card-number">III</span>
              <h3>Apex Noir</h3>
              <span className="card-subtitle">Sant&rsquo;Agata Edge</span>
              <p>
                Matte black, angular geometry, and flashes of acid green in the details. The most
                dramatic signature&mdash;for guests who want the space to make a statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE COAST — Full Width Image ── */}
      <section className="full-image">
        <div className="full-image-inner reveal-image">
          <img src="/assets/paraliakos.png" alt="Limassol coastal road at golden hour" />
        </div>
        <h2 className="overlay-text">The Coast</h2>
      </section>

      {/* ── 5b. LOCATION ── */}
      <section className="section location" id="location">
        <div className="container">
          <div className="section-label reveal-fade">[ Location ]</div>
          <div className="location-text">
            <h2 className="section-heading reveal-copy">
              Limassol&rsquo;s coastal edge.
            </h2>
            <p className="body-text reveal-copy">
              The residence sits within walking distance of the sea, positioned along the stretch
              where the city meets the Mediterranean. The Molos promenade unfolds to the east&mdash;a
              sculpted coastal walk that traces the shoreline for two kilometres. To the west, the Old
              Port holds its quieter character: stone walls, fishing boats, a handful of restaurants
              that have earned their regulars. The Limassol Marina is minutes away, its clean lines
              and careful landscaping providing a different register of coastal life. Daily rhythm
              here is shaped by proximity: morning walks along the water, evenings on the promenade,
              the constant presence of salt air and horizon.
            </p>
          </div>
          <div className="map-wrap reveal-image">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13038.571434912232!2d33.0425714!3d34.6806714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7330045f20613%3A0x95973752e2f38dcd!2sLimassol%2C%20Cyprus!5e0!3m2!1sen!2sus!4v1717621234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Limassol, Cyprus"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── 6. ATMOSPHERE ── */}
      <section className="section atmosphere" id="atmosphere">
        <div className="container">
          <div className="atmosphere-header">
            <div className="section-label reveal-fade">[ Atmosphere ]</div>
            <h2 className="section-heading reveal-copy">The surrounding rhythm.</h2>
          </div>

          <div className="gallery-wrapper reveal-image">
            <button className="gallery-nav-btn prev-btn" aria-label="Previous image">&lt;</button>
            <button className="gallery-nav-btn next-btn" aria-label="Next image">&gt;</button>
            <div className="gallery-container" id="atmosphere-gallery">
              <div className="gallery-item" data-caption="Morning light on the promenade">
                <img src="/assets/molos.jpeg" alt="Morning light on the promenade" />
              </div>
              <div className="gallery-item" data-caption="Old port texture">
                <img src="/assets/oldport.png" alt="Old port texture and stone" />
              </div>
              <div className="gallery-item" data-caption="Marina at dusk">
                <img src="/assets/marina1.png" alt="Marina at dusk" />
              </div>
              <div className="gallery-item" data-caption="Coastal stillness">
                <img src="/assets/sunset.jpg" alt="Coastal stillness at golden hour" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TERMS ── */}
      <section className="section terms">
        <div className="container">
          <div className="terms-inner">
            <div className="section-label reveal-fade">[ Stay Conditions ]</div>
            <h2 className="section-heading reveal-copy">A residence, not a hotel room.</h2>
            <p className="body-text reveal-copy" style={{ margin: '0 auto' }}>
              The Limassol Circuit operates as a private rental for extended stays.
              Each booking is handled individually.
            </p>

            <ul className="terms-list">
              <li className="terms-item reveal-copy">
                <span className="terms-label">Availability</span>
                <span className="terms-value">Private rental only</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Minimum Stay</span>
                <span className="terms-value">30 days</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Maximum Stay</span>
                <span className="terms-value">6 months</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Short-Stay Premiums</span>
                <span className="terms-value">Premium rates apply to qualifying shorter stays</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Ideal For</span>
                <span className="terms-value">Executives, project-based residencies, seasonal relocations</span>
              </li>
            </ul>

            <p className="terms-note reveal-copy">
              Each inquiry is reviewed personally. We respond within 48 hours with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. PRIVATE INQUIRY ── */}
      <section className="section inquiry" id="inquiry">
        <div className="container">
          <div className="inquiry-inner">
            <div className="inquiry-intro">
              <div className="section-label reveal-fade">[ Private Inquiry ]</div>
              <h2 className="section-heading inquiry-heading">Begin a Private Inquiry</h2>
              <p className="body-text reveal-copy" style={{ margin: '0 auto' }}>
                Share a few details and we will respond with a tailored stay proposal,
                typically within two working days.
              </p>
            </div>

            <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="inquiry-field"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="inquiry-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="signature">Preferred Interior Signature</label>
                  <select id="signature" className="inquiry-field" defaultValue="">
                    <option value="" disabled>Select a signature</option>
                    <option value="precision">Precision — Stuttgart Temperament</option>
                    <option value="rosso-vivo">Rosso Vivo — Maranello Warmth</option>
                    <option value="apex-noir">Apex Noir — Sant&rsquo;Agata Edge</option>
                  </select>
                </div>
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="duration">Preferred Stay Duration</label>
                  <select id="duration" className="inquiry-field" defaultValue="">
                    <option value="" disabled>Select duration (optional)</option>
                    <option value="1-2">1–2 months</option>
                    <option value="2-4">2–4 months</option>
                    <option value="4-6">4–6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="inquiry-submit">
                <button type="submit" className="btn-primary">Send Inquiry</button>
              </div>
            </form>

            <p className="inquiry-disclaimer reveal-copy">
              All inquiries are handled with discretion. Your information is never shared
              with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. FOOTER ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-upper">
            <div>
              <div className="footer-brand">The Limassol Circuit</div>
              <div className="footer-location">Limassol, Cyprus</div>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">WhatsApp</a>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Email</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 The Limassol Circuit. All rights reserved.</p>
            <p className="disclaimer">
              Interior signatures are original compositions. Not affiliated with
              Porsche, Ferrari, or Lamborghini.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}