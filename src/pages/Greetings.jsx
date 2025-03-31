import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SmoothScrolling from "../component/SmoothScrolling";
import Cursor from "../component/greetings/Cursor";
import TechStack from "../component/greetings/TechStack";
import About from "../component/greetings/About";
import Greeting from "../component/greetings/Greeting";
import ProjectsAndContact from "../component/greetings/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function Greetings() {
  return (
    <SmoothScrolling>
      <div className="h-full  w-full">
        <div className="greetings py-12  max-lg:px-0 flex justify-start flex-col items-center max-w-4xl mx-auto">
          <Greeting />
          <About />
          <TechStack />
          <ProjectsAndContact />
          <div className="-mb-[200%] lg:-mb-[56%] z-50 h-10 bg-transparent">
            {""}
          </div>
        </div>
        <Cursor />
      </div>
    </SmoothScrolling>
  );
}
