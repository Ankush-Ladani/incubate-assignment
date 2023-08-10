import React from "react";
import Highlight from "./Highlight";

const OrderedListItem = ({ sno, pointDescription, textTitle }) => {
  return (
    <p className="flex mt-2">
      <span>{sno}. </span>
      <div>
        <Highlight content={textTitle} />
        &nbsp;{pointDescription}
      </div>
    </p>
  );
};

export default OrderedListItem;
