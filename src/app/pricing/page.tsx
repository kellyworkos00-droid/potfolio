import type { Metadata } from "next";
import Link from "next/link";

const plans = [
  {
    name: "Starter Website",
    price: "Ksh 25,000",
    audience: "For individuals and small businesses",
    features: [
      "Up to 5 pages",
      "Responsive mobile design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "1 revision round",
    ],
    cta: "Start Starter Plan",
    highlight: false,
  },
  {
    name: "Business Pro",
    price: "Ksh 45,000",
    audience: "For growing brands that need stronger conversion",
    features: [
      "Up to 10 pages",
      "Premium UI/UX design system",
      "Advanced SEO setup",
      "WhatsApp + analytics integration",
      "2 revision rounds",
    ],
    cta: "Start Business Pro",
    highlight: true,
  },
  {
    name: "E-Commerce / Custom",
    price: "From Ksh 85,000",
    audience: "For stores and custom full-stack systems",
    features: [
      "Custom architecture and features",
      "Product or service checkout flows",
      "Backend/API integration",
      "Performance and scaling setup",
      "Priority support after launch",
    ],
    cta: "Request Custom Quote",
    highlight: false,
  },
];

export const metadata: Metadata = {
  title: "Pricing | Zachary Ndegwa",
  description: "Website and full-stack pricing plans starting from Ksh 25,000.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero wrapper">
        <p className="eyebrow">Pricing</p>
        <h1>Transparent packages starting from Ksh 25,000.</h1>
        <p>
          Choose the package that fits your stage. Every build includes clean code, responsive behavior, and conversion-focused execution.
        </p>
      </section>

      <section className="pricing wrapper" aria-labelledby="pricing-title">
        <h2 id="pricing-title">Choose your build level</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card${plan.highlight ? " pricing-card--highlight" : ""}`}>
              <p className="pricing-audience">{plan.audience}</p>
              <h3>{plan.name}</h3>
              <div className="pricing-price">{plan.price}</div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="/contact" className={plan.highlight ? "btn-primary" : "btn-secondary"}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
