import styles from "./page.module.css";

const services = [
  {
    title: "Restaurant Setup & Launch",
    tag: "Launch Architecture",
    description: "From blank slate to opening night, engineered for flow.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 30h32" />
        <path d="M12 30c2-8 8-14 12-14s10 6 12 14" />
        <circle cx="24" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Menu Engineering",
    tag: "Revenue Design",
    description: "Menus designed to sell, not just look good.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="12" y="10" width="24" height="28" rx="3" />
        <path d="M18 18h12" />
        <path d="M18 24h12" />
        <path d="M18 30h8" />
      </svg>
    ),
  },
  {
    title: "Manpower Supply & Training",
    tag: "Service Discipline",
    description: "Teams trained for rhythm, consistency, and polish.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="16" r="6" />
        <path d="M12 36c2-6 8-10 12-10s10 4 12 10" />
      </svg>
    ),
  },
  {
    title: "Licensing & Compliance",
    tag: "Quiet Approvals",
    description: "Permits handled cleanly, so you can build loudly.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="12" y="10" width="24" height="28" rx="3" />
        <path d="M18 22l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Catering & Events",
    tag: "Scale With Ease",
    description: "Pop-ups, corporate, and signature events done right.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 30h28" />
        <path d="M14 30c1-6 5-10 10-10s9 4 10 10" />
        <path d="M24 12v6" />
      </svg>
    ),
  },
  {
    title: "Marketing & Go-to-Market",
    tag: "Demand Engine",
    description: "Brand demand built before you open the doors.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 30l8-8 6 6 10-12" />
        <path d="M12 34h24" />
      </svg>
    ),
  },
  {
    title: "Interiors & Exteriors",
    tag: "Spatial Story",
    description: "A space that signals premium before the first order.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 22l14-10 14 10" />
        <path d="M14 22v14h20V22" />
      </svg>
    ),
  },
  {
    title: "Location Sourcing",
    tag: "Site Advantage",
    description: "Sites chosen for visibility, access, and long-term pull.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 12c-6 0-10 4-10 10 0 8 10 16 10 16s10-8 10-16c0-6-4-10-10-10z" />
        <circle cx="24" cy="22" r="3" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    title: "Discover",
    kicker: "Decode the Vision",
    description: "We translate the idea into a clear plan and launch path.",
  },
  {
    title: "Design",
    kicker: "Build the System",
    description: "Brand, menu, layout, and service flow aligned to scale.",
  },
  {
    title: "Launch",
    kicker: "Activate the Team",
    description: "Staffed, licensed, and ready for opening-day precision.",
  },
  {
    title: "Optimize",
    kicker: "Grow the Signal",
    description: "Refine performance, marketing, and repeat demand.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg
              className={styles.logoIcon}
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path d="M16 20a8 8 0 0 1 16 0" />
              <path d="M10 30c2-8 9-14 14-14s12 6 14 14" />
              <path d="M10 30h28" />
              <path d="M8 34h32" />
              <circle cx="24" cy="18" r="2" />
            </svg>
          </span>
          <span className={styles.logoText}>Froth &amp; Fork</span>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={`${styles.button} ${styles.primary}`} href="#contact">
          Request a Proposal
        </a>
      </header>

      <main id="main" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Premium Hospitality Operations</p>
            <h1>Premium hospitality, from blueprint to buzz.</h1>
            <p className={styles.lede}>
              We help you build the brand, train the team, and craft the service
              journey.
            </p>
            <div className={styles.heroActions}>
              <a className={`${styles.button} ${styles.primary}`} href="#contact">
                Request a Proposal
              </a>
              <a
                className={`${styles.button} ${styles.secondary}`}
                href="#services"
              >
                Explore Services
              </a>
            </div>
            <p className={styles.trustStrip}>
              Setup <span aria-hidden="true">•</span> Staffing{" "}
              <span aria-hidden="true">•</span> Licensing{" "}
              <span aria-hidden="true">•</span> Catering{" "}
              <span aria-hidden="true">•</span> Growth
            </p>
          </div>
          <div className={styles.heroHighlights} aria-label="Key highlights">
            <div className={styles.panelCard}>
              <p className={styles.panelTitle}>Launch-Ready Operations</p>
              <p className={styles.panelBody}>
                Systems, staffing, and compliance aligned to opening day.
              </p>
            </div>
            <div className={styles.panelCard}>
              <p className={styles.panelTitle}>Signature Service Flow</p>
              <p className={styles.panelBody}>
                Service design that keeps every touchpoint seamless.
              </p>
            </div>
            <div className={styles.panelCard}>
              <p className={styles.panelTitle}>Growth With Clarity</p>
              <p className={styles.panelBody}>
                Marketing and optimization built for long-term performance.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Services</p>
            <h2>Services that feel like a launch team.</h2>
            <p className={styles.sectionIntro}>
              We don&apos;t just check boxes — we build hospitality systems that
              move, breathe, and scale.
            </p>
          </div>
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <p className={styles.serviceTag}>{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Process</p>
            <h2>A process built for momentum.</h2>
            <p className={styles.sectionIntro}>
              Clear steps. Zero chaos. Every decision mapped to opening-day
              performance.
            </p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={step.title} className={styles.processCard}>
                <span className={styles.processIndex}>0{index + 1}</span>
                <p className={styles.processKicker}>{step.kicker}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>About</p>
            <h2>Hospitality is our profession — and our passion.</h2>
            <p className={styles.sectionIntro}>
              Froth &amp; Fork combines culinary insight, operational systems,
              and modern marketing to deliver premium, scalable guest
              experiences.
            </p>
          </div>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3>Operational Clarity</h3>
              <p>Systems built for consistency, efficiency, and control.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Guest-First Experience</h3>
              <p>Service flow designed around comfort and brand promise.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainable Growth</h3>
              <p>Performance tracking that supports long-term success.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Request a Proposal</p>
            <h2>Tell us about your project.</h2>
            <p className={styles.sectionIntro}>
              Share the essentials and we&apos;ll respond within 1–2 business days.
            </p>
          </div>
          <form className={styles.form} action="#" method="post">
            <div className={styles.formGrid}>
              <label>
                Name *
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Aisha Patel."
                  required
                />
              </label>
              <label>
                Email *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="hello@yourbrand.com."
                  required
                  spellCheck={false}
                />
              </label>
              <label>
                Company
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Froth &amp; Fork."
                />
              </label>
              <label>
                City
                <input
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Mumbai."
                />
              </label>
              <label>
                Project Type
                <input
                  name="projectType"
                  type="text"
                  autoComplete="off"
                  placeholder="Restaurant launch."
                />
              </label>
              <label>
                Services Needed
                <input
                  name="services"
                  type="text"
                  autoComplete="off"
                  placeholder="Setup, staffing, licensing."
                />
              </label>
              <label>
                Timeline
                <input
                  name="timeline"
                  type="text"
                  autoComplete="off"
                  placeholder="8–12 weeks."
                />
              </label>
              <label>
                Budget Range
                <input
                  name="budget"
                  type="text"
                  autoComplete="off"
                  placeholder="₹10L–₹20L."
                />
              </label>
              <label className={styles.fullRow}>
                Project Details
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your concept, location, and goals."
                />
              </label>
            </div>
            <button className={`${styles.button} ${styles.primary}`} type="submit">
              Send Request
            </button>
            <p className={styles.formNote}>Fields marked * are required.</p>
          </form>
        </section>
      </main>

    </div>
  );
}
