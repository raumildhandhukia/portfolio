import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll";
import ReactGA from "react-ga4";

const Macbook = ({ analyze }: { analyze: typeof ReactGA }) => {
  return (
    <div className="-mt-[67vh] -mb-[60vh] md:-mt-72 md:-mb-0">
      <MacbookScroll src="/git-aug.png" showGradient={true} analyze={analyze} />
    </div>
  );
};

export default Macbook;
