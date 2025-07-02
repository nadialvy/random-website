import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLink from "../component/greetings/SocialLink";

gsap.registerPlugin(ScrollTrigger);

const SpinningWheel = () => {
  const wheelRef = useRef(null);
  const imagesRef = useRef([]);
  const containerRef = useRef(null); // Add ref for the container
  const [showWheel, setShowWheel] = useState(false); // Set back to false
  const [wheelStartPosition, setWheelStartPosition] = useState(null); // Store start position

  const socialMediaData = [
    {
      href: "mailto:nadialovely1803@gmail.com",
      icon: "/images/socialmedia/2.png",
      alt: "Gmail",
      label: "nadialovely1803@gmail.com",
    },
    {
      href: "https://github.com/nadialvy",
      icon: "/images/socialmedia/1.png",
      alt: "GitHub",
      label: "nadialvy",
    },
    {
      href: "https://www.linkedin.com/in/nadia-lovely",
      icon: "/images/socialmedia/4.png",
      alt: "Linkedin",
      label: "Nadia Lovely",
    },
    {
      href: "https://www.instagram.com/nadlvy_",
      icon: "/images/socialmedia/3.png",
      alt: "Instagram",
      label: "nadlvy_",
    },
    {
      href: "https://medium.com/@daisythoughts",
      icon: "/images/socialmedia/5.png",
      alt: "Medium",
      label: "daisythoughts",
    },
    {
      href: "https://drive.google.com/file/d/1l-UA0Pm10Il19WiyJOybauT3eG7lY7dH/view?usp=sharing",
      icon: "/images/socialmedia/6.png",
      alt: "CV",
      label: "Access My CV",
    },
    {
      href: "mailto:nadialovely1803@gmail.com",
      icon: "/images/socialmedia/2.png",
      alt: "Gmail",
      label: "nadialovely1803@gmail.com",
    },
    {
      href: "https://github.com/nadialvy",
      icon: "/images/socialmedia/1.png",
      alt: "GitHub",
      label: "nadialvy",
    },
    {
      href: "https://www.linkedin.com/in/nadia-lovely",
      icon: "/images/socialmedia/4.png",
      alt: "Linkedin",
      label: "Nadia Lovely",
    },
    {
      href: "https://www.instagram.com/nadlvy_",
      icon: "/images/socialmedia/3.png",
      alt: "Instagram",
      label: "nadlvy_",
    },
    {
      href: "https://medium.com/@daisythoughts",
      icon: "/images/socialmedia/5.png",
      alt: "Medium",
      label: "daisythoughts",
    },
    {
      href: "https://drive.google.com/file/d/1PbbT4J18Y_tadeQpqiCKi2fR0oZgGXGB/view?usp=sharing",
      icon: "/images/socialmedia/6.png",
      alt: "CV",
      label: "Access My CV",
    },
  ];

  useLayoutEffect(() => {
    console.log("useLayoutEffect running, containerRef:", containerRef.current);

    const wheel = wheelRef.current;
    const images = imagesRef.current;

    if (!containerRef.current) {
      console.log("Container ref is null, waiting...");
      return;
    }

    console.log("Container found, setting up ScrollTrigger");

    // Hapus kondisi wheel check sementara untuk testing
    if (!wheel || images.length === 0) return;

    gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

    const setup = () => {
      if (!wheel) {
        console.log("Wheel ref not found, skipping setup");
        return;
      }

      console.log("Setting up wheel with", images.length, "images");

      const radius = wheel.offsetWidth / 2.4;
      const center = wheel.offsetWidth / 2;
      const total = images.length;
      const slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        if (!item) {
          console.log(`Image ${i} is null, skipping`);
          return;
        }
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
    };

    // Always try to setup, but with logging
    setup();

    // Debug scroll position
    const handleScroll = () => {
      console.log("Current scroll position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Add ScrollTrigger to detect orange background viewing
    console.log(
      "Setting up ScrollTrigger for container:",
      containerRef.current
    );

    const detectionTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%", // Start earlier - when top hits 80% down the viewport
      end: "bottom 90%", // End later - when bottom hits 20% down the viewport
      onEnter: () => {
        console.log("🟠 User entered orange background section");
        console.log("Start position:", window.scrollY);
        console.log("Container element:", containerRef.current);

        // Show wheel and set start position
        setShowWheel(true);
        setWheelStartPosition(window.scrollY);
      },
      onLeave: () => {
        console.log("🟠 User left orange background section");
        console.log("End position:", window.scrollY);
        setShowWheel(false);
      },
      onEnterBack: () => {
        console.log("🟠 User scrolled back into orange section");
        setShowWheel(true);
      },
      onLeaveBack: () => {
        console.log("🟠 User scrolled back out of orange section (upwards)");
        setShowWheel(false);
      },
    });

    let st = null;
    if (wheel) {
      console.log("Setting up wheel rotation with", images.length, "images");
      st = gsap.to(wheel, {
        rotate: () => -180,
        ease: "none",
        duration: images.length,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          snap: 1 / images.length,
          invalidateOnRefresh: true,
        },
      });
    } else {
      console.log("No wheel found, skipping rotation setup");
    }

    window.addEventListener("resize", setup);

    return () => {
      console.log("Cleanup running");
      if (st) st.kill();
      if (detectionTrigger) detectionTrigger.kill();
      window.removeEventListener("resize", setup);
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Simplified dependencies

  return (
    <div
      ref={containerRef}
      className=" -z-10 text-white font-nunito h-[100vh] w-screen p-0 m-0 overflow-x-hidden"
    >
      
      <section className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-50">
          <div className="text-black font-bold text-lg mb-2">SCROLL DOWN</div>
          <div className="arrow text-black text-2xl">↓</div>
        </div> */}

        <div
          ref={wheelRef}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] transition-opacity duration-500 ${
            showWheel ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {socialMediaData.map((social, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className="absolute top-0 left-0 w-[14%] max-w-[120px] aspect-square cursor-pointer"
            >
              <SocialLink
                href={social.href}
                icon={social.icon}
                alt={social.alt}
                label={social.label}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpinningWheel;
