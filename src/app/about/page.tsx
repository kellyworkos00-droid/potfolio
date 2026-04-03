import type { Metadata } from "next";
import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { TechLogos } from "@/components/TechLogos";
import { skillCloud, storyPoints, timeline, testimonials } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "About | Zachary Ndegwa",
  description: "Learn about Zachary Ndegwa, his process, his technical range, and how he approaches premium digital product work.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero wrapper">
        <p className="eyebrow">About</p>
        <h1>A full-stack developer with design judgment.</h1>
        <p>
          I work across strategy, UI, frontend architecture, backend systems, and launch execution. The goal is always the same: ship something beautiful that also works commercially.
        </p>
      </section>

      <section className="image-band wrapper home-split">
        <div className="portrait-stack">
          <Image
            src="/images/zach.jpeg"
            alt="Zachary Ndegwa portrait"
            width={800}
            height={1000}
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="portrait-accent">
            <span>Ruiru Kamakis, Kenya</span>
          </div>
        </div>
        <div className="about-copy">
          <h2>Built at the intersection of clarity, design, and engineering.</h2>
          <p>
            I care about strong first impressions, clean content hierarchy, fast performance, and backend systems that do their job quietly and reliably.
          </p>
        </div>
      </section>

      <ScrollAnimationWrapper>
        <section className="about-premium wrapper">
          <div className="about-premium-copy">
            <p className="eyebrow">Approach</p>
            <h2>I build products that look expensive and behave properly.</h2>
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

      <TechLogos />

      <ScrollAnimationWrapper>
        <section className="timeline wrapper" aria-labelledby="about-timeline-title">
          <div className="timeline-heading">
            <p className="eyebrow">Process</p>
            <h2 id="about-timeline-title">How I take work from idea to launch.</h2>
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
        <section className="trust wrapper" aria-labelledby="about-testimonials-title">
          <div className="trust-heading">
            <p className="eyebrow">Client Perspective</p>
            <h2 id="about-testimonials-title">What working with me feels like.</h2>
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
    </main>
  );
}
