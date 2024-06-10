"use client";
import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const LetterScroll = ({ letter }) => {

  const container = useRef(null);
  const isInView = useInView(container, { margin: "-100px" });

  const slideUp = {
    initial: {
      y: 300,
      opacity: 0,
    },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.09,
      },
    }),
  };

  return (
    <AnimatePresence>
      <div ref={container} className="flex">
        <p className="m-0 gap-2 inline-flex flex-wrap">
          {letter.map((letter, index) => {
            return (
              <span key={index} className="relative inline-flex overflow-hidden">
                <motion.span
                  custom={index}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  variants={slideUp}
                  className="word mr-[3px]"
                >
                  {letter}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </AnimatePresence>
  );
};

export default LetterScroll;
