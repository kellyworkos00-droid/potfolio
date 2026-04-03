import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ContactForm } from "@/components/ContactForm";
import { ScrollDepthScene } from "@/components/ScrollDepthScene";
import { ThemeToggle } from "@/components/ThemeToggle";

const projects = [
  {
    title: "Etana E-Commerce Platform",
    type: "Wholesale Commerce + UX Systems",
    result: "Bulk-buying experience with conversion-first merchandising and nationwide logistics messaging",
    href: "https://etana-must.vercel.app/",
  },
  {
    title: "Premium Brand Websites",
    type: "Design + Development",
    result: "Luxury visual systems, rich motion, and performance-led front-end builds",
    href: "#contact",
  },
  {
    title: "SaaS Dashboards",
    type: "Product Design + Animation",
    result: "Enterprise-ready interfaces with smooth flows, data hierarchy, and polished interactions",
    href: "#contact",
  },
];

const mobileHighlights = [
  "Thumb-friendly navigation and CTAs",
  "Responsive layouts tuned for Kenyan mobile traffic",
  "Fast-loading media and lightweight animations",
  "High-contrast UI for clarity in every environment",
];

const etanaStats = [
  "50,000+ active shoppers",
  "Same-day delivery in Nairobi",
  "500+ businesses served",
  "8 live products showcased with wholesale pricing",
];

const storyPoints = [
  "Kenya-based full-stack developer working from Ruiru Kamakis",
  "Focused on premium business websites, e-commerce platforms, and custom web systems",
  "Blends visual design thinking with backend engineering and deployment discipline",
  "Builds for speed, clarity, conversion, and long-term business growth",
];

const services = [
  "Award-level web design & development",
  "Next.js high-performance builds",
  "3D interactions & motion design",
  "Conversion optimization strategy",
  "Responsive & accessible interfaces",
  "SEO-optimized architecture",
  "Backend systems, APIs, auth, and database design",
  "Deployment, scaling, analytics, and maintenance",
];

const stackAreas = [
  {
    title: "Frontend Systems",
    detail: "Next.js, React, animation systems, responsive design, e-commerce storefronts, dashboards, and premium landing pages.",
  },
  {
    title: "Backend Engineering",
    detail: "Node.js APIs, authentication, admin panels, order flows, role-based access, and secure business logic.",
  },
  {
    title: "Data & Integrations",
    detail: "Databases, CMS setups, analytics, payment gateways, WhatsApp workflows, email flows, and third-party integrations.",
  },
  {
    title: "Deployment & Growth",
    detail: "Vercel deployment, performance tuning, SEO, monitoring, scaling strategy, and long-term product improvement.",
  },
];

const timeline = [
  {
    year: "Discovery",
    title: "Understand the business before touching the UI",
    detail: "I map the brand, user flow, offer, and conversion path first so the design is not just attractive, but commercially sharp.",
  },
  {
    year: "Design",
    title: "Shape a premium visual and interaction system",
    detail: "Layouts, motion, hierarchy, typography, and mobile behavior are all designed as one consistent product experience.",
  },
  {
    year: "Build",
    title: "Engineer the frontend and backend stack",
    detail: "I build the UI, API flows, auth, CMS wiring, integrations, and performance systems needed to make the product real.",
  },
  {
    year: "Launch",
    title: "Deploy, optimize, and keep improving",
    detail: "From Vercel deployment to SEO, analytics, and iteration, I treat launch as the start of growth, not the finish line.",
  },
];

const skillCloud = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "Authentication",
  "Database Design",
  "Payments",
  "E-commerce",
  "Tailwind CSS",
  "UI/UX Design",
  "Motion Design",
  "SEO",
  "Vercel",
  "Analytics",
  "Responsive Systems",
];

const testimonials = [
  {
    quote: "Zachary combines design taste with serious technical execution. The result feels premium and performs like a real product.",
    author: "Business Owner",
    role: "E-commerce Founder",
  },
  {
    quote: "The strongest part of working with him is that he can think through the frontend, backend, and conversion strategy in one flow.",
    author: "Startup Team",
    role: "Product Stakeholders",
  },
  {
    quote: "Fast delivery, strong communication, and a polished finish. The experience felt like working with a studio, not just a freelancer.",
    author: "Brand Client",
    role: "Marketing Lead",
  },
];

const trustStats = [
  "Premium UI + full-stack delivery",
  "Mobile-first execution for real-world traffic",
  "SEO, performance, deployment, and support",
  "Built for businesses that want to look serious online",
];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="ambient-bg" aria-hidden="true" />
      <ScrollDepthScene />

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
          <p className="kicker">🇰🇪 Kenya • Ruiru Kamakis • Full-Stack Developer</p>
          <h1>
            I design and engineer premium full-stack digital experiences that feel world-class and perform like serious products.
          </h1>
          <p className="lead">
            I&apos;m Zachary Ndegwa, a full-stack developer and designer building top-tier websites, e-commerce platforms, product interfaces, and backend systems for ambitious brands across Kenya and beyond. Every project is built for performance, clarity, beauty, and business impact.
          </p>

          <div className="hero-ctas">
            <a href="#work" className="btn-primary">
              View Featured Work
            </a>
            <a href="#about" className="btn-secondary">
              My Process
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <span>01</span>
              <p>High-end websites for serious brands</p>
            </div>
            <div>
              <span>02</span>
              <p>Mobile-first UX tuned for real traffic</p>
            </div>
            <div>
              <span>03</span>
              <p>Frontend, backend, database, deployment, SEO, and motion handled end-to-end</p>
            </div>
          </div>

          <div className="hero-grid-3d">
            <article>
              <p>Creative Direction</p>
              <strong>UI that feels alive</strong>
            </article>
            <article>
              <p>Engineering</p>
              <strong>Fast, scalable full-stack systems</strong>
            </article>
            <article>
              <p>Business Impact</p>
              <strong>Products built to convert and scale</strong>
            </article>
          </div>
        </section>

        <section className="image-band wrapper" id="about">
          <div className="portrait-stack">
            <Image
                src="/images/zach.jpeg"
                alt="Zachary Ndegwa - Web Developer & Designer"
              width={800}
              height={1000}
              priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 60vw"
            />
              <div className="portrait-accent">
                <span>Award-Winning Designer</span>
              </div>
          </div>
          <div className="about-copy">
            <h2>Crafted to win. Built to convert.</h2>
            <p>
              I combine strategic design thinking with modern full-stack engineering. Every pixel is intentional, every interaction serves a purpose, and every system behind the UI is built to support speed, reliability, and growth.
            </p>
            <p>
              From concept to launch, I handle UX/UI design, front-end architecture, API workflows, backend features, database planning, performance optimization, SEO, and deployment. Based in Ruiru Kamakis, Kenya, I work with ambitious brands across the globe.
            </p>
          </div>
        </section>

        <ScrollAnimationWrapper>
          <section className="about-premium wrapper" aria-labelledby="about-premium-title">
            <div className="about-premium-copy">
              <p className="eyebrow">About Zachary</p>
              <h2 id="about-premium-title">A premium builder for brands that need more than just a pretty website.</h2>
              <p>
                I work at the intersection of visual design, product thinking, and full-stack engineering. My goal is simple: build digital experiences that look expensive, feel polished, and actually help businesses grow.
              </p>
              <ul className="story-list">
                {storyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="about-premium-side">
              <div className="skills-cloud">
                {skillCloud.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="timeline wrapper" aria-labelledby="timeline-title">
            <div className="timeline-heading">
              <p className="eyebrow">Process</p>
              <h2 id="timeline-title">How I take projects from concept to launch.</h2>
            </div>
            <div className="timeline-grid">
              {timeline.map((item) => (
                <article key={item.year} className="timeline-card">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="fullstack wrapper" aria-labelledby="fullstack-title">
            <div className="fullstack-heading">
              <p className="eyebrow">Full-Stack Capability</p>
              <h2 id="fullstack-title">More than design. I build the product behind the experience.</h2>
              <p>
                Premium UI means nothing if the product underneath is weak. I build beautiful interfaces backed by real engineering: admin tools, APIs, authentication, data models, checkout flows, CMS structures, and deployment pipelines that support real business growth.
              </p>
            </div>

            <div className="stack-grid">
              {stackAreas.map((area) => (
                <article key={area.title} className="stack-card">
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="crawl-wrap" aria-label="Highlights">
            <div className="crawl-track">
              <span>AWARD-WORTHY DESIGN</span>
              <span>•</span>
              <span>3D MOTION</span>
              <span>•</span>
              <span>FULL-STACK ENGINEERING</span>
              <span>•</span>
              <span>KENYA-BASED</span>
              <span>•</span>
              <span>AWARD-WORTHY DESIGN</span>
              <span>•</span>
              <span>3D MOTION</span>
              <span>•</span>
              <span>FULL-STACK ENGINEERING</span>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="work wrapper" id="work">
            <h2>Featured Projects</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <a key={project.title} className="project-card" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <strong>{project.result}</strong>
                  <span className="project-link">View project</span>
                </a>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="case-study wrapper" aria-labelledby="etana-case-study">
            <div className="case-study-copy">
              <p className="eyebrow">Live Work</p>
              <h2 id="etana-case-study">Etana: e-commerce built for wholesale buyers.</h2>
              <p>
                Etana is a conversion-focused commerce platform built around trust, logistics clarity, and bulk procurement. The experience pushes strong category discovery, featured deals, product urgency, and clean checkout entry points for Kenyan buyers.
              </p>
              <div className="case-study-pills">
                <span>Red + white commerce identity</span>
                <span>Bulk order pricing UX</span>
                <span>Mini-cart and fast checkout flow</span>
                <span>Category-led navigation</span>
              </div>
              <ul className="case-study-stats">
                {etanaStats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
              <div className="case-study-actions">
                <a className="btn-primary" href="https://etana-must.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Open Live Site
                </a>
                <a className="btn-secondary" href="#contact">
                  Build My Store
                </a>
              </div>
            </div>

            <div className="case-study-visual">
              <div className="case-study-screen">
                <Image
                  src="/images/etana-home.png"
                  alt="Etana e-commerce homepage screenshot"
                  width={2048}
                  height={1367}
                  sizes="(max-width: 980px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="case-study-float-card">
                <p>Commerce Focus</p>
                <strong>Designed to convert procurement traffic into repeat orders.</strong>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="mobile-design wrapper" aria-labelledby="mobile-design-title">
            <div className="mobile-design-heading">
              <p className="eyebrow">Mobile First</p>
              <h2 id="mobile-design-title">Better mobile design for the audience that matters most.</h2>
              <p>
                In Kenya, mobile is not the fallback. It is the main stage. I design layouts, buttons, forms, and product flows to feel premium on phones first, then scale upward cleanly.
              </p>
            </div>
            <div className="mobile-cards">
              {mobileHighlights.map((item, index) => (
                <article key={item} className="mobile-card">
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
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
          <section className="trust wrapper" aria-labelledby="trust-title">
            <div className="trust-heading">
              <p className="eyebrow">Trust & Proof</p>
              <h2 id="trust-title">Built to earn trust fast and position your brand higher.</h2>
            </div>
            <div className="trust-stats-grid">
              {trustStats.map((stat) => (
                <article key={stat} className="trust-stat-card">
                  <p>{stat}</p>
                </article>
              ))}
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.quote} className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </article>
              ))}
            </div>
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

      <div className="mobile-quick-bar">
        <a href="tel:+254798293831">Call</a>
        <a href="https://wa.me/254798293831?text=Hi%20Zachary,%20I%20want%20a%20website" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="#work">Work</a>
      </div>
    </div>
  );
}

