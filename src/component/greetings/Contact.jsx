import SocialLink from "./SocialLink";
import socialMediaLinks from "../../constant/socialMediaLink";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Contact() {
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
    <div className="wheel-container max-lg:max-h-[70vh] lg:mt-48 z-50 hover:cursor-pointer -mt-12 lg:pt-12">
      <div
        className="header absolute max-lg:px-3 -top-11 left-0 pt-12"
        ref={headerRef}
      >
        <p className="font-roboto max-lg:text-[18px] text-[24px] font-bold">
          What else?
        </p>
        <p className="font-roboto max-lg:text-[14px]">
          Lets collaborate, discuss potential opportunities, or connect with me.
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
        </div>
      </div>
      <div className="wheel z-50" ref={wheelRef}>
        {[...Array(10)].map((_, num) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={num}
            className="wheel__card"
            onClick={() => window.open(socialMediaLinks[num % 5], "_blank")}
          >
            <img
              src={`/images/socialmedia/${(num % 5) + 1}.png`} // Ulangi 1-5
              alt={`Card ${(num % 5) + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
