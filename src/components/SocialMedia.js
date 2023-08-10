import React from "react";

const SocialMedia = ({ src, title, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-2 text-white rounded-md py-2 px-2 ${
        bgColor != undefined && bgColor
      }`}>
      <img className="w-4" src={src} alt="" /> {title}
    </div>
  );
};

export default SocialMedia;
