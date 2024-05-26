const PORTFOLIOSITE = process.env.NEXT_PUBLIC_PORTFOLIOSITE;

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "Currently building a Dog Meetup App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
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
    img: "/thiswebsite.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: `${PORTFOLIOSITE}`,
    live: true,
  },
  {
    id: 2,
    title: "Next-Notes",
    des: "Share and collaborate on notes with your team in real-time using Next.js.",
    img: "/nextnotes.png",
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
    img: "/game.png",
    iconLists: ["unity.svg", "cs.svg"],
    link: "https://simmer.io/@raumild/day-z-survival",
    live: true,
  },
  {
    id: 5,
    title: "Cloud Based Image Recognition Service",
    des: "A cloud-based image recognition using AWS (EC2, SQS, S3, Lambda) and Python.",
    img: "/iaas.png",
    iconLists: ["/py.svg", "/EC2.svg", "/SQS.svg", "/S3.svg", "/Lambda.svg"],
    link: "https://github.com/raumildhandhukia/Cloud-Based-Image-Recognition-Service",
    live: false,
  },
];

export const workExperience = [
  {
    id: 2,
    title: "Software Developer - ForkLyft",
    desc: "Integrated GPS into fleet management systems and reduced operational costs using React.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Software Engineer - Setu Consulting Services Pvt. Ltd.",
    desc: "Developed and Deployed CRM and ERP solitons for clients. using Python, PostgreSQL, and JavaScript.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },

  {
    id: 3,
    title: "Developer Intern - Emipro Technologies Pvt. Ltd.",
    desc: "Assisted in the development of Odoo ERP modules and maintained existing codebases using Python.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Technology Consultant - Arizona State University",
    desc: " Customer-specific customization on top of Canvas LMS and developing custom plugins using JavaScript.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
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
