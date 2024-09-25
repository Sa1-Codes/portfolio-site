import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import corpcommentImg from "../../public/corpcomment.png"
import rmtdevImg from "../../public/rmtdev.png"
import wordanalyticsImg from "../../public/wordanalytics.png"
import anonymousmessage1 from "../../public/anonymousmessage1.png"
import currencyconverter from "../../public/currencyconverter.png"
import todolist from "../../public/todolist.png"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anonymous Message",
    description:
      "Developed a fullstack anonymous messaging app enabling users to send messages anonymously to others and provide feedback on companies and their products.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind","Typescript"],
    imageUrl: anonymousmessage1,
  },
  {
    title: "Todolist",
    description:
      "Developed a dynamic to-do app allowing users to seamlessly add, edit, and delete tasks. The app enable users to manage their day to day tasks in a simple manner.",
    tags: ["React", "JavaScript", "Tailwind",],
    imageUrl: todolist,
  },
  {
    title: "Currency Converter",
    description:
      "Build a dynamic currency conveter app that allow user to convert the currency. Intergrated a third party API for converting the currency on present exchange rate.",
    tags: ["React", "Javascript", "Tailwind"],
    imageUrl: currencyconverter,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "C",
  "C++"
] as const;