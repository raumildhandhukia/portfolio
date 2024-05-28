import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll";
import ReactGA from "react-ga";

const Macbook = ({ analyze }: { analyze: typeof ReactGA }) => {
  return (
    <div className="-mt-[400px] md:-mt-80 -mb-[700px] md:-mb-0">
      <MacbookScroll src="/github.png" showGradient={true} analyze={analyze} />
    </div>
  );
};

export default Macbook;
