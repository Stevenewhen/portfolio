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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm Steven, a full-stack developer with a passion for crafting elegant solutions to complex problems. My expertise lies in React, Next.js, Node.js, and MongoDB, complemented by a knack for UX design and CSS libraries.
      </p>

      <p>
        Beyond coding, I'm an avid gamer, movie enthusiast, and dog lover. I'm currently exploring cinematography, philosophy, and the soothing melodies of the ukele. I'm on the lookout for exciting opportunities where I can contribute my skills and passion to innovative projects.
      </p>
    </motion.section>
  );
}
