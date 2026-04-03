import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ContactForm } from "@/components/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";

const projects = [
  {
    title: "Premium Brand Websites",
    type: "Design + Development",
    result: "Top-tier conversions for luxury brands across East Africa",
  },
  {
    title: "E-Commerce Platforms",
    type: "Full Stack UX",
    result: "Seamless shopping experiences with 3D product interactions",
  },
  {
    title: "SaaS Dashboards",
    type: "Product Design + Animation",
    result: "Enterprise solutions with micro-interactions and smooth flows",
  },
];

const services = [
  "Award-level web design & development",
  "Next.js high-performance builds",
  "3D interactions & motion design",
  "Conversion optimization strategy",
  "Responsive & accessible interfaces",
  "SEO-optimized architecture",
];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="ambient-bg" aria-hidden="true" />

      <header className="top-nav wrapper">
        <p className="brand-mark">ZACHARY NDEGWA</p>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="nav-pill">
            Book a Project
          </a>
        </div>
      </header>

      <main>
        <section className="hero wrapper">
          <p className="kicker">🇰🇪 Kenya • Ruiru Kamakis • Next.js Developer</p>
          <h1>
            I design and build bold digital experiences that win awards and drive real results.
          </h1>
          <p className="lead">
            I&apos;m Zachary Ndegwa, a web developer and designer crafting top-tier websites for ambitious brands across Kenya and beyond. Every project is built for performance, beauty, and impact.
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
            <h2>Crafted to win. Built to convert.</h2>
            <p>
              I combine strategic design thinking with latest web technologies. Every pixel is intentional. Every interaction serves a purpose. The result: websites that don&apos;t just look premium—they perform.
            </p>
            <p>
              From concept to launch, I handle everything: UX/UI design, front-end development, performance optimization, and deployment. Based in Ruiru Kamakis, Kenya, I work with ambitious brands across the globe.
            </p>
          </div>
        </section>

        <ScrollAnimationWrapper>
          <section className="crawl-wrap" aria-label="Highlights">
            <div className="crawl-track">
              <span>AWARD-WORTHY DESIGN</span>
              <span>•</span>
              <span>3D MOTION</span>
              <span>•</span>
              <span>NEXT.JS PERFORMANCE</span>
              <span>•</span>
              <span>KENYA-BASED</span>
              <span>•</span>
              <span>AWARD-WORTHY DESIGN</span>
              <span>•</span>
              <span>3D MOTION</span>
              <span>•</span>
              <span>NEXT.JS PERFORMANCE</span>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="work wrapper" id="work">
            <h2>Featured Projects</h2>
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
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="services wrapper">
            <h2>Services & Expertise</h2>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="contact wrapper" id="contact">
            <h2>Ready to build something extraordinary?</h2>
            <p>
              Let&apos;s create a website that breaks the internet and drives real business results.
            </p>
            
            <div className="contact-info">
              <p><strong>Call or WhatsApp:</strong></p>
              <ul className="contact-list">
                <li><a href="tel:+254798293831">+254 798 293 831</a></li>
                <li><a href="tel:+254794766368">+254 794 766 368</a></li>
              </ul>
            </div>

            <ContactForm />
          </section>
        </ScrollAnimationWrapper>
      </main>
    </div>
  );
}

