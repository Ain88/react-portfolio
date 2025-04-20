import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ampmImg from "@/public/project-ampm-mobile.png";
import sddocsImg from "@/public/project-sddocs.png";
import petercanImg from "@/public/project-petercan.png";
import pandadocImg from "@/public/project-pandadoc.png";
import aivoiceImg from "@/public/project-ai-voice.png";

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
    location: "Incheon, South Korea",
    description:
      "Completed my Bachelor's degree in Political Science and International Trade at Incheon National University.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Document Controller",
    location: "Pangyo, South Korea",
    description:
      "Worked at Samsung Techwin ensuring document accuracy, consistency, and revision control, and coordinated workflows between engineers and external partners.",
    icon: React.createElement(CgWorkAlt),
    date: "2013",
  },
  {
    title: "Intern",
    location: "Kelowna, BC",
    description:
      "Worked at WTFast conducting game testing and market research on the Korean gaming industry to improve product experience and strategy.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Graduated College",
    location: "Kelowna, BC",
    description:
      "Earned a diploma in Computer Information Systems from Okanagan College.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Graduated Bootcamp",
    location: "Online",
    description:
      "Completed a Full Stack Software Developer bootcamp through OpenClassrooms.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Web Developer",
    location: "West Vancouver, BC",
    description:
      "Maintained and improved Magento/WooCommerce sites and developed new features using LAMP stack and Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Web Developer",
    location: "Port Coquitlam, BC",
    description:
      "Built responsive landing pages, dashboards, and internal apps using ASP.NET MVC, HTML/CSS, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "ASP.NET Developer",
    location: "New Westminster, BC",
    description:
      "Maintaining and enhancing ASP.NET-based internal tools and applications, integrating APIs like PandaDoc and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "AI Voice Integration",
    description:
      "Integrated AI voice services into CRM to improve support workflows and streamline communication.",
    tags: ["ASP.NET", "C#", "Microsoft SQL", "JavaScript", "HTML", "CSS"],
    imageUrl: aivoiceImg,
    link: "", // add if you have a demo or video
  },
  {
    title: "PandaDoc Integration",
    description:
      "Embedded PandaDoc into CRM systems for seamless document generation and e-signing.",
    tags: ["ASP.NET", "C#", "Microsoft SQL", "JavaScript", "HTML", "CSS"],
    imageUrl: pandadocImg,
    link: "", // add if there's something viewable
  },
  {
    title: "AMPM Mobile Website",
    description:
      "Developed the official company website using ASP.NET Core and Bootstrap.",
    tags: ["ASP.NET", "C#", "Microsoft SQL", "JavaScript", "HTML", "CSS"],
    imageUrl: ampmImg,
    link: "https://ampmmobile.com",
  },
  {
    title: "Immigration Website",
    description:
      "Built a professional website for an immigration consulting company using WordPress and Elementor.",
    tags: ["WordPress", "Elementor", "Canva", "JavaScript", "HTML"],
    imageUrl: petercanImg,
    link: "https://petercan.ca",
  },
  {
    title: "User Manual Web App",
    description:
      "Built an internal user documentation portal with an admin backend.",
    tags: ["ASP.NET", "C#", "Microsoft SQL", "JavaScript", "HTML"],
    imageUrl: sddocsImg,
    link: "https://docs.sdcloudpos.com",
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
  "Tailwind CSS",
  "ASP.NET",
  "C#",
  "MySQL",
  "Microsoft SQL",
  "AWS",
  "Azure",
  "WordPress",
  "Elementor",
  "Bootstrap",
  "Figma",
  "Photoshop",
  "PHP",
  "Webflow",
  "SCSS",
  "jQuery",
  "Canva"
] as const;
