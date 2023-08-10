import React from "react";
import Title from "./Title";
import Description from "./Description";

const CallToAction = () => {
  return (
    <div className="mt-10 mx-80">
      <Title title={"Hey You!"} />
      <Description description={"You were caught scrolling too fast!🚨"} />
      <Description
        description={
          "Tell me your email so that I can inform and monitor you next time we release a blog."
        }
      />
      <form className="mt-6" action="#">
        <input
          className="w-10/12 border-2 rounded-md px-2 py-2"
          type="text"
          placeholder="name@email.com"
        />
        <button
          className="px-3 py-2 bg-blue-500 rounded-3xl ml-5 text-white font-bold"
          type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default CallToAction;
