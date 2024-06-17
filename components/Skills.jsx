"use client";

import Image from "next/image";
import css from "@/public/images/skills/css.svg";
import figma from "@/public/images/skills/figma.png";
import git from "@/public/images/skills/git.png";
import html from "@/public/images/skills/html.svg";
import javascript from "@/public/images/skills/javascript.svg";
import mongodb from "@/public/images/skills/mongodb.svg";
import nodejs from "@/public/images/skills/nodejs.png";
import react from "@/public/images/skills/reactjs.png";
import sass from "@/public/images/skills/sass.png";
import tailwindcss from "@/public/images/skills/tailwindcss.svg";
import nextjs from "@/public/images/skills/nextjs.png";
import redux from "@/public/images/skills/redux.svg";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skillsData = [
    { id: 1, skill: "HTML", img: html },
    { id: 2, skill: "CSS", img: css },
    { id: 3, skill: "SASS", img: sass },
    { id: 4, skill: "TailwindCSS", img: tailwindcss },
    { id: 5, skill: "JavaScript", img: javascript },
    { id: 6, skill: "ReactJS", img: react },
    { id: 7, skill: "NextJS", img: nextjs },
    { id: 8, skill: "NodeJS", img: nodejs },
    { id: 9, skill: "MongoDB", img: mongodb },
    { id: 10, skill: "Redux", img: redux },
    { id: 11, skill: "Git", img: git },
    { id: 12, skill: "Figma", img: figma },
  ];

  const skill = useRef();
  const isSkillInView = useInView(skill, { margin: "-100px" });

  return (
    <AnimatePresence>
      <motion.div
        ref={skill}
        className="w-full flex items-center justify-center flex-wrap gap-8 "
      >
        {skillsData.map((skill, index) => (
          <motion.div
          whileHover={{ y: -5 }}
           key={index} className="overflow-hidden hover:shadow-fuchsia-500/50 hover:shadow-lg rounded-lg transition-shadow duration-300 z-10">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={isSkillInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: index * 0.09,
                duration: 0.3,
              }}
              exit={{ y: -200, opacity: 0}}
              className=" rounded-lg shadow-lg"
            >
              <motion.div className="flex flex-col border border-slate-400 rounded-lg p-4 w-max items-center justify-center hover:border-fuchsia-500 transition-all duration-300 z-10">
                <Image
                  src={skill.img}
                  alt={skill.skill}
                  className="w-20 h-20"
                />
                <p className="text-sm font-bold text-center">{skill.skill}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;