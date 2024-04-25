import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cookamiImg from "@/public/cookami.png";
import mydogpalImg from "@/public/mydogpal.png";
import mydogpallogoImg from "@/public/mydogpallogo.png";
import spacemanImg from "@/public/spaceman.png";

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
    title: "Graduated bootcamp",
    location: "Lafayette, LA",
    description:
      "I graduated after 3 months of studying. I feel adept in the many coding languages and frameworks I've learned.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Graduated Pharmacy Tech",
    location: "Lafayette, LA",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Graduated College",
    location: "Lafayette, LA",
    description:
      "I graduated in Liberial Arts, Cinematic Arts and I'm ready to make movies.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
] as const;

export const projectsData = [
  {
    title: "cookAmi",
    description:
      "I wanted to make a Facebook for recipes so I created 'cookAmi'. A dedicated user-based spot to share your recipes.",
    tags: ["JavaScript", "HTML", "MongoDB", "CSS", "Adobe Photoshop"],
    imageUrl: cookamiImg,
  },
  {
  
    title: "MyDogPal",
    description:
      "I was tired of looking up different webpages for the tools I needed for my pup. MyDogPal was created to help new and veteran dog owners keep track of their companions' health.",
    tags: ["Django", "Python", "HTML", "JavaScript", "AWS S3", "Materialize"],
    imageUrl: mydogpalImg,
  },
  {
    title: "Space-Man",
    description:
      "My first bootcamp project was to create a game using JavaScript, HTML5, and CSS. This is a take on the guess-the-letter but has the interface of a game you would play on a console.",
    tags: ["HTML", "JavaScript", "CSS"],
    imageUrl: spacemanImg,
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
  "PostgreSQL",
  "Python",
  "Django",
] as const;
