"use client";

import { navItems } from "@/data";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Macbook from "@/components/Macbook";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ReactGA from "react-ga4";
import Experience from "@/components/exp";
import IconCloud from "@/components/ui/icon-cloud";
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || "";
ReactGA.initialize(MEASUREMENT_ID);
import { slugs } from "@/components/Experience";
import { AskRaumil } from "@/components/AskRaumil";
const Home = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "View",
    });
  }, []);
  return (
    <main className="dark relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero analyze={ReactGA} />

        <Grid />

        <Experience />
        {/* <Experience /> */}
        <RecentProjects analyze={ReactGA} />
        {/* <Approach /> */}
        <div className="py-10">
          <div className="flex w-full justify-center">
            <h2 className="text-3xl md:text-5xl mb-4 text-black dark:text-purple max-w-4xl font-bold">
              Tools which I use
            </h2>
          </div>
          <IconCloud iconSlugs={slugs} />
        </div>
        <Footer analyze={ReactGA} />
      </div>
    </main>
  );
};

export default Home;
