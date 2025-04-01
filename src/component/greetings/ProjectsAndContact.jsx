import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { projectList } from "../../constant/projectList";
import SocialLink from "./SocialLink";
import socialMediaLinks from "../../constant/socialMediaLink";

export default function ProjectsAndContact() {
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const projectTitleRef = useRef(null);
  useEffect(() => {
    if (projectTitleRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: projectTitleRef.current,
          start: "top 40%",
          end: "+=200px",
          pin: true,
        },
      });
    }
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
        end: "+=300%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          if (self.progress >= 0.95) {
            gsap.set(".cards-container", {
              position: "fixed",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              zIndex: 40,
            });

            gsap.set(".projectsAndContact-container", {
              zIndex: 0,
            });
          } else {
            gsap.set(".projects-container", {
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

    stackTimeline.to(".card", {
      yPercent: -100,
      stagger: 0.5,
      ease: "none",
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
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
          rotation: `${angle}_rad`,
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
      // biome-ignore lint/complexity/noForEach: <explanation>
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* modal mobile */}
      <div className="w-full min-h-[300vh] max-h-[450vh] max-lg:min-h-[340vh] projects-container mt-12 mb-48">
        <div
          ref={projectTitleRef}
          className="projectTitle  max-lg:mb-4 max-lg:px-3 mb-12"
        >
          <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
            Projects
          </p>
          <p className="mb-10 font-roboto">
            A glimpse of the stuffs I’ve built along the way!
          </p>
        </div>
        <div className="absolute w-full min-h-[290vh] max-lg:max-h-[300vh] max-h-[440vh] max-w-4xl mx-auto z-50">
          <div className="max-w-full h-fit max-lg:px-2 cards-container">
            <ul id="cards" className="lg:p-6 max-w-full">
              {projectList.map((project, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <ProjectCard key={index} {...project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="wheel-container max-lg:max-h-[90vh] lg:mt-48 z-50 hover:cursor-pointer -mt-12 lg:pt-12">
        <div
          className="header absolute max-lg:px-3 -top-11 left-0 pt-12"
          ref={headerRef}
        >
          <p className="font-roboto max-lg:text-[18px] text-[24px] font-bold">
            What else?
          </p>
          <p className="font-roboto max-lg:text-[14px]">
            Lets collaborate, discuss potential opportunities, or connect with
            me.
          </p>
          <p className="font-roboto">You can find me on:</p>
          <div className="flex mt-2 w-full gap-2 flex-wrap justify-start items-start lg:hidden">
            <SocialLink
              href="mailto:nadialovely1803@gmail.com"
              icon="/images/socialmedia/2.png"
              alt="Gmail"
              label="nadialovely1803@gmail.com"
            />
            <SocialLink
              href="https://github.com/nadialvy"
              icon="/images/socialmedia/1.png"
              alt="GitHub"
              label="nadialvy"
            />
            <SocialLink
              href="https://www.linkedin.com/in/nadia-lovely"
              icon="/images/socialmedia/4.png"
              alt="Linkedin"
              label="Nadia Lovely"
            />
            <SocialLink
              href="https://www.instagram.com/nadlvy_"
              icon="/images/socialmedia/3.png"
              alt="Instagram"
              label="nadlvy_"
            />

            <SocialLink
              href="https://medium.com/@daisythoughts"
              icon="/images/socialmedia/5.png"
              alt="Medium"
              label="daisythoughts"
            />
            <SocialLink
              href="https://drive.google.com/file/d/1PbbT4J18Y_tadeQpqiCKi2fR0oZgGXGB/view?usp=sharing"
              icon="/images/socialmedia/6.png"
              alt="CV"
              label="Access My CV"
            />
          </div>
        </div>
        <div className="wheel z-50" ref={wheelRef}>
          {[...Array(11)].map((_, num) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={num}
              className="wheel__card"
              onClick={() => window.open(socialMediaLinks[num % 6], "_blank")}
            >
              <img
                src={`/images/socialmedia/${(num % 6) + 1}.png`}
                alt={`Card ${(num % 6) + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
