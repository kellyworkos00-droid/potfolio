import Image from "next/image";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { TechLogos } from "@/components/TechLogos";
import { projects, services, testimonials } from "@/lib/siteData";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-zachary.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zachary Ndegwa",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer in Kenya specializing in premium websites, e-commerce systems, and scalable web applications.",
    url: siteUrl,
    image: `${siteUrl}/images/zach.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ruiru Kamakis",
      addressCountry: "KE",
    },
    telephone: "+254798293831",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "API Development",
      "E-commerce Development",
      "UI/UX Design",
      "Web Performance",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main>
        <section className="hero wrapper">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="kicker">Kenya • Ruiru Kamakis • Full-Stack Developer</p>
              <p className="lead">
                I build fast, high-end web experiences for ambitious brands. Clear UX, strong conversion thinking, solid backend systems, and launch-ready execution from strategy to deployment.
              </p>

              <div className="hero-ctas">
                <Link href="/projects" className="btn-primary">
                  View Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start a Project
                </Link>
              </div>

              <div className="hero-proof-strip" aria-label="Hero proof points">
                <span>Next.js builds</span>
                <span>Full-stack delivery</span>
                <span>Performance-first</span>
                <span>Kenya-based</span>
              </div>

              <div className="hero-metrics">
                <div>
                  <span>01</span>
                  <p>Premium websites for serious brands</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Full-stack delivery from UI to backend</p>
                </div>
                <div>
                  <span>03</span>
                  <p>SEO, performance, deployment, and growth support</p>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Selected work snapshot">
              <div className="hero-visual-frame">
                <div className="hero-visual-header">
                  <p>Selected Work Snapshot</p>
                  <span>3 live builds</span>
                </div>

                <div className="hero-feature-card">
                  <div>
                    <p>{projects[0].focusLabel}</p>
                    <h2>{projects[0].title}</h2>
                    <strong>{projects[0].focusText}</strong>
                  </div>
                  <a href={projects[0].href} target="_blank" rel="noopener noreferrer">
                    Open site
                  </a>
                </div>

                <div className="hero-mini-projects">
                  {projects.slice(1).map((project) => (
                    <article key={project.slug} className="hero-mini-card">
                      <p>{project.title}</p>
                      <strong>{project.focusLabel}</strong>
                    </article>
                  ))}
                </div>

                <div className="hero-visual-footer">
                  <div>
                    <span>Services</span>
                    <strong>Web, e-commerce, backend, SEO</strong>
                  </div>
                  <div>
                    <span>Approach</span>
                    <strong>Design-led, conversion-aware, production-ready</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="image-band wrapper home-split" id="about">
          <div className="portrait-stack">
            <Image
              src="/images/zach.jpeg"
              alt="Zachary Ndegwa - Web Developer & Designer"
              width={800}
              height={1000}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="portrait-accent">
              <span>Full-Stack Builder</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>Built for brands that need more than a nice homepage.</h2>
            <p>
              I combine visual design, product thinking, and engineering discipline to create websites and web products that look premium and perform like serious business tools.
            </p>
            <div className="hero-ctas">
              <Link href="/about" className="btn-secondary">
                Read More About Me
              </Link>
            </div>
          </div>
        </section>

        <TechLogos />

        <ScrollAnimationWrapper>
          <section className="work wrapper" aria-labelledby="home-projects-title">
            <div className="section-head">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2 id="home-projects-title">A focused preview of recent builds.</h2>
              </div>
              <Link href="/projects" className="section-link">
                See full project details
              </Link>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.slug} className="project-card">
                  <p>{project.focusLabel}</p>
                  <h3>{project.title}</h3>
                  <strong>{project.description}</strong>
                  <div className="project-card-actions">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live site
                    </a>
                    <Link href="/projects" className="project-link">
                      Case study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="services wrapper" aria-labelledby="home-services-title">
            <div className="section-head">
              <div>
                <p className="eyebrow">Services & Expertise</p>
                <h2 id="home-services-title">What I help businesses build.</h2>
              </div>
              <Link href="/services" className="section-link">
                View all services
              </Link>
            </div>
            <ul>
              {services.slice(0, 6).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section className="trust wrapper" aria-labelledby="home-proof-title">
            <div className="trust-heading">
              <p className="eyebrow">Proof</p>
              <h2 id="home-proof-title">A small sample of how clients describe the work.</h2>
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
          <section className="contact wrapper home-cta-panel" aria-labelledby="home-cta-title">
            <p className="eyebrow">Next Step</p>
            <h2 id="home-cta-title">Need the full story? The details now live on dedicated pages.</h2>
            <p>
              Browse the projects, services, about page, or go straight to contact if you already know what you need.
            </p>
            <div className="hero-ctas">
              <Link href="/projects" className="btn-primary">
                Open Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Zachary
              </Link>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </main>
    </>
  );
}
