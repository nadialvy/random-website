"use client";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CanvasDraw from "../component/framework/CanvasDraw";

gsap.registerPlugin(ScrollTrigger);

const Framework = () => {
  const drawRef = useRef(null);
  const dogRef = useRef(null);
  const spsRef = useRef(null);
  const roomRef = useRef(null);
  const handRef = useRef(null);
  const polaroidRef = useRef(null);
  const agreementRef = useRef(null);
  const purpleRef = useRef(null);

  useEffect(() => {
    if (
      !drawRef.current ||
      !dogRef.current ||
      !spsRef.current ||
      !roomRef ||
      !handRef ||
      !polaroidRef ||
      !agreementRef ||
      !purpleRef
    ) {
      console.error("One or more refs are null:", {
        draw: drawRef.current,
        dog: dogRef.current,
        sps: spsRef.current,
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: drawRef.current,
        start: "top 60%",
        end: "bottom top",
        markers: true,
        scrub: 1,
      },
    });

    tl.to(drawRef.current, {
      y: -200,
      x: -20,
      ease: "power1.out",
    })
      .to(
        dogRef.current,
        {
          y: -80,
          x: -200,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        spsRef.current,
        {
          y: -100,
          x: 100,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        roomRef.current,
        {
          y: -180,
          x: 100,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        handRef.current,
        {
          y: 20,
          x: 160,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        polaroidRef.current,
        {
          y: 120,
          x: 10,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        agreementRef.current,
        {
          y: 120,
          x: -300,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        purpleRef.current,
        {
          y: 420,
          x: 10,
          ease: "power2.inOut",
        },
        "<"
      );

    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on unmount
    };
  }, []); //

  return (
    <div className="framework">
      <CanvasDraw />

      <div className="relative z-50 w-full min-h-screen overflow-visible">
        <div className="bg-[#20191b] w-full h-[25vh] relative">
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[15.5%] bg-opacity-60 z-0" />
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[40.6%] bg-opacity-60 z-0" />
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-0 bg-opacity-60 z-0" />
        </div>
        <img
          ref={drawRef}
          src="/images/framework/section1-draw.webp"
          alt="draw"
          className=" w-[500px] absolute top-[3%] left-[20%] rotate-[2deg]"
        />
        <img
          ref={dogRef}
          src="/images/framework/section1-dog.webp"
          alt="draw"
          className=" w-[500px] absolute top-[29%] -left-[1%] -rotate-[4deg]"
        />
        <img
          ref={handRef}
          src="/images/framework/section1-hand.webp"
          alt="draw"
          className=" w-[340px] absolute z-0 top-[67%] right-[0%] -rotate-[4deg]"
        />
        <img
          ref={roomRef}
          src="/images/framework/section1-room.webp"
          alt="draw"
          className=" w-[340px] h-[340px] absolute z-10 top-[26%] -right-[10%] rotate-[16deg]"
        />
        <img
          ref={spsRef}
          src="/images/framework/section1-sps.webp"
          alt="draw"
          className=" w-[400px] absolute z-20 top-[12%] right-[10%] -rotate-[2deg]"
        />
        <img
          ref={polaroidRef}
          src="/images/framework/section1-polaroid.webp"
          alt="draw"
          className=" w-[340px] absolute z-0 top-[104%] right-[16%] rotate-[8deg]"
        />
        <img
          ref={agreementRef}
          src="/images/framework/section1-agreement.webp"
          alt="draw"
          className=" w-[340px] absolute z-0 top-[70%] left-[6%] rotate-[8deg]"
        />
        <img
          ref={purpleRef}
          src="/images/framework/section1-purple.webp"
          alt="draw"
          className=" w-[340px] absolute z-0 top-[74%] left-[18%]"
        />
      </div>
    </div>
    // <div className="min-h-screen bg-blue-300 my-[500px]">ahhaha</div>
  );
};

export default Framework;
