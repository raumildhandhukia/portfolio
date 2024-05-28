"use client";

import { navItems } from "@/data";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Macbook from "@/components/Macbook";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ReactGA from "react-ga";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || "";
ReactGA.initialize(MEASUREMENT_ID);

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero analyze={ReactGA} />
        <Grid />
        <RecentProjects analyze={ReactGA} />
        <Experience />
        <Approach />
        <Macbook analyze={ReactGA} />
        <Footer analyze={ReactGA} />
      </div>
    </main>
  );
};

export default Home;
