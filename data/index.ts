import React from "react";

const PORTFOLIOSITE = process.env.NEXT_PUBLIC_PORTFOLIOSITE;

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "Currently building a Dog Meetup App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 -bottom-14 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/snip.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "Tech enthusiast with a passion for development.",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "Portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
    img: "/portgif.gif",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: `${PORTFOLIOSITE}`,
    live: true,
  },
  {
    id: 2,
    title: "Next-Notes",
    des: "Share and collaborate on notes with your team in real-time using Next.js.",
    img: "/notes.gif",
    iconLists: [
      "/next.svg",
      "/authlogo.png",
      "/tail.svg",
      "/ts.svg",
      "/prisma.svg",
      "/mongo.svg",
    ],
    link: "https://nextnotes-omega.vercel.app/",
    live: true,
  },

  {
    id: 3,
    title: "RetroLMS",
    des: "A retro-style LMS with marketplace for perks. Powered by MERN Stack.",
    img: "/retrolms.png",
    iconLists: ["/re.svg", "/nj.svg", "/ts.svg", "/mongo.svg", "/css.svg"],
    link: "https://github.com/raumildhandhukia/RetroLMS",
    live: false,
  },

  {
    id: 4,
    title: "Day-Z Survival",
    des: "3D zombie apocalypse top-down shooter game built with Unity and C#.",
    img: "/gameGIF.gif",
    iconLists: ["unity.svg", "cs.svg"],
    link: "https://simmer.io/@raumild/day-z-survival",
    live: true,
  },

  {
    id: 5,
    title: "macaroni language",
    des: "a susscessful attempt to develop a programming language using Java and ANTLR.",
    img: "/macaroni.png",
    iconLists: ["/java.png"],
    link: "https://github.com/raumildhandhukia/macaroni",
  },
  {
    id: 6,
    title: "Cloud Based Image Recognition Service",
    des: "A cloud-based image recognition using AWS (EC2, SQS, S3, Lambda) and Python.",
    img: "/iaas.png",
    iconLists: ["/py.svg", "/EC2.svg", "/SQS.svg", "/S3.svg", "/Lambda.svg"],
    link: "https://github.com/raumildhandhukia/Cloud-Based-Image-Recognition-Service",
    live: false,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/raumildhandhukia",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.x.com/RaumilDhandhuk2",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/raumild/",
  },
];
