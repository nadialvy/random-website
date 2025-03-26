import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Greetings() {
  const fullText =
    "Hi 👋🏻. This page contains Nadia's portofolio about her journey to learn an advanced animation using gsap and frammer motion.";

  const [charIndex, setCharIndex] = useState(0);
  const chars = Array.from(fullText);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= chars.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [chars.length]);

  return (
    <div className="w-full h-screen flex flex-col justify-start align-center p-12 font-mono text-lg leading-relaxed">
      <p>{chars.slice(0, charIndex + 1).join("")}</p>

      {charIndex === chars.length - 1 && (
        <>
          <p className="mt-6">You can see my works here:</p>
          <p className="underline">
            <Link to="/igsas">1. Igsas</Link>
          </p>
          <p className="underline">
            <Link to="/framework">2. Framework</Link>
          </p>
        </>
      )}
    </div>
  );
}
