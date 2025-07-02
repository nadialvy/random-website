// src/components/SocialLink.jsx
import React from "react";
import PropTypes from "prop-types";

// default value for isLabelShow is false
const SocialLink = ({ href, icon, alt, label, isLabelShow = false, isMobile = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex justify-start items-center gap-2 lg:drop-shadow-md hover:-translate-y-2 transition-all duration-200 ${
        isMobile ? "px-1 py-2" : "px-2 py-4"
      }`}
    >
      <img
        src={icon}
        alt={alt}
        className={`rounded-lg ${isMobile ? "w-6 h-6" : "w-16 h-16"}`}
      />
      {isLabelShow && <p className="text-gray-800 text-[14px]">{label}</p>}
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isLabelShow: PropTypes.bool,
  isMobile: PropTypes.bool,
};

export default SocialLink;
