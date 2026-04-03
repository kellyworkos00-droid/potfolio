import Image from "next/image";

const projects = [
  {
    title: "Luxury Real Estate Platform",
    type: "Brand + Conversion",
    result: "4.1x more qualified leads in 90 days",
  },
  {
    title: "Logistics Control Dashboard",
    type: "Product + Data UX",
    result: "32% faster operations for dispatch teams",
  },
  {
    title: "Hospitality Booking Experience",
    type: "Motion + Storytelling",
    result: "2.7x direct bookings from mobile",
  },
];

const services = [
  "Award-level web design systems",
  "Next.js high-performance builds",
  "3D interaction direction & motion",
  "Conversion strategy for premium brands",
];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="ambient-bg" aria-hidden="true" />

      <header className="top-nav wrapper">
        <p className="brand-mark">ZACHARY NDEGWA</p>
        <a href="#contact" className="nav-pill">
          Book a Project
        </a>
      </header>

      <main>
        <section className="hero wrapper">
          <p className="kicker">Kenya • Ruiru Kamakis • Next.js Developer</p>
          <h1>
            I design and build bold digital experiences that push businesses to
            the front.
          </h1>
          <p className="lead">
            I am Zachary Ndegwa, a web developer and designer crafting top-tier
            websites for ambitious brands in Kenya and beyond.
          </p>

          <div className="hero-ctas">
            <a href="#work" className="btn-primary">
              View Featured Work
            </a>
            <a href="#about" className="btn-secondary">
              My Process
            </a>
          </div>

          <div className="hero-grid-3d">
            <article>
              <p>Creative Direction</p>
              <strong>UI that feels alive</strong>
            </article>
            <article>
              <p>Engineering</p>
              <strong>Fast, scalable Next.js</strong>
            </article>
            <article>
              <p>Business Impact</p>
              <strong>Design that converts</strong>
            </article>
          </div>
        </section>

        <section className="image-band wrapper" id="about">
          <div className="portrait-stack">
            <Image
              src="/images/zachary-main.svg"
              alt="Zachary Ndegwa portrait placeholder"
              width={800}
              height={1000}
              priority
            />
            <Image
              src="/images/zachary-studio.svg"
              alt="Studio profile placeholder"
              width={520}
              height={700}
            />
          </div>
          <div className="about-copy">
            <h2>Modern aesthetics. Sharp strategy. Real performance.</h2>
            <p>
              This portfolio is designed to feel premium: layered gradients,
              crawling text motion, 3D card perspective, and content flow built
              to keep users engaged while staying technically efficient.
            </p>
            <p>
              Replace the placeholders with your photos and this becomes a fully
              branded identity site that can compete with top global studios.
            </p>
          </div>
        </section>

        <section className="crawl-wrap" aria-label="Highlights">
          <div className="crawl-track">
            <span>AWARD-WORTHY UX</span>
            <span>•</span>
            <span>3D INTERACTIONS</span>
            <span>•</span>
            <span>HIGH-PERFORMANCE NEXT.JS</span>
            <span>•</span>
            <span>CRAFTED IN KENYA</span>
            <span>•</span>
            <span>AWARD-WORTHY UX</span>
            <span>•</span>
            <span>3D INTERACTIONS</span>
            <span>•</span>
            <span>HIGH-PERFORMANCE NEXT.JS</span>
          </div>
        </section>

        <section className="work wrapper" id="work">
          <h2>Selected Work Direction</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <strong>{project.result}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="services wrapper">
          <h2>What I Deliver</h2>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="contact wrapper" id="contact">
          <h2>Let&apos;s build a website that shocks the market.</h2>
          <p>
            Available for premium brand websites, product marketing pages, and
            full website redesigns.
          </p>
          <a className="btn-primary" href="mailto:hello@zacharyndegwa.com">
            hello@zacharyndegwa.com
          </a>
        </section>
      </main>
    </div>
  );
}
