import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer wrapper">
      <div>
        <p className="site-footer-eyebrow">Zachary Ndegwa</p>
        <h2>Premium web experiences built in Kenya.</h2>
        <p>
          Full-stack websites, e-commerce systems, and polished digital products for ambitious brands.
        </p>
      </div>
      <div className="site-footer-links">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
