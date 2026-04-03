import type { Metadata } from "next";
import { ProjectStack } from "@/components/ProjectStack";

export const metadata: Metadata = {
  title: "Projects | Zachary Ndegwa",
  description: "Detailed project case studies covering e-commerce, premium brand websites, and full-stack product execution.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero wrapper">
        <p className="eyebrow">Projects</p>
        <h1>Detailed project work, not just screenshots.</h1>
        <p>
          A closer look at the products, interfaces, and business-focused systems I have built across commerce, brand, and service businesses.
        </p>
      </section>
      <ProjectStack compact />
    </main>
  );
}
