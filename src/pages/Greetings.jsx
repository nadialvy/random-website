import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SmoothScrolling from "../component/SmoothScrolling";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TechStackItem from "../component/greetings/TechStackItem";
import ScrollMagic from "scrollmagic";

gsap.registerPlugin(ScrollTrigger);

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
    const controller = new ScrollMagic.Controller();

    const title = document.querySelector(".projectTitle");

    if (title) {
      new ScrollMagic.Scene({
        triggerElement: title,
        triggerHook: 0.4,
        duration: 200,
      })
        .setPin(title)
        .addTo(controller);
    } else {
      console.error("Element not found: .projectTitle");
    }

    return () => {
      controller.destroy(true);
    };
  }, []);

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

  useEffect(() => {
    gsap.set(".card", {
      position: "absolute",
      top: 0,
      left: 0,
    });

    const stackTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top top",
        end: "+=270%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          if (self.progress >= 0.8) {
            gsap.set(".cards-container", {
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 50,
            });
          }
        },
        onLeaveBack: () => {
          gsap.set(".cards-container", {
            clearProps: "all",
          });
        },
      },
    });

    stackTimeline
      .to(".card", {
        yPercent: -100,
        stagger: 0.5,
        ease: "none",
      })
      .to(".cards-container", {
        yPercent: -50,
        duration: 1,
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".wheel-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onEnter: () => {
          if (stackTimeline.scrollTrigger.progress === 1) {
            gsap.set(".cards-container", {
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 50,
            });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.body.style.overflow = "auto";
    };
  }, []);

  const wheelRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!wheelRef.current) return;

    const wheel = wheelRef.current;
    const images = gsap.utils.toArray(".wheel__card");

    function setup() {
      const radius = wheel.offsetWidth / 2.6;
      const center = wheel.offsetWidth / 2;
      const total = images.length;
      const slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        const angle = i * slice;
        const x = center + radius * Math.sin(angle);
        const y = center - radius * Math.cos(angle);

        gsap.set(item, {
          // biome-ignore lint/style/useTemplate: <explanation>
          rotation: angle + "_rad", // Convert to degrees
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    }

    setup();
    window.addEventListener("resize", setup);

    gsap.to(wheel, {
      rotate: () => -180,
      ease: "none",
      scrollTrigger: {
        trigger: ".wheel-container",
        start: "top center",
        end: "bottom+=100% center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        snap: 1 / images.length,
      },
    });

    return () => {
      window.removeEventListener("resize", setup);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <SmoothScrolling>
      <div className="h-full w-full">
        <div className="greetings py-12 max-lg:px-4 flex justify-start flex-col items-center max-w-4xl mx-auto">
          <div className="flex w-full justify-start items-center">
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
              <span className="font-semibold font-roboto cursor-target">
                Nadia
              </span>{" "}
              Lovely.
            </p>
          </div>

          {/* about section */}
          <div className="flex flex-col text-[15px] lg:text-[16px] gap-y-4 mt-12 cursor-default">
            <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
              About Me
            </p>
            <p className=" z-20 font-roboto -mt-3 text-justify">
              I didn’t plan to dive deep into frontend dev, but here I am—hooked
              since 2023.{" "}
              <span className="font-semibold cursor-target font-roboto">
                Turning ideas into interactive interfaces felt like magic,
              </span>{" "}
              but I started wondering what happens behind the scenes. That
              curiosity{" "}
              <span className="font-semibold cursor-target font-roboto">
                led me to explore backend development,
              </span>{" "}
              and before I knew it, I was knee-deep in APIs and databases. Now,
              I’m having fun figuring out how to make both sides of the web work
              in harmony.
            </p>
            <p className="font-roboto z-20 text-justify">
              Right now, I’m balancing life as a 4th-semester Information
              Systems student at ITS while also rocking the role of{" "}
              <span className="font-roboto cursor-target font-semibold">
                Project and Product Manager
              </span>{" "}
              in some different projects. I love mixing tech with management
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
              . So, if you’re down to talk tech, life, or even random stuff, hit
              me up!
            </p>
          </div>

          {/* tech stack */}
          <div className="flex flex-col justify-start items-start w-full text-[15px] gap-y-4 mt-12 cursor-default">
            <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
              Stacks
            </p>
            <div className="w-full flex max-md:flex-col max-md:gap-4 gap-12 -mt-4 justify-start items-start">
              <div className="lg:w-1/2 flex flex-col justify-start items-start max-md:gap-4 gap-8">
                <div>
                  <p className="font-roboto text-[16px] font-medium lg:font-semibold">
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
                    <div className="hidden md:block md:w-[10px] lg:w-[10%]" />
                    <TechStackItem
                      icon="/images/stack/go.svg"
                      altText="golang"
                      label="Golang"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-roboto text-[16px] font-medium lg:font-semibold">
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
                      icon="/images/stack/flutter.svg"
                      altText="flutter"
                      label="Flutter"
                    />
                    <TechStackItem
                      icon="/images/stack/go.svg"
                      altText="gin"
                      label="Gin"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-start items-start max-md:gap-4 gap-8">
                <div>
                  <p className="font-roboto text-[16px] font-medium lg:font-semibold">
                    Animation
                  </p>
                  <div className="flex justify-start flex-wrap items-start gap-2">
                    <TechStackItem
                      icon="/images/stack/gsap.jpg"
                      altText="gsap"
                      label="GSAP"
                    />
                    <TechStackItem
                      icon="/images/stack/scrollmagic.jpg"
                      altText="scrollmagic"
                      label="Scroll Magic"
                    />
                    <TechStackItem
                      icon="/images/stack/frammer.svg"
                      altText="frammer"
                      label="Frammer Motion"
                    />
                    <TechStackItem
                      icon="/images/stack/aos.png"
                      altText="aos"
                      label="AOS"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-roboto text-[16px] font-medium lg:font-semibold">
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

          {/* projects */}
          {/* projects section */}
          <div className="w-full mt-12">
            <div className="projectTitle mb-12">
              <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
                Projects
              </p>
              <p className="mb-10 font-roboto">
                A glimpse of the stuffs I’ve built along the way!
              </p>
            </div>
            <div className="h-[220vh] z-50">
              <div className="cards-container">
                <ul id="cards" className=" p-6">
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card1">
                    <div className="card-body shadow-md">
                      <p>halooo hehe lorem ipsum </p>
                      <h2>Card 1</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card2">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 2</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card3">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 3</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card4">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 4</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card5">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 5</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card6">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 6</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card7">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 7</h2>
                    </div>
                  </li>
                  <li className="card rounded-3xl max-lg:rounded-xl" id="card8">
                    <div className="card-body shadow-md">
                      <p>halooo hehe</p>
                      <h2>Card 8</h2>
                    </div>
                  </li>
                </ul>
              </div>
              <li className="font-roboto mt-48">And many more to come 👀!</li>
            </div>
          </div>

          <div className="wheel-container z-0 pt-12">
            aa
            <div
              className="header absolute -top-11 left-0 pt-12"
              ref={headerRef}
            >
              <p className="font-roboto text-[24px] font-bold">What else?</p>
              <p className="font-roboto">
                Lets collaborate, discuss potential opportunities, or connect
                with me.
              </p>
              <p className="font-roboto">You can find me on:</p>
            </div>
            <div className="wheel" ref={wheelRef}>
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="wheel__card"
                  // onClick={handleCardClick}
                >
                  <img
                    src={`/images/socialmedia/${num}.png`}
                    alt={`Card ${num}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="-mb-[56%] h-10 bg-pink-200">hehe</div>
        </div>
        <div>
          <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
          />
          <div
            ref={circleRef}
            className="fixed -top-[2%] -left-[1.8%] w-12 h-12 border border-black rounded-full pointer-events-none z-[9998]"
          />
        </div>
      </div>
    </SmoothScrolling>
  );
}
