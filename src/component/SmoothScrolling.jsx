"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 5,
        smoothTouch: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.2,
        infinite: false,
        ease: (t) => 1 - (1 - t) ** 4,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
