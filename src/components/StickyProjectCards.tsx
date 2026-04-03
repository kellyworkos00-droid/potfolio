'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PROJECTS = [
  {
    num: '01',
    category: 'E-Commerce · Wholesale Platform',
    title: 'Etana E-Commerce Platform',
    description:
      'A conversion-focused commerce platform built around trust, logistics clarity, and bulk procurement. Strong category discovery, featured deals, and a clean checkout for Kenyan buyers.',
    tags: ['Next.js', 'E-Commerce', 'UX Systems', 'Kenya'],
    href: 'https://etana-must.vercel.app/',
    image: '/images/etana-home.png',
    accent: '#ff7a3a',
    darkBg: '#110906',
  },
  {
    num: '02',
    category: 'Industrial E-Commerce · Trade Platform',
    title: 'Sali Products Kenya',
    description:
      'A full-featured trade platform for Kenya\'s tools and machinery sector. 5,000+ products, search, wishlist, cart, and accounts — all optimised for mobile-first buyers.',
    tags: ['Next.js', 'Product Catalogue', 'Cart & Accounts', 'Mobile-First'],
    href: 'https://sali-lygt.vercel.app/',
    image: '/images/sali-home.png',
    accent: '#2fa7ff',
    darkBg: '#040b12',
  },
  {
    num: '03',
    category: 'Luxury Brand · Interior Design Studio',
    title: 'Eterna Interiors Hub',
    description:
      'A premium multi-page brand site for a Nairobi luxury interior design firm. Portfolio gallery, testimonials, newsletter, and consultation booking — reflecting a white-glove ethos.',
    tags: ['Next.js', 'Luxury Design', 'Portfolio Gallery', 'Booking Flow'],
    href: 'https://eternakelly.vercel.app/',
    image: '/images/eterna-home.png',
    accent: '#c4a35a',
    darkBg: '#0e0b06',
  },
];

export function StickyProjectCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>('.spj-card')
    );

    const update = () => {
      const VH = window.innerHeight;
      cards.forEach((card, i) => {
        // The last card never needs to be scaled down
        if (i >= cards.length - 1) {
          card.style.transform = '';
          card.style.filter = '';
          return;
        }
        const nextCard = cards[i + 1];
        const nextTop = nextCard.getBoundingClientRect().top;

        // 0 = next card not yet visible;  1 = next card fully covering this card
        const cover = 1 - Math.max(0, Math.min(1, nextTop / VH));

        if (cover > 0) {
          const scale   = (1 - cover * 0.07).toFixed(4);
          const bright  = (1 - cover * 0.35).toFixed(4);
          const radius  = (cover * 20).toFixed(1);
          card.style.transform    = `scale(${scale})`;
          card.style.filter       = `brightness(${bright})`;
          card.style.borderRadius = `${radius}px`;
        } else {
          card.style.transform    = '';
          card.style.filter       = '';
          card.style.borderRadius = '';
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="spj-section"
      id="work"
      aria-labelledby="spj-heading"
    >
      <div className="spj-intro wrapper">
        <p className="eyebrow">Featured Work</p>
        <h2 id="spj-heading">Projects built for real impact.</h2>
        <p className="spj-intro-sub">Scroll to explore each project.</p>
      </div>

      {PROJECTS.map((p, i) => (
        <div key={p.title} className="spj-pin">
          <article
            className="spj-card"
            style={
              {
                '--spj-accent': p.accent,
                '--spj-dark-bg': p.darkBg,
                '--spj-z': i + 1,
              } as React.CSSProperties
            }
          >
            <div className="spj-card-inner wrapper">
              {/* ── Left: text ── */}
              <div className="spj-card-left">
                <div className="spj-meta">
                  <span className="spj-num">{p.num}</span>
                  <span className="spj-cat">{p.category}</span>
                </div>

                <h3 className="spj-title">{p.title}</h3>
                <p className="spj-desc">{p.description}</p>

                <div className="spj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  className="spj-cta"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site ↗
                </a>
              </div>

              {/* ── Right: screenshot ── */}
              <div className="spj-card-right">
                <div className="spj-img-frame">
                  <Image
                    src={p.image}
                    alt={`${p.title} live site screenshot`}
                    width={2048}
                    height={1367}
                    sizes="(max-width: 980px) 100vw, 58vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}
