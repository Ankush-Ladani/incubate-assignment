import React from "react";
import Github from "../images/github-2.png";
import Twitter from "../images/twitter-2.png";
import Linkedin from "../images/linkedin-2.png";
import Wifi from "../images/wifi-signal.png";
import FooterListItem from "./FooterListItem";

const Footer = () => {
  return (
    <div className="bg-slate-100 h-96">
      <div className="mt-10 grid grid-cols-3 mx-40">
        <div className="grid gap-40">
          <div className="mt-12">
            <div>
              <img
                src="https://blog.incubyte.co/images/logo.png"
                class="w-44"
                alt=""
              />
            </div>
            <div className="flex mt-6 gap-4 ml-3">
              <img className="w-4" src={Linkedin} alt="" />
              <img className="w-4" src={Twitter} alt="" />
              <img className="w-4" src={Github} alt="" />
              <img className="w-4" src={Wifi} alt="" />
            </div>
          </div>
          <div>
            <p>905 Swati Clover, Thaltej, Ahmedabad - 380054</p>
          </div>
        </div>
        <div className="ml-10 mt-12">
          <h2 className="font-bold">USEFUL LINKS</h2>
          <div className="grid grid-cols-2">
            <div>
              <ul>
                <FooterListItem content={"Home"} />
                <FooterListItem content={"Solutions"} />
                <FooterListItem content={"About us"} />
                <FooterListItem content={"Our team"} />
              </ul>
            </div>
            <div>
              <ul>
                <FooterListItem content={"Careers"} />
                <FooterListItem content={"Inspirations"} />
                <FooterListItem content={"Blog"} />
                <FooterListItem content={"Community"} />
                <FooterListItem content={"AI Playground"} />
                <FooterListItem content={"Contact"} />
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-40 mt-12">
          <h2 className="text-gray-800 font-bold">CONTACT US</h2>
          <p className="font-semibold mt-2">REACH US</p>
          <a href="mailto:hello@incubyte.com">hello@incubyte.com</a>
          <p className="font-semibold mt-6">WORK WITH US</p>
          <a href="mailto:careers@incubyte.com">careers@incubyte.com</a>
          <br />
          <br />
          <a href="tel:+91 95123 42973">+91 95123 42973</a>
          <br />
          <br />
          <a href="tel:+1 606-887-1782">+1 606-887-1782</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
