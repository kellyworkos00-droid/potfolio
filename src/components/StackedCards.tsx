'use client';

import { useEffect, useRef } from 'react';

const cards = [
  {
    label: "01 — Discovery",
    title: "Understand the business first",
    body: "Before any design or code, I map your brand, audience, conversion path, and competitive landscape so every decision is commercially intentional.",
    accent: "#ff7a3a",
  },
  {
    label: "02 — Design",
    title: "Build a premium visual system",
    body: "Layouts, typography, motion, hierarchy, and mobile behaviour are shaped as a single cohesive product — not a page assembled from templates.",
    accent: "#2fa7ff",
  },
  {
    label: "03 — Engineering",
    title: "Full-stack product execution",
    body: "I build the front-end, APIs, authentication, database flows, CMS wiring, checkout logic, and deployment pipelines that make the product real and scalable.",
    accent: "#a78bfa",
  },
  {
    label: "04 — Launch & Growth",
    title: "Ship, optimise, and iterate",
    body: "Deployment, SEO, performance tuning, analytics, and continuous improvement. Launch is the start of growth — not the end of the project.",
    accent: "#34d399",
  },
];

export function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>('.sc-card'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('sc-card--visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sc-section wrapper" aria-labelledby="sc-title" ref={containerRef}>
      <div className="sc-heading">
        <p className="eyebrow">How I Work</p>
        <h2 id="sc-title">Four phases. One seamless delivery.</h2>
      </div>

      <div className="sc-stack">
        {cards.map((card, i) => (
          <div
            key={card.label}
            className="sc-card"
            style={{
              '--card-accent': card.accent,
              '--card-index': i,
            } as React.CSSProperties}
          >
            <span className="sc-card-label">{card.label}</span>
            <h3 className="sc-card-title">{card.title}</h3>
            <p className="sc-card-body">{card.body}</p>
            <div className="sc-card-bar" />
          </div>
        ))}
      </div>
    </section>
  );
}
