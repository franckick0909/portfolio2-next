"use client";
import { AnimatePresence, motion, stagger, useInView } from "framer-motion";
import { useRef } from "react";


const LetterSplitX = ({ phrase, delay}) => {


    const container = useRef(null);
    const isInView = useInView(container, { margin: "-50px"});

    const letter = phrase.split("");

    const slideUp = {
        initial: {
          x: 400,
          opacity: 0,
        },
        open: (i) => ({
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: i * (delay ? delay : 0.09),
            type: "tween",

          },
        }),
        closed: {
          x: 400,
          opacity: 0,
          transition: {
            duration: 0.5,
            delay: 0.09,
            type: "tween",
          },
        },
      };


  return (
    <AnimatePresence>
    <div ref={container} className='flex'>
            <p className="m-0 gap-2 inline-flex flex-wrap tracking-[-0.02em]">
                {
                    letter.map((word, index) => {
                        return (
                            <span key={index} className="relative inline-flex overflow-hidden ">
                            <motion.span
                                    whileHover={{ scale: 1.1}}
                                custom={index}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                variants={slideUp}
                                className="word mr-[2px]"
                            >
                                {word === " " ? <span>&nbsp;</span> : word}
                            </motion.span>
                            </span>
                        );
                    })
                }
            </p>
    </div>
    </AnimatePresence>
  )
}

export default LetterSplitX;