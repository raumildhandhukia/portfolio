"use client";
import { use, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  isExperience,
  input,
  inputArray,
  className,
}: {
  isExperience: boolean;
  input?: string[];
  inputArray?: { word: string; className: string }[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray: string[];
  if (!isExperience) {
    if (input) {
      wordsArray = input[0].split(" ");
    } else {
      wordsArray = [];
    }
  } else {
    if (!inputArray) {
      inputArray = [];
    }
  }

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {!isExperience
          ? wordsArray.map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  // change here if idx is greater than 3, change the text color to #CBACF9
                  className={` ${
                    idx === 0
                      ? "text-blue-200"
                      : idx === 1
                      ? "text-blue-300"
                      : idx > 1 && idx < 4
                      ? "text-red-400"
                      : idx > 3
                      ? "text-purple"
                      : "dark:text-white text-black"
                  } opacity-0`}
                >
                  {word}{" "}
                </motion.span>
              );
            })
          : inputArray!.map(({ word, className }, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className={`opacity-0 ${
                    className ? className : "dark:text-white text-black"
                  } `}
                >
                  {word === "•" ? <br /> : null}
                  {word}{" "}
                </motion.span>
              );
            })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
