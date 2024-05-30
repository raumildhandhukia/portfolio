export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Setu Consulting Services Pvt. Ltd.",
    desc: [
      "• Achieved a 30% cost reduction by incorporating Google Maps into the Fleet Management System with React. • Revamped HR processes for improved leave management in existing CRM utilizing React and Node.js. • Secured 60% customer retention by strategizing RMF Analysis (data-driven classification) operating on PostgreSQL stored procedures. Set up personalized marketing email system with Python, JavaScript. • Integrated marketplaces for product updates and financial tracking aided by Webhooks and REST APIs. • Created real-time CRM dashboard wielding WebSockets for dynamic, interactive data updates.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },

  {
    id: 0,
    title: "Developer Intern - Emipro Technologies Pvt. Ltd.",
    desc: [
      "• Composed Stored Procedures in PostgreSQL for predictive cash flow by analyzing historical financial data. • Improved scheduler performance to 3 seconds by converting Python logic to Stored Procedures.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Technology Consultant - Arizona State University",
    desc: [
      "• Implementing the latest technological advancements and solutions. • Analyzing and improving the performance of web-based portals. Resolving logged errors, as well as ensuring system security and encryption.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function CustomizedTimeline() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 932) {
      setIsMobile(true);
    }
  }, []);

  const TimeLineContent = () => (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(33, 33, 33,0.5)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
          date="May 2023 - May 2024"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
          icon={
            <Image
              alt="asu"
              src={"/asu.png"}
              width={50}
              height={60}
              className="mt-4 ml-1"
            />
          }
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-purple">
            Technology Consultant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Arizona State University
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Mesa, AZ</h4>
          <TextGenerateEffect
            isExperience={true}
            input={workExperience[2].desc}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(33, 33, 33,0.5)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
          date="May 2022 - July 2023"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
          icon={
            <Image
              alt="setu"
              src={"/setu.png"}
              width={50}
              height={60}
              className="mt-[7px] ml-[5px]"
            />
          }
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-purple">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Setu Consulting Services Pvt. Ltd.
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Gujarat, India</h4>
          <TextGenerateEffect
            isExperience={true}
            input={workExperience[0].desc}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(33, 33, 33,0.5)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 33, 33)" }}
          date="Jan 2021 - April 2021"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
          icon={
            <Image
              alt="emipro"
              src={"/emipro.png"}
              width={60}
              height={20}
              className="mt-5"
            />
          }
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-purple">
            Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Emipro Technologies Pvt. Ltd.
          </h4>

          <h4 className="vertical-timeline-element-subtitle">Gujarat, India</h4>
          <TextGenerateEffect
            isExperience={true}
            input={workExperience[1].desc}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );

  return (
    <div className="">
      <TimeLineContent />
    </div>
  );
}

const Experience = () => {
  return (
    <div className="w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="mt-20">
        <CustomizedTimeline />
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"></div>
    </div>
  );
};

export default Experience;
