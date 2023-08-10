import React from "react";

const Tags = ({ title }) => {
  return (
    <span className="bg-gray-800 text-white rounded-full py-1 px-4 font-semibold mr-2">
      <a href="#">{title}</a>
    </span>
  );
};

export default Tags;
