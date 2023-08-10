import React from "react";
import Title from "./Title";
import SocialMedia from "./SocialMedia";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Email from "../images/mail.png";
import Linkedin from "../images/linkedin.png";
import Reddit from "../images/reddit.png";
import Whatsapp from "../images/whatsapp.png";

const Sharing = () => {
  return (
    <div className="mt-10 mx-80">
      <Title title={"Consider Sharing!"} />
      <div className="flex gap-4">
        <SocialMedia
          bgColor={"bg-blue-700"}
          src={Facebook}
          title={"Facebook"}
        />
        <SocialMedia bgColor={"bg-blue-300"} src={Twitter} title={"Twitter"} />
        <SocialMedia bgColor={"bg-gray-500"} src={Email} title={"E-Mail"} />
        <SocialMedia
          bgColor={"bg-blue-900"}
          src={Linkedin}
          title={"Linkedin"}
        />
        <SocialMedia bgColor={"bg-red-600"} src={Reddit} title={"Reddit"} />
        <SocialMedia
          bgColor={"bg-green-500"}
          src={Whatsapp}
          title={"Whatsapp"}
        />
      </div>
    </div>
  );
};

export default Sharing;
