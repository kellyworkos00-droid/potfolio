'use client';

import RippleGrid from './RippleGrid';

export function HeroRipple() {
  return (
    <RippleGrid
      gridColor="#ff7a3a"
      gridSize={9}
      gridThickness={18}
      rippleIntensity={0.06}
      glowIntensity={0.15}
      opacity={0.55}
      vignetteStrength={2.5}
      mouseInteraction
    />
  );
}
