import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ampmImg from "@/public/project-ampm-mobile.png";
import sddocsImg from "@/public/project-sddocs.png";
import petercanImg from "@/public/project-petercan.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "South Korea",
    description:
      "I majored in Political Science and Business at the University of Incheon.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Document Controller",
    location: "South Korea",
    description:
      "I worked as a document controller for 8 months at Samsung Techwin. My responsibilities included checking the quality of documents and coordinating documents between customers and engineers.",
    icon: React.createElement(CgWorkAlt),
    date: "2013",
  },
  {
    title: "Graduated College",
    location: "Kelowna, BC",
    description:
      "I studied Computer Information Systems at Okanagan College.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Graduated Bootcamp",
    location: "Online",
    description:
      "I studied Full Stack Developer Course at Openclassrooms.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Web Developer",
    location: "West Vancouver, BC",
    description:
      "I worked at Fedroc Holdings as a web developer, where my role involved managing and creating new websites for continuous improvement.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Web Developer",
    location: "Port Coquitlam, BC",
    description:
      "I'm working as a web developer, where my role involved managing and creating new websites/web apps for continuous improvement.",
      icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AMPM Mobile Website",
    description:
      "Built company website using asp.net core.",
    tags: ["Asp.net Core", "C#", "Microsoft SQL", "Javascript", "Html", "Css"],
    imageUrl: ampmImg,
  },
  {
    title: "Immigration Company Website",
    description:
      "Built immigration company website using wordpress",
    tags: ["Wordpress", "Elementor", "Canva", "Javascript", "Html"],
    imageUrl: petercanImg,
  },
  {
    title: "User Manual Web Application",
    description:
      "Built user manual web application and admin page using asp.net core.",
    tags: ["Asp.net Core", "C#", "Microsoft SQL", "Javascript", "Html"],
    imageUrl: sddocsImg,
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
  "ASP.NET",
  "C#",
  "Mysql",
  "Microsoft SQL",
  "Framer Motion",
  "Wordpress",
  "Bootstrap",
  "Figma",
  "Shopify",
  "PHP",
  "Webflow",
  "Git"
] as const;