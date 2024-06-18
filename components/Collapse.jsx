"use client";

import Image from "next/image";
import { useState } from "react";
import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import React, { useRef } from "react";
import { FaCode, FaPlus, FaMinus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import DrawOutlineButton from "./DrawOutlineButton";
import Heading from "./Heading";
import { FiArrowRight } from "react-icons/fi";

const Collapse = ({
  title,
  stack,
  date,
  num,
  imgProjet,
  desc,
  theme,
  href,
  github,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["5%", "95%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const [openCollapse, setOpenCollapse] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [borderColor, setBorderColor] = useState("black");

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
    setBorderColor(openCollapse ? "black" : "indigo-500");
  };

  const icon = openCollapse ? (
    <FaMinus className="w-7 h-7" />
  ) : (
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 180 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <FaPlus className="w-7 h-7" />
    </motion.div>
  );

  const list = {
    visible: {
      height: "auto",
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      height: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        staggerDirection: -1,
      },
    },
    hidden: {
      y: 300,
      transition: {
        duration: 0.5,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemHover = {
    hiddenHover: {
      scale: 0,
      rotate: "-12.5deg",
      transition: {
        duration: 0.3,
      },
    },
    visibleHover: {
      scale: 1,
      rotate: "12.5deg",
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  const collapses = useRef();
  const isCollapseInView = useInView(collapses, { margin: "-100px" });

  return (
    <AnimatePresence>
      {/* <p className="p">{num}</p> */}
      <motion.section ref={ref} className="">
        <motion.div
          ref={collapses}
          initial={{ opacity: 0, x: 200 }}
          animate={
            isCollapseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
          }
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          className={`relative w-full h-auto flex flex-col gap-2 border-t-[2px] border-${borderColor} pt-1 pb-1`}
          onClick={handleCollapse}
        >
          <motion.div
            initial="initial"
            whileHover="whileHover"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border-separate max-w-full w-full items-center justify-between gap-4 flex max-md:flex-col max-md:items-start h-auto bg-white rounded-b-md p-4 shadow border-black overflow-hidden"
          >
            <div className="flex-1 h-full flex items-center w-full justify-start">
              {/* <h3 className="h3 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              {title}
              
            </h3> */}

              <Heading heading={title} subheading={num} />

              {/* <button
              className="text-black ring-1 ring-black bg-indigo-100 rounded-full p-2 max-md:block hidden z-50"
              onClick={handleCollapse}
            >
              {icon}
            </button> */}
              <motion.div
                onClick={handleCollapse}
                variants={{
                  initial: {
                    x: "25%",
                    opacity: 0,
                  },
                  whileHover: {
                    x: "0%",
                    opacity: 1,
                  },
                }}
                transition={{ type: "spring" }}
                className=" z-10 p-2 max-md:flex hidden justify-end flex-1 w-full"
              >
                <FiArrowRight className="text-3xl text-neutral-600" />
              </motion.div>
            </div>
            <motion.div
              style={{
                top,
                left,
                translateX: "-50%",
                translateY: "-50%",
              }}
              variants={itemHover}
              initial="hiddenHover"
              animate={hovered ? "visibleHover" : "hiddenHover"}
              exit="hiddenHover"
              className="absolute top-[50%] left-[50%] rounded-lg z-40 bg-white  transform -translate-x-1/2 -translate-y-1/2 h-24 w-32 md:h-48 md:w-64"
            >
              <Image
                src={imgProjet}
                alt="projet"
                objectFit="cover"
                className="h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
              />
            </motion.div>

            <div className="flex max-md:flex items-center max-md:justify-between max-md:w-full flex-1">
              <div className="flex-1 h-full flex items-center justify-start w-full">
                <p className="paragraph">{stack}</p>
              </div>
              <div className="flex-1 h-full flex items-center justify-center w-full max-md:justify-end">
                <h5 className="h5">{date}</h5>
              </div>
            </div>
            <div className="flex-1 h-full flex items-center justify-end w-full max-md:hidden">
              <motion.div
                onClick={handleCollapse}
                variants={{
                  initial: {
                    x: "25%",
                    opacity: 0,
                  },
                  whileHover: {
                    x: "0%",
                    opacity: 1,
                  },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
              >
                <FiArrowRight className="text-5xl text-neutral-600" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={`w-full h-auto overflow-hidden max-md:text-sm text-base rounded-md shadow ${
              openCollapse ? "h-auto" : "h-0"
            }`}
            variants={list}
            initial="hidden"
            animate={openCollapse ? "visible" : "hidden"}
          >
            <motion.div
              className="w-full h-max px-4 py-4 bg-white rounded-md overflow-hidden max-md:text-sm text-base  grider gap-4"
              variants={item}
            >
              <motion.div className="h-full w-full rounded-md " variants={item}>
                <Image
                  src={imgProjet}
                  alt="projet"
                  className="rounded-md w-80 max-h-60 object-cover"
                />
              </motion.div>

              <motion.div
                className="w-full h-full p-4 rounded-md bg-white max-md:text-sm text-base"
                variants={item}
              >
                <h5 className="text-black h5 bold uppercase">Navigation</h5>
                <div className=" border-indigo-500 mb-4 border-solid border-b-[1px]"></div>

                <div className="flex gap-4 items-center justify-between flex-wrap mt-4 uppercase w-full h-auto">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                    className="flex overflow-hidden w-full relative shadowInset"
                  >
                    <DrawOutlineButton>
                      Github
                      <FaCode className="w-5 h-5 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:right-[2rem] transition-all duration-300 absolute right-0" />
                    </DrawOutlineButton>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    className="flex overflow-hidden w-full relative shadowInset"
                  >
                    <DrawOutlineButton>
                      {title}
                      <FaExternalLinkAlt className="w-4 h-4 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:right-[2rem] transition-all duration-300 absolute right-0" />
                    </DrawOutlineButton>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="w-full h-full p-4 rounded-md bg-white max-md:text-sm text-base"
                variants={item}
              >
                <h4 className="text-black h5 bold">DESCRIPTION</h4>
                <div className="border-indigo-500 mb-4 border-b-[0.5px]"></div>
                <p className="paragraph text-black">{desc}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Collapse;

// grid max-md:grid-cols-none grid-cols-4

// max-md:flex-col justify-between items-start gap-4
