import React from "react";

const SocialMedia = ({ src, title, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-2 text-white rounded-md py-2 px-2 ${
        bgColor != undefined && bgColor
      }`}>
      <a href="#" className="flex gap-2 hover:text-sky-300">
        <img className="w-4" src={src} alt="" /> {title}
      </a>
    </div>
  );
};

export default SocialMedia;
