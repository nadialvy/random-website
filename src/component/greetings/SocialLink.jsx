// src/components/SocialLink.jsx
import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ href, icon, alt, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start items-center gap-2 px-2 py-[2px] border border-gray-800 hover:bg-gray-100 transition-all duration-200"
    >
      <img src={icon} alt={alt} className="w-6 h-6" />
      <p className="text-gray-800 text-[14px]">{label}</p>
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialLink;
