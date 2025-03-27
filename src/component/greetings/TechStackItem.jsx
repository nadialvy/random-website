import React from "react";

const TechStackItem = ({ icon, altText, label }) => {
  return (
    <div className="flex justify-start items-center gap-2 px-2 py-1 border border-gray-600">
      <img src={icon} alt={altText} className="w-6 h-6" />
      <p className="font-roboto text-[14px]">{label}</p>
    </div>
  );
};

export default TechStackItem;
