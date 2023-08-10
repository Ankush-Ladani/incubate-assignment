import React from "react";
import Logo from "../images/moon.png";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <a href="#">
          <img
            data-testid="dummyLogo"
            src="https://blog.incubyte.co/images/logo.png"
            class="w-32"
            alt=""
          />
        </a>
      </div>
      <div className="flex gap-x-4 items-cente">
        <img src={Logo} className="w-8" alt="" />
        <span className="bg-blue-900 px-7 font-semibold rounded-full py-2 text-white">
          <button>
            <a href="https://www.incubyte.co/lets-get-started">LET'S TALK</a>
          </button>
        </span>
        <p className="flex items-center font-medium">home</p>
      </div>
    </nav>
  );
};

export default Header;
