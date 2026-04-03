import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="top-nav wrapper">
      <Link href="/" className="brand-mark-link" aria-label="Go to homepage">
        <p className="brand-mark">ZACHARY NDEGWA</p>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="site-nav-link">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <Link href="/contact" className="nav-pill">
          Book a Project
        </Link>
      </div>
    </header>
  );
}
