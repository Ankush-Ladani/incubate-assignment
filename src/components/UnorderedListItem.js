import React from "react";
import Description from "./Description";

const UnorderedListItem = ({ content }) => {
  return (
    <p className="flex items-start ml-2 mt-2">
      <div className="bg-blue-400 mr-2 ring-0 w-2 h-2 mt-2 rounded-full"></div>
      <Description description={content} />
    </p>
  );
};

export default UnorderedListItem;
