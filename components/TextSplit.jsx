"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";


const TextSplit = ({ phrase, delay }) => {

    const container = useRef(null);
    const isInView = useInView(container, { margin: "-100px"});

    const letter = phrase.split(" ");

    const slideUp = {
        initial: {
          y: 100,
          opacity: 0,
        },
        open: (i) => ({
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: i * (delay ? delay : 0.09),
          },
        }),
        closed: {
          y: 100,
          opacity: 0,
        },
      };

  return (
    <AnimatePresence>
    <div ref={container} className='flex'>
            <p
            style={{ lineHeight: 0.85}}
             className="m-0 gap-2 inline-flex flex-wrap">
                {
                    letter.map((word, index) => {
                        return (
                            <span key={index} className="relative inline-flex overflow-hidden">
                            <motion.span
                                custom={index}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                variants={slideUp}
                                className="word mr-[3px]"
                            >
                                {word}
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

export default TextSplit;