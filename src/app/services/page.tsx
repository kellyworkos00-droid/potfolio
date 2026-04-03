import type { Metadata } from "next";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { mobileHighlights, services, stackAreas } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Services | Zachary Ndegwa",
  description: "Full-stack web development services covering design, frontend, backend, e-commerce, performance, and launch support.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero wrapper">
        <p className="eyebrow">Services & Expertise</p>
        <h1>From premium interface design to backend execution.</h1>
        <p>
          I work across the full product surface: design, engineering, content structure, checkout flows, integrations, performance, and deployment.
        </p>
      </section>

      <ScrollAnimationWrapper>
        <section className="services wrapper">
          <h2>Core services</h2>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <section className="fullstack wrapper" aria-labelledby="services-stack-title">
          <div className="fullstack-heading">
            <p className="eyebrow">Capability</p>
            <h2 id="services-stack-title">The technical layers I cover.</h2>
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
        <section className="mobile-design wrapper" aria-labelledby="services-mobile-title">
          <div className="mobile-design-heading">
            <p className="eyebrow">Mobile First</p>
            <h2 id="services-mobile-title">Built for the devices your users actually hold.</h2>
            <p>
              Mobile behaviour is not an afterthought. It is one of the main performance and conversion drivers for businesses in this market.
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
        <section className="contact wrapper home-cta-panel">
          <p className="eyebrow">Need this for your brand?</p>
          <h2>Let&apos;s scope the right build for your business.</h2>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Contact Zachary
            </Link>
            <Link href="/projects" className="btn-secondary">
              Review Projects
            </Link>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </main>
  );
}
