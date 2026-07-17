"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SideRays from "@/components/animations/SideRays";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FeatureAccordion } from "@/components/ui/FeatureAccordion";
import { BouncingDots } from "@/components/ui/bouncing-dots";

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export default function Home() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHeroRevealed = () => setIsLoaded(true);
    window.addEventListener('heroRevealed', handleHeroRevealed);
    return () => window.removeEventListener('heroRevealed', handleHeroRevealed);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.initSiteAnimations) {
        // @ts-ignore
        window.initSiteAnimations();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
      // @ts-ignore
      if (typeof window !== "undefined") {
        // @ts-ignore
        if (window.rotatingInterval) clearInterval(window.rotatingInterval);
        // @ts-ignore
        if (window.rotatingTimeout) clearTimeout(window.rotatingTimeout);
      }
    };
  }, []);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [coastTapped, setCoastTapped] = useState(false);

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/inquire@lumina-living.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      
      if (response.ok) {
        setSubmitStatus('sent');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-content">
          <img src="/LuminaLiving/luminaliving_logo.webp" alt="Lumina Living" className="preloader-logo" />
          <div className="preloader-text" style={{ marginBottom: '1rem' }}>Lumina Living</div>
          <BouncingDots className="text-white/80 preloader-dots" />
        </div>
      </div>


      {/* Navigation */}
      <nav className={`navbar ${scrolledPastHero ? "navbar-scrolled" : ""} ${isLoaded ? "is-loaded" : ""}`} id="navbar">
        <a href="#home" className="logo nav-anchor nav-reveal">
          <img src="/LuminaLiving/luminaliving_logo.webp" alt="Lumina Living" className="logo-img" />
          Lumina Living
        </a>
        <ul className="nav-links nav-reveal">
          <li><a href="#residence" className="nav-link nav-anchor">Residence</a></li>
          <li><a href="#signatures" className="nav-link nav-anchor">Signatures</a></li>
          <li><a href="#location" className="nav-link nav-anchor">Location</a></li>
        </ul>
        <a href="#inquiry" className="nav-cta nav-anchor nav-reveal">Inquire</a>
        <div className="header-line"></div>
      </nav>

      {/* ── 1. HERO ── */}
      <header className="hero section" id="home">
        <div className="hero-video-wrapper">
          <video autoPlay muted playsInline className="hero-video active">
            <source src="/LuminaLiving/assets/12049389_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/LuminaLiving/assets/herovid2.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/LuminaLiving/assets/herovid3.mp4" type="video/mp4" />
          </video>
          <video muted playsInline className="hero-video">
            <source src="/LuminaLiving/assets/herovid4.mp4" type="video/mp4" />
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
            An ultra-exclusive coastal haven engineered for absolute, uncompromising comfort.<br />
            A bespoke sanctuary offering profound serenity and effortless living, from 3 days to a full year.
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

      {/* Background Rays (Appears behind the content) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', mixBlendMode: 'screen', opacity: scrolledPastHero ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
        <SideRays
          speed={1.0}
          rayColor1="#FFB75E"
          rayColor2="#FFF0D1"
          intensity={1.8}
          spread={2.5}
          origin="top-right"
          tilt={-5}
          saturation={1.3}
          blend={0.6}
          falloff={1.2}
          opacity={0.7}
        />
      </div>

      {/* ── 2. PHILOSOPHY ── */}
      <section className="section philosophy" id="residence">
        <div className="container">
          <div className="section-label reveal-fade">The Residence</div>
          <div className="philosophy-inner">
            <p className="lead-text reveal-copy">
              Eighty square metres arranged across three floors, each level a distinct register
              of living, shaped by material precision, spatial calm, and the constant presence of the
              Mediterranean beyond the glass.
            </p>
            <br />
            <p className="body-text reveal-copy chillax-copy">
              Lumina Living is a private residence on the southern coast of Cyprus, designed
              for guests who value discretion, considered interiors, and the elevated rhythm of an exclusive
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
          <div className="section-label reveal-fade">Signature Living</div>
          <h2 className="section-heading reveal-copy">The details that define a stay.</h2>

          {/* Feature 1: Image Left / Text Right */}
          <div className="feature-block">
            <div className="feature-image-wrap reveal-image">
              <img loading="lazy" decoding="async" src="/LuminaLiving/assets/bathroom.webp" alt="Curated bathroom interior space" className="bathroom-img" />
            </div>
            <div className="feature-text">
              <h3 className="reveal-copy">Curated Interior Identity</h3>
              <p className="reveal-copy chillax-copy">
                Each stay begins with a choice of interior mood, three distinct palettes drawn
                from the visual language of performance design. Surfaces, textiles, and accent lighting
                shift to reflect your preference, creating a space that feels genuinely personal from
                the first evening.
              </p>
            </div>
          </div>

          {/* Feature 2: Image Right / Text Left */}
          <div className="feature-block reversed">
            <div className="feature-image-wrap reveal-image">
              <img loading="lazy" decoding="async" src="/LuminaLiving/assets/barista_station.webp" alt="A high-end luxury espresso machine and barista station" />
            </div>
            <div className="feature-text">
              <h3 className="reveal-copy">The Ritual Corner</h3>
              <p className="reveal-copy chillax-copy">
                A dedicated barista-grade station occupies the kitchen&rsquo;s quietest corner.
                Precision-ground espresso, hand-poured filter, or a slow morning with a moka
                pot, the routine is yours to define, with the coast as a constant backdrop.
              </p>
            </div>
          </div>

          {/* Feature 3: Layered Comfort — four-system strata */}
          <div className="feature-layered">
            <HeroHighlight containerClassName="py-0 h-auto bg-transparent mb-6 justify-start text-left items-start">
              <h3 className="relative z-10 m-0 reveal-copy">
                Layered <Highlight style={{ backgroundImage: "linear-gradient(to right, #7ab1cc, #AEE2FF)", color: "#000", borderRadius: "0.4em", padding: "0 0.2em 0.1em" }}>Comfort</Highlight>
              </h3>
            </HeroHighlight>
            <FeatureAccordion 
              items={[
                { text: 'Microclimate', description: 'Precision temperature control across four independent zones for personalized comfort.', image: '/LuminaLiving/assets/feature_microclimate_1782852308980.webp' },
                { text: 'Acoustic Envelope', description: 'Acoustic-grade, multi-layered glass ensuring absolute tranquility and thermal perfection.', image: '/LuminaLiving/assets/feature_acoustic_envelope_1782852327696.webp' },
                { text: 'Light Orchestration', description: 'Motorized blackout drapery paired with delicate light-filtering sheers for effortless mood lighting.', image: '/LuminaLiving/assets/blackoutcurtains.webp' },
                { text: 'Sensory Architecture', description: 'Intuitive environmental architecture that seamlessly adapts to your presence and preferences.', image: '/LuminaLiving/assets/Propertyphotooutside1.webp' }
              ]} 
            />
          </div>
        </div>
      </section>

      {/* ── 4. BESPOKE INTERIORS ── */}
      <section className="section signatures" id="signatures">
        <div className="container">
          <div className="section-label reveal-fade">Bespoke Interiors</div>
          <div className="signatures-intro">
            <h2 className="section-heading reveal-copy">Tailored to your aesthetic.</h2>
            <p className="body-text reveal-copy chillax-copy">
              Lumina Living is designed as a refined canvas for our long-term guests. We recognize that an extended stay requires an environment that resonates with your personal taste. Prior to your arrival, we work closely with you to customize the atmosphere, lighting, and textural details of the residence, ensuring the space feels distinctly yours.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. THE COAST — Full Width Image ── */}
      <section className={`full-image ${coastTapped ? 'coast-tapped' : ''}`} onClick={() => setCoastTapped(prev => !prev)}>
        <div className="full-image-inner reveal-image">
          <img loading="lazy" decoding="async" src="/LuminaLiving/assets/paraliakos-sunset.webp" alt="Limassol coastal road at sunset" className="bg-img" />
          <img loading="lazy" decoding="async" src="/LuminaLiving/assets/paraliakos.webp" alt="Limassol coastal road at golden hour" className="fg-img" />
        </div>
        <h2 className="overlay-text">
          <span className="slide-swap-container">
            <span className="slide-swap-text">The Coast</span>
            <span className="slide-swap-alt">Is Yours.</span>
          </span>
        </h2>
      </section>

      {/* ── 5b. LOCATION ── */}
      <section className="section location" id="location">
        <div className="container">
          <div className="section-label reveal-fade">Location</div>
          <div className="location-text">
            <h2 className="section-heading reveal-copy">
              Limassol&rsquo;s coastal edge.
            </h2>
            <p className="body-text reveal-copy chillax-copy">
              The residence sits within walking distance of the sea, positioned along the stretch
              where the city meets the Mediterranean. The Molos promenade unfolds to the east, a
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
              src="https://maps.google.com/maps?q=34.673037,33.044670&z=15&output=embed"
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
            <div className="section-label reveal-fade">Atmosphere</div>
            <h2 className="section-heading reveal-copy">The surrounding rhythm.</h2>
          </div>

          <div className="gallery-wrapper reveal-image">
            <button className="gallery-nav-btn prev-btn" aria-label="Previous image">&lt;</button>
            <button className="gallery-nav-btn next-btn" aria-label="Next image">&gt;</button>
            <div className="gallery-container" id="atmosphere-gallery">
              <div className="gallery-item" data-caption="Twilight on the docks">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_3.webp" alt="Twilight on the docks" />
              </div>
              <div className="gallery-item" data-caption="Mediterranean water texture">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_4.webp" alt="Mediterranean water texture" />
              </div>
              <div className="gallery-item" data-caption="Golden hour coastal highway">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_5.webp" alt="Golden hour coastal highway" />
              </div>
              <div className="gallery-item" data-caption="Warm shoreline evening">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_6.webp" alt="Warm shoreline evening" />
              </div>
              <div className="gallery-item" data-caption="Stones along the surf">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_7.webp" alt="Stones along the surf" />
              </div>
              <div className="gallery-item" data-caption="Minimalist horizon gradient">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_8.webp" alt="Minimalist horizon gradient" />
              </div>
              <div className="gallery-item" data-caption="Limassol coastline view">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_9.webp" alt="Limassol coastline view" />
              </div>
              <div className="gallery-item" data-caption="Coastal dusk architecture">
                <img loading="lazy" decoding="async" src="/LuminaLiving/assets/atmosphere_10.webp" alt="Coastal dusk architecture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TERMS ── */}
      <section className="section terms">
        <div className="container">
          <div className="terms-inner">
            <div className="section-label reveal-fade">Stay Conditions</div>
            <h2 className="section-heading reveal-copy">A residence, not a hotel room.</h2>
            <p className="body-text reveal-copy" style={{ margin: '0 auto' }}>
              Lumina Living operates as an exclusive private rental.
              Each booking is handled individually.
            </p>

            <ul className="terms-list">
              <li className="terms-item reveal-copy">
                <span className="terms-label">Availability</span>
                <span className="terms-value">Private rental only</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Minimum Stay</span>
                <span className="terms-value">3 days</span>
              </li>
              <li className="terms-item reveal-copy">
                <span className="terms-label">Maximum Stay</span>
                <span className="terms-value">1 year (364 days)</span>
              </li>

              <li className="terms-item reveal-copy">
                <span className="terms-label">Ideal For</span>
                <span className="terms-value">High-net-worth individuals, executives, and luxury escapes</span>
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
              <div className="section-label reveal-fade">Private Inquiry</div>
              <h2 className="section-heading inquiry-heading">Begin a Private Inquiry</h2>
              <p className="body-text reveal-copy" style={{ margin: '0 auto' }}>
                Share a few details and we will respond with a tailored stay proposal,
                typically within two working days.
              </p>
            </div>

            <form className="inquiry-form" onSubmit={handleInquirySubmit}>
              <div className="form-row">
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="email"
                    className="inquiry-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="customization">Customization Preferences</label>
                  <input
                    type="text"
                    id="customization"
                    name="customization"
                    className="inquiry-field"
                    placeholder="e.g. Minimalist, Warm tones..."
                  />
                </div>
                <div className="form-group inquiry-field-wrap">
                  <label htmlFor="duration">Preferred Stay Duration</label>
                  <select id="duration" name="duration" className="inquiry-field" defaultValue="">
                    <option value="" disabled>Select duration (optional)</option>
                    <option value="3-7">3–7 days</option>
                    <option value="1-4">1–4 weeks</option>
                    <option value="1-6">1–6 months</option>
                    <option value="6-12">6–12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="inquiry-submit">
                <button type="submit" className="btn-primary" disabled={submitStatus === 'sending'} style={{ fontWeight: submitStatus !== 'idle' ? 800 : undefined }}>
                  {submitStatus === 'idle' && 'Send Inquiry'}
                  {submitStatus === 'sending' && 'Sending...'}
                  {submitStatus === 'sent' && '✓ Inquiry Sent!'}
                  {submitStatus === 'error' && 'Error — Try Again'}
                </button>
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
            <div className="footer-column brand-col">
              <div className="footer-brand-group">
                <img loading="lazy" decoding="async" src="/LuminaLiving/luminaliving_logo.webp" alt="Lumina Living" className="footer-logo-img" />
                <div className="footer-brand">Lumina Living</div>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer-col-label">[ Sections ]</div>
              <ul className="footer-col-links">
                <li><a href="#home" className="footer-col-link nav-anchor">Top</a></li>
                <li><a href="#residence" className="footer-col-link nav-anchor">Residence</a></li>
                <li><a href="#signatures" className="footer-col-link nav-anchor">Signatures</a></li>
                <li><a href="#location" className="footer-col-link nav-anchor">Location</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <div className="footer-col-label">[ Connect ]</div>
              <ul className="footer-col-links">
                <li>
                  <a href="https://wa.me/35799191855" target="_blank" rel="noopener noreferrer" className="footer-col-link whatsapp-link" aria-label="WhatsApp">
                    <WhatsappIcon />
                    <span className="whatsapp-text">WHATSAPP</span>
                  </a>
                </li>
                <li>
                  <a href="#inquiry" className="footer-col-link email-link nav-anchor" aria-label="Email Inquiry">
                    <MailIcon />
                    <span className="email-text">EMAIL</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; {new Date().getFullYear()} Lumina Living. All rights reserved.</p>
              <div className="legal-links" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Link href="/terms" className="footer-link" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Terms</Link>
                <Link href="/privacy" className="footer-link" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Privacy</Link>
              </div>
              <p className="footer-signature-text">Brought to life by <span className="quark-shimmer">QUARK</span></p>
            </div>
            <p className="disclaimer">
              Redefining coastal luxury. Every detail is curated for an exceptional living experience.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}