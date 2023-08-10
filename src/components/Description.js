import React from "react";

const Description = ({ description, style }) => {
  return <p className={`text-gray-500 ${style && style}`}>{description}</p>;
};

export default Description;
