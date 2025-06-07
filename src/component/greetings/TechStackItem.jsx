import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const TechStackItem = ({ icon, altText, label }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="flex bg-white/40 text-black justify-start items-center gap-2 px-2 py-1 border border-gray-600">
      {/* make the image glowing when is dark true */}
      <img
        src={icon}
        alt={altText}
        className={`w-6 h-6 max-lg:w-5 max-lg:h-5 ${isDark ? "glow" : ""}`}
      />
      <p className="font-roboto text-[14px] max-lg:text-[12px] text-black">{label}</p>
    </div>
  );
};

export default TechStackItem;
