import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll";

const Macbook = () => {
  return (
    <div className="-mt-[400px] md:-mt-80 -mb-[700px] md:-mb-0 ">
      <MacbookScroll
        src="/final.png"
        showGradient={true}
        title="What I know and use to build these awesome solutions."
      />
    </div>
  );
};

export default Macbook;
