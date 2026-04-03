import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contactNumbers } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact | Zachary Ndegwa",
  description: "Contact Zachary Ndegwa for premium website, e-commerce, and full-stack product work.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero wrapper">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk about the build.</h1>
        <p>
          If you need a website, store, admin system, redesign, or product interface, send the details here and I&apos;ll respond with the clearest next step.
        </p>
      </section>

      <section className="contact wrapper page-contact-grid" id="contact">
        <div className="contact-info contact-info-panel">
          <p><strong>Call or WhatsApp</strong></p>
          <ul className="contact-list">
            {contactNumbers.map((number) => (
              <li key={number}>
                <a href={`tel:${number.replace(/\s+/g, "")}`}>{number}</a>
              </li>
            ))}
          </ul>
          <p><strong>Location</strong></p>
          <p>Ruiru Kamakis, Kenya</p>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
