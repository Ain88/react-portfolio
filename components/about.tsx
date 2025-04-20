"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Political Science and Business</span>, I
        transitioned into the tech field by completing a Computer Science Diploma. 
        With over five years of experience, I have worked on a variety of projects
        in web development, contributing to both technical tasks and coordinating 
        aspects like communication and planning for successful execution. I specialize in{" "}
        <span className="font-medium">ASP.NET Core MVC</span> and web development, 
        with a constant drive to learn and adopt new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, cooking, and continuously expanding my knowledge. I’m currently 
        exploring the utilization of{" "}
        <span className="font-medium">AI tools and technologies</span> to enhance 
        my skill set and drive innovation in my projects.
      </p>
    </motion.section>
  );
}
