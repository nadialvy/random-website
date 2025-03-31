import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function Greeting() {
  const greetings = [
    "Hello 👋",
    "Halo 👋",
    "Hola 👋",
    "Nǐ hǎo 👋",
    "Ciao 👋",
    "Olá 👋",
    "Hoi 👋",
  ];
  const greetingsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setNextIndex] = useState(1);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
        setNextIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
      },
    });

    tl.fromTo(
      greetingsRef.current,
      { y: 50 },
      {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    ).to(greetingsRef.current, {
      y: -50,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
    });
  }, [currentIndex, greetings.length]);
  return (
    <div className="flex w-full justify-start items-center max-lg:px-3">
      <div className="h-[40px] max-lg:w-[100px] w-[138px] flex justify-center items-center overflow-hidden relative">
        <div className="relative w-full h-[40px]">
          <div
            ref={greetingsRef}
            className="absolute max-md:text-[18px] z-20 w-fit text-2xl font-roboto font-bold text-[#3a3a3a] flex justify-start items-start"
          >
            {greetings[currentIndex]}
          </div>
        </div>
      </div>
      <p className="max-lg:text-[18px] text-[24px] font-roboto z-20 text-[#3a3a3a] text-right">
        I'm{" "}
        <span className="font-semibold font-roboto cursor-target">Nadia</span>{" "}
        Lovely.
      </p>
    </div>
  );
}
