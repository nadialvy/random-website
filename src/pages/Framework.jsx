"use client";
import { useRef, useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CanvasDraw from "../component/framework/CanvasDraw";
import SmoothScrolling from "../component/SmoothScrolling";
import AnimatedSVG from "../component/framework/AnimatedSVG";

gsap.registerPlugin(ScrollTrigger);

const thePillars = ["humanity", "clarity", "actions", "delight"];

const Framework = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const drawRef = useRef(null);
  const dogRef = useRef(null);
  const spsRef = useRef(null);
  const roomRef = useRef(null);
  const handRef = useRef(null);
  const polaroidRef = useRef(null);
  const agreementRef = useRef(null);
  const purpleRef = useRef(null);
  const bethRef = useRef(null);
  const trinaRef = useRef(null);
  useEffect(() => {
    if (
      !drawRef.current ||
      !dogRef.current ||
      !spsRef.current ||
      !roomRef ||
      !handRef ||
      !polaroidRef ||
      !agreementRef ||
      !purpleRef ||
      !bethRef ||
      !trinaRef
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
        start: "center 10%",
        end: "+=500px",
        scrub: 4,
      },
    });

    tl.to(drawRef.current, {
      y: -300,
      x: -60,
      ease: "none",
      duration: 3,
    })
      .to(
        dogRef.current,
        { y: -210, x: -510, ease: "none", duration: 2.8 },
        "<"
      )
      .to(spsRef.current, { y: -300, x: 190, ease: "none", duration: 2.5 }, "<")
      .to(
        bethRef.current,
        { y: -230, x: 190, ease: "none", duration: 2.5 },
        "<"
      )
      .to(roomRef.current, { y: -30, x: 400, ease: "none", duration: 2.4 }, "<")
      .to(handRef.current, { y: 70, x: 700, ease: "none", duration: 2.6 }, "<")
      .to(
        polaroidRef.current,
        { y: 140, x: 490, ease: "none", duration: 3.2 },
        "<"
      )
      .to(
        purpleRef.current,
        { y: 130, x: -600, ease: "none", duration: 3 },
        "<"
      )
      .to(
        agreementRef.current,
        { y: 430, x: -400, ease: "none", duration: 3 },
        "<"
      )
      .to(
        trinaRef.current,
        { y: 430, x: -440, ease: "none", duration: 3 },
        "<"
      );

    gsap.to(agreementRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "none",
      duration: 2.5,
      scrollTrigger: {
        trigger: agreementRef.current,
        start: "center top",
        end: "+=200",
        scrub: 2.5,
      },
    });

    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); 

  return (
    <SmoothScrolling>
      <div className="framework">
        <CanvasDraw />
        <div className="relative -mt-1 z-50 w-full overflow-visible">
          <div className="lg:min-h-[110vh] min-h-[100vh] w-full z-0 relative">
            <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[30.5%] bg-opacity-60 z-0" />
            <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[30.6%] bg-opacity-60 z-0" />
            <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[40%] bg-opacity-60 z-0" />
            <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[60%] bg-opacity-60 z-0" />
            <div className="flex flex-col -ml-[8%] lg:mt-[23%] mt-[30%] justify-center items-center">
              <div className="flex flex-col  text-[40px] font-semibold">
                <p className="lg:text-[64px] text-[32px] overflow-hidden">
                  How we all
                </p>
                <p className="lg:-mt-11 lg:text-[64px] text-[32px] overflow-hidden">
                  work today is
                </p>
                <div className="lg:-mt-16 -mt-8 p-6 lg:text-[64px] text-[32px] relative overflow-hidden">
                  <p className="overflow-hidden">messy</p>
                  <div className="-mt-[26%]  lg:-mt-20 -ml-[38%] lg:-ml-[50%] ">
                    <AnimatedSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            ref={drawRef}
            src="/images/framework/section1-draw.webp"
            alt="draw"
            className="z-30 w-[580px] max-lg:w-[70%] absolute -top-[18%] pointer-events-none left-[17%] rotate-[2deg]"
          />
          <img
            ref={dogRef}
            src="/images/framework/section1-dog.webp"
            alt="draw"
            className="z-30 w-[500px] max-lg:w-[44%] absolute lg:top-[4%] -top-[2%] lg:-left-[1%] -left-[14%]  -rotate-[4deg]"
          />
          <img
            ref={handRef}
            src="/images/framework/section1-hand.webp"
            alt="draw"
            className="z-30 w-[400px] max-lg:w-[40%] absolute top-[34%] -right-[2%] -rotate-[4deg]"
          />
          <img
            ref={roomRef}
            src="/images/framework/section1-room.webp"
            alt="draw"
            className="z-20 w-[340px] max-lg:w-32 lg:h-[340px] h-[200px] absolute lg:top-0 top-[10%] -right-[10%] lg:-right-[10%] rotate-[16deg]"
          />
          <img
            ref={spsRef}
            src="/images/framework/section1-sps.webp"
            alt="draw"
            className="z-30 w-[400px] max-lg:w-48 absolute -right-[15%] -top-[12%] lg:right-[10%] -rotate-[2deg]"
          />
          <img
            ref={bethRef}
            src="/images/framework/beth.png"
            alt="draw"
            className="z-30 w-[140px] max-lg:w-20 absolute top-[38%] right-[30%] -rotate-[2deg]"
          />
          <img
            ref={polaroidRef}
            src="/images/framework/section1-polaroid.webp"
            alt="draw"
            className="z-30 w-[340px] max-lg:w-24 absolute top-[58%] right-[12%] rotate-[8deg]"
          />
          <img
            ref={agreementRef}
            src="/images/framework/section1-agreement.webp"
            alt="draw"
            className="z-30 w-[340px] max-lg:w-48 absolute top-[30%] lg:top-[48%] -left-[12%] lg:left-[4%] rotate-[8deg]"
          />
          <img
            ref={trinaRef}
            src="/images/framework/trina.png"
            alt="draw"
            className="z-30 w-[140px] max-lg:w-20 absolute top-[40%] left-[20%] rotate-[8deg]"
          />
          <img
            ref={purpleRef}
            src="/images/framework/section1-purple.webp"
            alt="draw"
            className="z-30 w-[340px] max-lg:w-44 absolute lg:top-[60%] top-[50%] lg:left-[18%] left-[4%]"
          />
        </div>
        <div className="relative overflow-hidden flex flex-col w-full">
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[0%] bg-opacity-60 z-0" />
          <div className="h-[98%] w-[1px] bg-[#307fff] pointer-events-none hidden lg:absolute top-0 bottom-0 left-[5.5%] bg-opacity-60 z-0" />
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[7.5%] bg-opacity-60 z-0" />
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[12.6%] bg-opacity-60 z-0" />
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[18%] bg-opacity-60 z-0" />
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[30%] bg-opacity-60 z-0" />
          {/* div between img */}
          <div className="hidden lg:block">
            <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[98%] bg-opacity-60 z-0" />
            <div className="h-[68%] w-[1px] bg-[#307fff] pointer-events-none absolute top-[30%] right-[27%] bg-opacity-60 z-0" />
            <div className="h-[68%] w-[1px] bg-[#307fff] pointer-events-none absolute top-[30%] right-[46%] bg-opacity-60 z-0" />
            <div className="h-[68%] w-[1px] bg-[#307fff] pointer-events-none absolute top-[30%] left-[33.5%] bg-opacity-60 z-0" />
            <div className="h-[1px] w-[79.9%] bg-[#307fff] pointer-events-none absolute left-[12.6%] right-0 top-[64%] bg-opacity-60 z-0" />
          </div>

          <div className="flex flex-col max-lg:min-h-[30vh] ml-[13%] text-[30px] lg:text-[36px] font-semibold items-start justify-start">
            <p className="leading-none mb-0">Dropbox is designed <br className="hidden lg:block" /> to simplify <br className="hidden lg:block" /> the frenzy of modern work</p>
          </div>
          <div className="hidden lg:flex flex-col ml-[12.7%] mt-[6%] mr-[7.5%]">
            <div className="flex justify-between items-start">
              <div className="w-1/4 p-4 justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-dog.webp"
                  alt="dog"
                  className="w-64 p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  mov_452.mp4
                </p>
              </div>
              <div className="w-1/4 p-4 h- justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-draw.webp"
                  alt="dog"
                  className="w-[220px] p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  BTS-film2.jpg
                </p>
              </div>
              <div className="w-1/4 flex flex-col justify-between items-center p-4">
                <img
                  src="/images/framework/section1-sps.webp"
                  alt="dog"
                  className="w-44 p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  FinanceSheet-2025.jpg
                </p>
              </div>
              <div className="w-1/4 p-4 justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-room.webp"
                  alt="dog"
                  className="h-44 object-cover p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  img108.png
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="w-1/4 p-4 justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-polaroid.webp"
                  alt="dog"
                  className="w-64 p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  polaroid_Tokyo.mp4
                </p>
              </div>
              <div className="w-1/4 p-4 h- justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-hand.webp"
                  alt="dog"
                  className="h-48 p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  dessert-select.tiff
                </p>
              </div>
              <div className="w-1/4 flex flex-col justify-between items-center p-4">
                <img
                  src="/images/framework/section1-purple.webp"
                  alt="dog"
                  className="w-44 p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  marketing-brochure.pdf
                </p>
              </div>
              <div className="w-1/4 p-4 justify-between flex flex-col items-center">
                <img
                  src="/images/framework/section1-agreement.webp"
                  alt="dog"
                  className="h-44 object-cover p-2"
                />
                <p className="text-[#307fff] mt-2 text-[12px] font-medium">
                  DxHealthSystem.png
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative min-h-[100vh] overflow-hidden lg:flex flex-col w-full">
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[7.5%] bg-opacity-60 z-0" />
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 right-[32%] bg-opacity-60 z-0" />
          <div className="h-full w-[1px] bg-[#307fff] pointer-events-none absolute top-0 bottom-0 left-[12.6%] bg-opacity-60 z-0" />
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[20%] bg-opacity-60 z-0" />
          <div className="h-[1px] w-full bg-[#307fff] pointer-events-none absolute left-0 right-0 top-[41%] bg-opacity-60 z-0" />

          <div className="ml-[13%] mt-[10%] overflow-hidden merritext font-semibold text-[40px] max-w-[720px] leading-tight">
            Our design strategy prompts{" "}
            {thePillars.map((pillar, index) => (
              <span key={pillar}>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <span
                  className={`${
                    selectedPillar === index ? "text-black" : "text-gray-400"
                  } merritext`}
                  onClick={() => setSelectedPillar(index)}
                >
                  {pillar}
                  <sup className="ml-[2px]">{index + 1}</sup>
                  {index < thePillars.length - 1 && (
                    <span
                      className={
                        selectedPillar === index
                          ? "text-black"
                          : "text-gray-400"
                      }
                    >
                      {index === thePillars.length - 2 ? " & " : ", "}
                    </span>
                  )}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </SmoothScrolling>
    // <div className="min-h-screen bg-blue-300 my-[500px]">ahhaha</div>
  );
};

export default Framework;
