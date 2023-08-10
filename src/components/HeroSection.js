import React from "react";
import LeftArrow from "../images/left-arrow.png";
import Tags from "./Tags";

const HeroSection = () => {
  return (
    <div className="mt-20 mx-80">
      <div>
        <p className="flex">
          <img className="w-4 " src={LeftArrow} alt="" />
          <span className="text-gray-500 ml-1">Back to Blog</span>
        </p>
        <img
          src="https://blog.incubyte.co/images/2023/07/chandrayaan-3-spacecraft.png"
          alt="spaceImage"
          className="rounded mt-4"
        />
        <p className="capitalize text-5xl font-semibold mt-6 mb-8">
          Chandrayaan 3 TDD Assessment
        </p>
        <Tags title={"Playbook"} />
        <Tags title={"Software Craftmanship"} />
        <p className="text-sm flex justify-end my-6">
          By&nbsp;
          <span className="text-blue-400">
            {" "}
            Nirav Chavda, Ajinkya Rathod,
          </span>{" "}
          on Thursday, July 27, 2023
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
