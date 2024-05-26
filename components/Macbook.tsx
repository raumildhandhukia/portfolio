import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll";

const Macbook = () => {
  return (
    <div className="-mt-[400px] md:-mt-80 -mb-[700px] md:-mb-0">
      <MacbookScroll
        src="/github.png"
        showGradient={true}
        title="To know more about what I code and how I code, visit my Github"
      />
    </div>
  );
};

export default Macbook;
