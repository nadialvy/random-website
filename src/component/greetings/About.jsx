import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function About() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`flex max-lg:px-3 flex-col text-[15px] lg:text-[16px] gap-y-4 mt-12 p-4 cursor-default ${
        isDark
          ? "bg-white/10 shadow-lg rounded-lg backdrop-blur-sm border-white/10 border"
          : ""
      } `}
    >
      <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
        About Me
      </p>
      <p className=" z-20 font-roboto -mt-3 text-justify">
        I didn’t plan to dive deep into frontend dev, but here I am, hooked
        since 2023.{" "}
        <span className="font-semibold cursor-target font-roboto">
          It's pure magic to see ideas transform into interactive interfaces.
        </span>{" "}
        but I started wondering what happens behind the scenes. That curiosity{" "}
        <span className="font-semibold cursor-target font-roboto">
          led me to explore backend development,
        </span>{" "}
        and before I knew it, I was knee-deep in APIs and databases. Now, I’m
        having fun figuring out how to make both sides of the web work in
        harmony.
      </p>
      <p className="font-roboto z-20 text-justify">
        Right now, I’m balancing life as a 4th-semester Information Systems
        student at ITS while also rocking the role of{" "}
        <span className="font-roboto cursor-target font-semibold">
          Project and Product Manager
        </span>{" "}
        in some different projects. I love mixing tech with management whether
        it’s aligning timelines, brainstorming ideas, or making sure things
        don’t go off the rails. I get a weird thrill from juggling multiple
        things at once because exploring new stuff keeps me going.{" "}
        <span className="font-roboto cursor-target font-semibold">
          Life’s too short to stick to one thing, right?
        </span>
      </p>
      <p className="font-roboto z-20 text-justify">
        Personality-wise? People often think I’m all serious and no fun, but
        nah, I’m just one good convo away from going full-on talkative mode! I’m
        super easy to vibe with,{" "}
        <span className="font-roboto cursor-target font-semibold">
          love yapping about anything and everything
        </span>
        . So, if you’re down to talk tech, life, or even random stuff, hit me
        up!
      </p>
    </div>
  );
}
