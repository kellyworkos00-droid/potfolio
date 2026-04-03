'use client';

import { useEffect } from 'react';

export function ScrollDepthScene() {
  useEffect(() => {
    let ticking = false;

    const updateDepth = () => {
      const scrollTop = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollTop / maxScroll, 1);
      const drift = Math.sin(scrollTop / 280) * 12;

      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
      document.documentElement.style.setProperty('--scroll-drift', `${drift.toFixed(2)}px`);
      document.documentElement.style.setProperty('--scroll-shift', `${(progress * 180).toFixed(2)}px`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDepth);
        ticking = true;
      }
    };

    updateDepth();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-depth-scene" aria-hidden="true">
      <span className="depth-orb depth-orb-one" />
      <span className="depth-orb depth-orb-two" />
      <span className="depth-grid" />
    </div>
  );
}