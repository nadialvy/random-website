import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { div } from "framer-motion/client";
import SmoothScrolling from "../component/SmoothScrolling";
import TechStackItem from "../component/greetings/TechStackItem";

export default function Greetings() {
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
    <SmoothScrolling>
      <div className="h-full w-full">
        <div className="greetings py-12 flex justify-start flex-col items-center max-w-3xl mx-auto">
          <div className="flex w-full justify-start items-start">
            <div className="h-[40px] w-[138px] flex justify-center items-center overflow-hidden relative">
              <div className="relative w-full h-[40px]">
                <div
                  ref={greetingsRef}
                  className="absolute z-20 w-fit text-2xl font-roboto font-bold text-[#3a3a3a] flex justify-start items-start"
                >
                  {greetings[currentIndex]}
                </div>
              </div>
            </div>
            <p className="text-[24px] font-roboto z-20 text-[#3a3a3a] text-right">
              I'm{" "}
              <span className="font-semibold font-roboto cursor-target">
                Nadia
              </span>{" "}
              Lovely.
            </p>
          </div>

          {/* about section */}
          <div className="flex flex-col text-[15px] gap-y-4 mt-12 cursor-default">
            <p className="font-roboto font-bold text-[24px]">About Me</p>
            <p className=" z-20 font-roboto -mt-3 text-justify">
              A Frontend Dev who officially joined the professional scene in
              2023. These days, I’m not just playing around with{" "}
              <span className="cursor-target font-semibold font-roboto">
                React, Next.js, and Tailwind
              </span>{" "}
              I’m also on a mission to master smooth animations with{" "}
              <span className="font-semibold cursor-target font-roboto">
                GSAP and Framer Motion
              </span>
              . But that’s not all! In 2025, I started dabbling with{" "}
              <span className="font-semibold cursor-target font-roboto">
                Gin
              </span>{" "}
              for backend stuff through freelance, surely making my way toward
              becoming a full-stack dev.
            </p>
            <p className="font-roboto z-20 text-justify">
              Right now, I’m balancing life as a 4th-semester Information
              Systems student at ITS while also rocking the role of{" "}
              <span className="font-roboto cursor-target font-semibold">
                Project and Product Manager
              </span>{" "}
              in 3 different projects. I love mixing tech with management
              whether it’s aligning timelines, brainstorming ideas, or making
              sure things don’t go off the rails. I get a weird thrill from
              juggling multiple things at once because exploring new stuff keeps
              me going.{" "}
              <span className="font-roboto cursor-target font-semibold">
                Life’s too short to stick to one thing, right?
              </span>
            </p>
            <p className="font-roboto z-20 text-justify">
              Personality-wise? People often think I’m all serious and no fun,
              but nah, I’m just one good convo away from going full-on talkative
              mode! I’m super easy to vibe with,{" "}
              <span className="font-roboto cursor-target font-semibold">
                love yapping about anything and everything
              </span>
              . So, if you’re down to talk tech, life, or even random stuff —
              hit me up!
            </p>
          </div>

          {/* tech stack */}
          <div className="flex flex-col justify-start items-start w-full text-[15px] gap-y-4 mt-12 cursor-default">
            <p className="font-roboto font-bold text-[24px]">Stacks</p>
            <div className="w-full flex gap-12 -mt-4 justify-start items-start">
              <div className="w-1/2 flex flex-col justify-start items-start gap-8">
                <div>
                  <p className="font-roboto text-[16px] font-semibold">
                    Programming Language
                  </p>
                  <div className="flex justify-start flex-wrap items-center gap-2">
                    <TechStackItem
                      icon="/images/stack/ts.svg"
                      altText="typescript"
                      label="Typescript"
                    />
                    <TechStackItem
                      icon="/images/stack/js.svg"
                      altText="javascript"
                      label="Javascript"
                    />
                    <TechStackItem
                      icon="/images/stack/go.svg"
                      altText="golang"
                      label="Golang"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-roboto text-[16px] font-semibold">
                    Framework and Library
                  </p>
                  <div className="flex justify-start flex-wrap items-center gap-2">
                    <TechStackItem
                      icon="/images/stack/next.svg"
                      altText="next"
                      label="Next JS"
                    />
                    <TechStackItem
                      icon="/images/stack/tailwind.svg"
                      altText="tailwind"
                      label="Tailwind"
                    />
                    <TechStackItem
                      icon="/images/stack/shadcn.svg"
                      altText="shadcn"
                      label="Shadcn-ui"
                    />
                    <TechStackItem
                      icon="/images/stack/go.svg"
                      altText="gin"
                      label="Gin"
                    />
                    <TechStackItem
                      icon="/images/stack/flutter.svg"
                      altText="flutter"
                      label="Flutter"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-start items-start gap-8">
                <div>
                  <p className="font-roboto text-[16px] font-semibold">
                    Animation
                  </p>
                  <div className="flex flex-col justify-start flex-wrap items-start gap-2">
                    <TechStackItem
                      icon="/images/stack/gsap.jpg"
                      altText="gsap"
                      label="GSAP"
                    />
                    
                    <TechStackItem
                      icon="/images/stack/frammer.svg"
                      altText="frammer"
                      label="Frammer Motion"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-roboto text-[16px] font-semibold">
                    Project Management
                  </p>
                  <div className="flex justify-start flex-wrap items-center gap-2">
                    <TechStackItem
                      icon="/images/stack/gh.svg"
                      altText="github project"
                      label="Github Projects"
                    />
                    <TechStackItem
                      icon="/images/stack/jira.svg"
                      altText="jira"
                      label="Jira"
                    />
                    <TechStackItem
                      icon="/images/stack/notion.svg"
                      altText="notion"
                      label="Notion"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
          />
          <div
            ref={circleRef}
            className="fixed -top-[2%] -left-[1.8%] w-12 h-12 border border-black rounded-full pointer-events-none z-[9998]"
          />
        </>
      </div>
    </SmoothScrolling>
  );
}
