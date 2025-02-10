"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04, // Adjusts inertia smoothness (lower = heavier)
        duration: 5, // Adjusts how long it takes to stop (higher = weightier)
        smoothTouch: true, // Makes mobile touch scrolling smoother
        wheelMultiplier: 1.2, // Makes mouse scroll feel heavier
        touchMultiplier: 1.5, // Makes touch scroll more natural
        infinite: false, // Prevents infinite looping
        ease: (t) => 1 - (1 - t) ** 3.5, // Custom easing for bounce
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
