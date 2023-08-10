import React from "react";

const FooterListItem = ({ content }) => {
  return (
    <li className="my-2">
      <a href="#">{content}</a>
    </li>
  );
};

export default FooterListItem;
