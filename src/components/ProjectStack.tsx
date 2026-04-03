import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/siteData";

export function ProjectStack({ compact = false }: { compact?: boolean }) {
  return (
    <section className="case-study-stack" id="work" aria-labelledby="featured-work-title">
      <div className="wrapper case-study-stack-intro">
        <p className="eyebrow">Featured Work</p>
        <h2 id="featured-work-title">
          {compact ? "Selected work with the full story behind each build." : "One scrolling showcase. The real projects only."}
        </h2>
        <p>
          {compact
            ? "Open the live sites, review the positioning, and see how each product was shaped for its audience."
            : "Scroll through the live work and each case study will stack over the previous one."}
        </p>
      </div>

      {projects.map((project) => (
        <div key={project.slug} className="case-study-stack-pin">
          <section
            className={`case-study wrapper case-study-stack-card${project.reverse ? " case-study--reverse" : ""}`}
            aria-labelledby={`${project.slug}-title`}
          >
            <div className="case-study-copy">
              <p className="eyebrow">Live Work</p>
              <h2 id={`${project.slug}-title`}>{project.headline}</h2>
              <p>{project.description}</p>
              <div className="case-study-pills">
                {project.pills.map((pill) => (
                  <span key={pill}>{pill}</span>
                ))}
              </div>
              <ul className="case-study-stats">
                {project.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
              <div className="case-study-actions">
                <a className="btn-primary" href={project.href} target="_blank" rel="noopener noreferrer">
                  Open Live Site
                </a>
                <LinkButton href="/contact" label={project.cta} />
              </div>
            </div>

            <div className="case-study-visual">
              <div className="case-study-screen">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={2048}
                  height={1367}
                  sizes="(max-width: 980px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="case-study-float-card">
                <p>{project.focusLabel}</p>
                <strong>{project.focusText}</strong>
              </div>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link className="btn-secondary" href={href}>
      {label}
    </Link>
  );
}
