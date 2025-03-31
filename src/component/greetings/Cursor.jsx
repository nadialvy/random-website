import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);
  const scaleAnim = useRef(gsap.timeline({ paused: true }));
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.7,
        delay: 0,
        ease: "power2.out",
      });

      gsap.to(circleRef.current, {
        x,
        y,
        duration: 1.2,
        delay: 0.1,
        ease: "power4.out",
      });
    };

    scaleAnim.current
      .to(cursorRef.current, {
        width: 90,
        height: 24,
        xPercent: -50,
        borderRadius: 3,
        duration: 0.3,
        opacity: 0.7,
        ease: "power2.out",
        cursor: "pointer",
        z: 0,
      })
      .to(
        circleRef.current,
        {
          opacity: 0,
        },
        0
      );

    window.addEventListener("mousemove", moveCursor);

    const target = document.querySelectorAll(".cursor-target");
    if (target) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      target.forEach((target) => {
        target.addEventListener("mouseenter", () => {
          scaleAnim.current.timeScale(1).play();
        });

        target.addEventListener("mouseleave", () => {
          scaleAnim.current.timeScale(2).reverse();
        });
      });
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <div>
        <div
          ref={cursorRef}
          className="fixed hidden lg:block top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
        />
        <div
          ref={circleRef}
          className="fixed hidden lg:block -top-[2%] -left-[1.8%] w-12 h-12 border border-black rounded-full pointer-events-none z-[9998]"
        />
      </div>
    </>
  );
}
