"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04, // (lower = heavier)
        duration: 5, // (higher = weightier)
        smoothTouch: true,
        wheelMultiplier: 1.1, // Makes mouse scroll feel heavier
        touchMultiplier: 1.2, // Makes touch scroll more natural
        infinite: false, // Prevents infinite looping
        ease: (t) => 1 - (1 - t) ** 4, // Custom easing for bounce
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
