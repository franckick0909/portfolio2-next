"use client";

import Biographie from "@/components/biographie";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Cerveau from "@/components/cerveau";
import SvgScroll from "@/components/svgScroll";
import LetterSplitX from "@/components/LetterSplitX";

const PageAbout = () => {
  const bioRef = useRef();

  const isBioRefInView = useInView(bioRef, { margin: "-100px" });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const TimelineRef = useRef();
  const isTimelineRefInView = useInView(TimelineRef, { margin: "-100px" });

  return (
    <motion.section className="w-full min-h-screen relative bg-light dark:bg-dark overflow-hidden">
      <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14">
        <motion.h1 className="w-full uppercase inline-flex items-center justify-center title my-20">
          <LetterSplitX phrase="à propos de moi" />
        </motion.h1>

        <motion.div className="grid md:grid-cols-2 gap-8 relative mt-14 ">
          <div className="grid gap-20 w-full max-md:w-full">
            <section
              ref={bioRef}
              className="flex flex-col gap-12 justify-center w-full"
            >
              <div className="flex items-baseline justify-start gap-2 overflow-hidden">
                <motion.h1
                  initial={{ y: 300 }}
                  animate={isBioRefInView ? { y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-black dark:text-white z-10 title"
                  style={{ lineHeight: "0.75"}}
                >
                  01
                </motion.h1>

                <h4 className="font-semibold text-2xl border-collapse border-y-2 border-indigo-500 h4 uppercase">
                  Biographie
                </h4>
              </div>
              <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col text-justify gap-6 rounded-lg p-4">
                <Biographie />
              </div>
              <div className="max-w-28 h-auto mt-8">
                <SvgScroll />
              </div>
            </section>

            <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col text-justify gap-6">
              <section
                ref={skillRef}
                className="flex flex-col gap-12 justify-center w-full overflow-hidden"
              >
                <div className="flex items-baseline gap-2">
                  <motion.h1
                    initial={{ x: "-200px" }}
                    animate={isSkillRefInView ? { x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-black dark:text-white z-10 title"
                    style={{ lineHeight: "0.75"}}
                  >
                    02
                  </motion.h1>
                  <h4 className="text-2xl border-collapse border-y-2 border-indigo-500 h4 uppercase font-semibold">
                    SKILLS
                  </h4>
                </div>
                <div className="w-full flex flex-col items-center justify-center text-justify gap-6 mb-8">
                  <Skills />
                </div>
              </section>

              <div className="max-w-28 mt-8">
                <SvgScroll />
              </div>
            </div>

            <div className="w-full flex flex-col pt-16">
              <section
                ref={TimelineRef}
                className="flex flex-col gap-12 justify-center w-full"
              >
                <div className="flex items-baseline gap-8 overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={isTimelineRefInView ? { y: 0 } : { y: "100%" }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-black dark:text-white z-10 title"
                    style={{ lineHeight: "0.75"}}
                  >
                    03
                  </motion.h1>
                  <h4 className="font-semibold h4 border-collapse border-y-2 border-indigo-500 uppercase">
                    Expériences
                  </h4>
                </div>
                <div className="w-full flex flex-col items-center justify-center text-justify gap-6 rounded-lg py-8 mb-96">
                  <Timeline />
                </div>
              </section>
            </div>
          </div>

          <div className="">
            <div className="hidden md:block sticky top-40">
              <Cerveau />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageAbout;
