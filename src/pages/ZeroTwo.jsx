import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZeroTwo() {
  const zerotwoRef = useRef(null);
  const containerRef = useRef(null);
  const lollipopRef = useRef(null);
  const navbarRef = useRef(null);
  const firstDanceRef = useRef(null);
  const descRef = useRef(null);
  const contactMeRef = useRef(null);
  const sosmedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!zerotwoRef.current || !lollipopRef.current) return;
      gsap.set(lollipopRef.current, { autoAlpha: 0 });
      gsap.set(navbarRef.current, { autoAlpha: 0 });
      gsap.set(firstDanceRef.current, { autoAlpha: 0 });
      gsap.set(descRef.current, { autoAlpha: 0 });
      gsap.set(contactMeRef.current, { autoAlpha: 0 });
      gsap.set(sosmedRef.current, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=80",
          pin: true,
          scrub: 2,
        },
      });

      tl.to(zerotwoRef.current, {
        scale: 0.8,
        ease: "none",
      })
        .to(zerotwoRef.current, {
          x: 70,
          y: -80,
          ease: "none",
          duration: 0.7,
        })
        .to(zerotwoRef.current, {
          scale: 0.9,
          ease: "none",
        })
        .to(
          lollipopRef.current,
          {
            autoAlpha: 1,
          },
          "-=0.1"
        )
        .to(
          lollipopRef.current,
          {
            autoAlpha: 1,
            width: 600,
            height: 370,
            x: -599,
            y: -130,
            ease: "power1.inOut",
            duration: 0.9,
          },
          "<"
        )
        .to(
          navbarRef.current,
          {
            autoAlpha: 1,
            width: 1430,
            height: 80,
            x: -668,
            y: -90,
            ease: "none",
            duration: 0.6,
            delay: 0.3,
          },
          "<"
        )
        .to(
          firstDanceRef.current,
          {
            autoAlpha: 1,
            width: 538,
            height: 480,
            x: 508,
            y: -102,
            ease: "none",
            duration: 0.6,
          },
          "<"
        )
        .to(
          descRef.current,
          {
            autoAlpha: 1,
            width: 360,
            height: 190,
            x: -324,
            y: 180,
            ease: "none",
            duration: 0.6,
          },
          "<"
        )
        .to(
          contactMeRef.current,
          {
            autoAlpha: 1,
            width: 480,
            height: 190,
            x: -296,
            y: 210,
            ease: "none",
            duration: 0.6,
          },
          "<"
        )
        .to(
          sosmedRef.current,
          {
            autoAlpha: 1,
            width: 530,
            height: 80,
            x: 6,
            y: 150,
            ease: "none",
            duration: 0.39,
            delay: 0.2,
          },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen overflow-hidden bg-[#2E2824] zerotwocontainer"
    >
      <div className="relative w-full min-h-screen">
        <img
          ref={zerotwoRef}
          src="/images/zero-two/zerotwo.png"
          alt="zerotwo"
          className="absolute z-20 top-[24%] left-[36%] w-[340px] zerotwo"
        />
        <div
          ref={lollipopRef}
          className="w-[120px] z-0 absolute top-[34%] left-[42.6%] h-[108px] rounded-[24px] bg-[#F5E3D9]"
        >
          {}
        </div>
        <div
          ref={navbarRef}
          className="w-[160px] z-0 absolute top-[14.6%] left-[47%] h-[10px] rounded-[16px] bg-[#F5E3D9]"
        >
          {}
        </div>
        <div
          ref={firstDanceRef}
          className="w-[140px] z-0 absolute top-[30.6%] right-[36%] h-[240px] rounded-[24px] bg-[#F5E3D9]"
        >
          {}
        </div>
        <div
          ref={descRef}
          className="w-[10px] z-0 absolute bottom-[28%] left-[24%] h-[20px] rounded-[20px] bg-[#F5E3D9]"
        >
          {}
        </div>
        <div
          ref={contactMeRef}
          className="w-[100px] z-0 absolute bottom-[32%] left-[48%] h-[100px] rounded-[20px] bg-[#F5E3D9]"
        >
          {}
        </div>
        <div
          ref={sosmedRef}
          className="w-[20px] z-0 absolute bottom-[25%] left-[62%] h-[20px] rounded-[16px] bg-[#F5E3D9]"
        >
          {}
        </div>
      </div>
    </div>
  );
}
