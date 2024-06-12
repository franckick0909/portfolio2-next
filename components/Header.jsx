"use client";
import Link from "next/link";
import NavTop from "./NavTop";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "About", href: "/about" },
  { text: "Service", href: "/service" },
  { text: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    close: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    open: {
      y: "0.5rem",
      rotate: 45,
      originX: "center",
      backgroundColor: "white",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const middleVariants = {
    close: {
      when: "afterChildren",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const bottomVariants = {
    close: {
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      y: "-0.5rem",
      rotate: -45,
      originX: "center",
      backgroundColor: "white",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <header className="w-full h-full flex py-8 text-black ">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="">
          <h1 className="text-4xl font-semibold">
            FK<span className="text-indigo-500">.</span>
          </h1>
        </Link>

        {/* Menu on top */}
        <div className="w-full max-lg:hidden">
          <NavTop />
        </div>

        <div className="">
          {/* Burger button */}
          {/* DESKTOP MENU 3 traits */}
          <div className="fixed top-10 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-[51]">
            <button
              className=" w-10 h-6 flex flex-col items-center justify-center gap-[5px] z-50 relative"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <motion.div
                variants={topVariants}
                animate={isOpen ? "open" : "close"}
                className="w-10 max-lg:w-8 h-[2px] bg-black rounded"
              ></motion.div>
              <motion.div
                variants={middleVariants}
                animate={isOpen ? "open" : "close"}
                className="w-10 max-lg:w-8 h-[2px] bg-black rounded "
              ></motion.div>
              <motion.div
                variants={bottomVariants}
                animate={isOpen ? "open" : "close"}
                className="w-10 max-lg:w-8 h-[2px] bg-black rounded"
              ></motion.div>
            </button>
          </div>
          {/* Menu Mobile */}

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen z-50 p-10 bg-black flex justify-center items-center origin-top"
              >
                <div className="h-full flex flex-col justify-center items-start w-3/4">
                  <div className="flex items-center justify-between w-full mb-4 border-x-transparent border-y-slate-400 border-y-[0.5px] py-6 text-base text-slate-400 ">
                    <p>Navigation</p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-base text-slate-400"
                    >
                      Close
                    </button>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full w-full justify-center gap-0"
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div key={index} className="overflow-hidden">
                          <MobileNavLink link={link.text} href={link.href} />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ link, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-8xl max-md:text-5xl relative group"
    >
      <span className="w-full rounded bg-gradient-to-r to-transparent via-slate-950 from-slate-800 absolute bottom-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-[-1] scale-y-0 group-hover:scale-y-75 bg-origin-content cursor-pointer "></span>
      <Link
        href={href}
        className="cursor-pointer z-[3000] text-white uppercase w-full group-hover:tracking-widest ease-linear duration-300 font-playfair"
      >
        {link}
      </Link>
    </motion.div>
  );
};
