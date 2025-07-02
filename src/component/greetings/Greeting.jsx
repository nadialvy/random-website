import { useRef, useState, useEffect, useContext } from "react";
import gsap from "gsap";
import { ThemeContext } from "../ThemeContext";
import { motion } from "framer-motion";

const Switch = ({ checked, setChecked }) => {
  return (
    <form className="flex space-x-4  antialiased items-center">
      <label
        htmlFor="checkbox"
        className={`
          h-8 px-1  flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[72px] relative cursor-pointer transition duration-200
          ${checked ? "bg-white/40" : "bg-slate-700/30 border-slate-500"}
        `}
      >
        <motion.div
          initial={{
            width: "48px",
            x: checked ? 0 : 38,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 38 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={`
            h-[20px] block rounded-full bg-white shadow-md z-10
          `}
        ></motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

export default function Greeting() {
  const greetings = [
    "Hello 👋",
    "Halo 👋",
    "Hola 👋",
    "Ciao 👋",
    "Olá 👋",
    "Hoi 👋",
  ];
  const greetingsRef = useRef(null);
  const textRef = useRef(null);
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

  const { isDark, toggleTheme } = useContext(ThemeContext);

  // Animate theme changes
  useEffect(() => {
    if (greetingsRef.current && textRef.current) {
      gsap.to([greetingsRef.current, textRef.current], {
        color: isDark ? "#ffffff" : "#1f2937",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isDark]);

  return (
    <div className="flex w-full z-20 justify-between items-center z-50 transition-colors duration-300 ease-in-out">
      <div className="flex w-full justify-start items-center max-lg:px-3">
        <div className="h-[40px] w-[100px] sm:w-[110px] md:w-[120px] lg:w-[138px] flex justify-center items-center overflow-hidden relative">
          <div className="relative w-full h-[40px] overflow-hidden">
            <div
              ref={greetingsRef}
              style={{ willChange: "transform" }}
              className="absolute max-md:text-[18px] w-full z-20 w-fit text-2xl font-roboto font-bold flex justify-start items-center h-full transition-colors duration-300 ease-in-out"
            >
              {greetings[currentIndex]}
            </div>
          </div>
        </div>
        <p
          ref={textRef}
          className="max-lg:text-[18px] text-[24px] font-roboto z-20 transition-colors duration-300 ease-in-out"
        >
          I'm{" "}
          <span className="font-semibold font-roboto cursor-target">Nadia</span>{" "}
          Lovely
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center space-x-4 py-6">
        <Switch checked={isDark} setChecked={toggleTheme} />
      </div>
    </div>
  );
}
