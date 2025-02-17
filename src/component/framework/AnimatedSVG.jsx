import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSVG = () => {
  const pathRef = useRef(null);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return; // Ensure path exists

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial values (start hidden)
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 1,
    });

    // Trigger animation when SVG enters viewport
    gsap.to(path, {
      strokeDashoffset: 0, // Draw effect
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: svgContainerRef.current, // Trigger animation when this div enters viewport
        start: "top 80%", // Adjust when animation should start
        end: "top 20%",
        scrub: false, // Set to true if you want it to animate as you scroll
        // markers: true, // Debugging (remove in production)
      },
    });
  }, []);

  return (
    <div
      ref={svgContainerRef}
      className="relative w-full h-[78px] overflow-hidden"
    >
      <div className="absolute overflow-hidden top-0 left-0 w-full h-full">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          viewBox="0 0 241 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full"
        >
          <path
            ref={pathRef}
            d="M136.312 5.36757C121.141 3.18061 105.259 3.35023 89.4749 3.35023C78.8142 3.35023 67.6107 3.69543 57.8105 5.53568C46.3147 7.69434 35.4387 9.44345 26.9943 13.3996C21.3741 16.0326 16.4391 19.1871 12.9527 22.3282C8.59577 26.2536 4 30.2672 4 34.6003C4 38.152 4.2907 41.4473 6.92141 44.8738C13.0054 52.7983 27.1666 59.6793 44.6642 64.188C53.429 66.4464 63.2056 68.387 72.8888 69.9224C84.4805 71.7605 96.7765 73.7587 108.888 74.779C118.336 75.5749 128.044 75.302 137.678 75.302C150.884 75.302 164.422 75.4623 177.211 73.9571C191.574 72.2668 206.755 66.5797 214.342 61.5916C232.69 49.5277 248.183 31.7982 227.724 18.6671C221.808 14.8702 195.655 8.12268 172.926 8.12268"
            stroke="#0061FE"
            strokeWidth="6.13235"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedSVG;
