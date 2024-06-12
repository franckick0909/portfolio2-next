"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode, FaPlus, FaMinus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import DrawOutlineButton from "./DrawOutlineButton";

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
    transition={{ ease: "easeInOut", duration: 0.3 }}>
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
      transition: {
        duration: 0.3,
      },
    },
    visibleHover: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };



  return (
    <AnimatePresence>
      <p className="p">{num}</p>
      <motion.div
       className={`relative w-full h-auto flex flex-col gap-2 border-t-[2px] border-${borderColor} pt-1 pb-1`} onClick={handleCollapse}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="border-separate max-w-full w-full text-left items-center justify-between gap-4 flex max-md:flex-col max-md:items-start h-auto bg-white rounded-md p-4   transition-shadow duration-300 ease-in-out shadow border-black"
        >
          <div className="flex-1 h-full flex items-center w-full justify-between ">
            <h3 className="h3 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              {title}
            </h3>

            <button
              className="text-black ring-1 ring-black bg-indigo-100 rounded-full p-2 max-md:block hidden z-50"
              onClick={handleCollapse}
            >
              {icon}
            </button>
          </div>
          <motion.div
            variants={itemHover}
            initial="hiddenHover"
            animate={hovered ? "visibleHover" : "hiddenHover"}
            exit="hiddenHover"
            className="absolute top-[-50%] left-1/2 rounded-lg z-40 w-60 h-40 bg-white  transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={imgProjet}
              alt="projet"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>

          <div className="flex-1 h-full flex items-center w-full ">
            <p className="paragraph">{stack}</p>
          </div>
          <div className="flex-1 h-full flex items-center justify-end w-full">
            <h5 className="h5">{date}</h5>
          </div>

          <div className="flex-1 h-full flex items-center justify-end w-full max-md:justify-start max-md:hidden">
            <button
              className="text-black ring-1 ring-black bg-indigo-100 rounded-full p-3 p z-20"
              onClick={handleCollapse}
            >
              {icon}
            </button>
          </div>
        </div>

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
            <motion.div
              className="h-full w-full rounded-md "
              variants={item}
            >
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

              <div className="flex flex-col gap-4 flex-wrap mt-4 uppercase">
              <a
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                  className="flex items-center oveflow-hidden"
                >
                  <DrawOutlineButton>
                  Github<FaCode className="w-4 h-4 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </DrawOutlineButton>

                  <div className="w-6 h-6 flex items-center justify-center"></div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="flex items-center oveflow-hidden"
                >
                  <DrawOutlineButton>
                  {title}<FaExternalLinkAlt className="w-4 h-4 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </DrawOutlineButton>

                  <div className="w-6 h-6 flex items-center justify-center"></div>
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
    </AnimatePresence>
  );
};

export default Collapse;

// grid max-md:grid-cols-none grid-cols-4

// max-md:flex-col justify-between items-start gap-4
