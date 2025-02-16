"use client";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CanvasDraw from "../component/framework/CanvasDraw";
import SmoothScrolling from "../component/SmoothScrolling";
import AnimatedSVG from "../component/framework/AnimatedSVG";

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
        start: "bottom 60%",
        end: "bottom",
        markers: true,
        // scrub: 1,
        onEnter: () => tl.play(), // 🔥 Plays animation when scrolling down
        onLeaveBack: () => tl.reverse(),
        onUpdate: (self) => {
          if (self.direction === -1) {
            tl.reverse();
          }
        },
      },
    });

    tl.to(drawRef.current, {
      y: -200,
      x: -20,
      ease: "none",
      duration: 1,
    })
      .to(
        dogRef.current,
        {
          y: -80,
          x: -200,
          ease: "none",
          duration: 0.7,
        },

        "<"
      )
      .to(
        spsRef.current,
        {
          y: -100,
          x: 100,
          ease: "power2.inOut",
          duration: 1,
        },
        "<"
      )
      .to(
        roomRef.current,
        {
          y: -30,
          x: 100,
          ease: "power2.out",
          duration: 1.2,
          delay: 0.5
        },
        "<"
      )
      .to(
        handRef.current,
        {
          y: 20,
          x: 160,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        polaroidRef.current,
        {
          y: 140,
          x: 10,
          ease: "power4.inOut",
          clipPath: "inset(0% 0% 100vh 0%)",
          opacity: 0,
          duration: 2,
        },
        "<"
      )
      .to(
        agreementRef.current,
        {
          y: 320,
          x: -200,
          ease: "power2.inOut",
          clipPath: "inset(0% 0% 100vh 0%)",
          opacity: 0,
          duration: 2,
        },
        "<"
      )
      .to(
        purpleRef.current,
        {
          y: 420,
          x: 40,
          ease: "power4.inOut",
          clipPath: "inset(0% 0% 100vh 0%)",
          opacity: 0,
          duration: 3,
        },
        "<"
      );

    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on unmount
    };
  }, []); //

  return (
    <SmoothScrolling>
      <div className="framework">
        <CanvasDraw />
        <div className="relative z-50 w-full flex-grow min-h-[120vh] flex flex-col overflow-visible debug-red">
          <div className="debug-purple min-h-[120vh] w-full z-0 relative">
            <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[30.5%] bg-opacity-60 z-0" />
            <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[30.6%] bg-opacity-60 z-0" />
            <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[40%] bg-opacity-60 z-0" />
            <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[60%] bg-opacity-60 z-0" />
            <div className="flex flex-col -ml-[8%] mt-[23%] justify-center items-center">
              <div className="flex flex-col  text-[40px] font-semibold">
                <p className="text-[64px] overflow-hidden">How we all</p>
                <p className="-mt-11 text-[64px] overflow-hidden">
                  work today is
                </p>
                <div className="-mt-16 p-6 text-[64px] relative overflow-hidden">
                  <p className="overflow-hidden">messy</p>
                  <div className=" -mt-20 -ml-[50%] ">
                    <AnimatedSVG />
                  </div>
                  {/* <svg
                    viewBox="0 0 241 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M136.312 5.36757C121.141 3.18061 105.259 3.35023 89.4749 3.35023C78.8142 3.35023 67.6107 3.69543 57.8105 5.53568C46.3147 7.69434 35.4387 9.44345 26.9943 13.3996C21.3741 16.0326 16.4391 19.1871 12.9527 22.3282C8.59577 26.2536 4 30.2672 4 34.6003C4 38.152 4.2907 41.4473 6.92141 44.8738C13.0054 52.7983 27.1666 59.6793 44.6642 64.188C53.429 66.4464 63.2056 68.387 72.8888 69.9224C84.4805 71.7605 96.7765 73.7587 108.888 74.779C118.336 75.5749 128.044 75.302 137.678 75.302C150.884 75.302 164.422 75.4623 177.211 73.9571C191.574 72.2668 206.755 66.5797 214.342 61.5916C232.69 49.5277 248.183 31.7982 227.724 18.6671C221.808 14.8702 195.655 8.12268 172.926 8.12268"
                      stroke="#0061FE"
                      strokeWidth="6.13235"
                      strokeLinecap="round"
                      style={{ strokeDashoffset: 0 }}
                    />
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
          <img
            ref={drawRef}
            src="/images/framework/section1-draw.webp"
            alt="draw"
            className="z-30 w-[580px] absolute -top-[18%] pointer-events-none left-[17%] rotate-[2deg]"
          />
          <img
            ref={dogRef}
            src="/images/framework/section1-dog.webp"
            alt="draw"
            className="z-30 w-[500px] absolute top-[4%] -left-[1%]  -rotate-[4deg]"
          />
          <img
            ref={handRef}
            src="/images/framework/section1-hand.webp"
            alt="draw"
            className="z-30 w-[400px] absolute top-[34%] -right-[2%] -rotate-[4deg]"
          />
          <img
            ref={roomRef}
            src="/images/framework/section1-room.webp"
            alt="draw"
            className="z-20 w-[340px] h-[340px] absolute top-0 -right-[10%] rotate-[16deg]"
          />
          <img
            ref={spsRef}
            src="/images/framework/section1-sps.webp"
            alt="draw"
            className="z-30 w-[400px] absolute -top-[12%] right-[10%] -rotate-[2deg]"
          />
          <img
            ref={polaroidRef}
            src="/images/framework/section1-polaroid.webp"
            alt="draw"
            className="z-30 w-[340px] absolute top-[70%] right-[16%] rotate-[8deg]"
          />
          <img
            ref={agreementRef}
            src="/images/framework/section1-agreement.webp"
            alt="draw"
            className="z-30 w-[340px] absolute top-[50%] left-[2%] rotate-[8deg]"
          />
          <img
            ref={purpleRef}
            src="/images/framework/section1-purple.webp"
            alt="draw"
            className="z-30 w-[340px] absolute top-[64%] left-[18%]"
          />
        </div>
      </div>
    </SmoothScrolling>
    // <div className="min-h-screen bg-blue-300 my-[500px]">ahhaha</div>
  );
};

export default Framework;
